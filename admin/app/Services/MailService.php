<?php

namespace App\Services;

use Illuminate\Support\Facades\Log;

class MailService
{
    private static function log(string $level, string $message): void
    {
        try {
            if (class_exists(Log::class)) {
                Log::$level($message);
            }
        } catch (\Throwable $e) {
            // Silently continue if logger is not booted
        }
    }

    private static function getSmtpConfig(): array
    {
        return [
            'smtp_host'  => (string)(env('SMTP_HOST') ?: env('MAIL_HOST', 'smtp.gmail.com')),
            'smtp_port'  => (int)(env('SMTP_PORT') ?: env('MAIL_PORT', 465)),
            'smtp_user'  => (string)(env('SMTP_USER') ?: env('MAIL_USERNAME', 'webdev@sociapa.com')),
            'smtp_pass'  => (string)(env('SMTP_PASS') ?: env('MAIL_PASSWORD', '')),
            'from_email' => (string)(env('MAIL_FROM_ADDRESS', 'webdev@sociapa.com')),
            'from_name'  => (string)(env('MAIL_FROM_NAME', 'Sociapa')),
        ];
    }

    private static array $adminRecipients = [
        'mail@sociapa.com',
        'dheeraj@sociapa.com',
        'webdev@sociapa.com'
    ];

    /**
     * Mail sending switch - enabled for admin notification recipients
     */
    public static bool $enabled = true;

    /**
     * User confirmation switch - STRICTLY DISABLED.
     * User will NOT receive any email. Only admin recipients receive enquiry notifications.
     */
    public static bool $sendUserConfirmation = false;

    /**
     * Check if email sending is enabled
     */
    public static function isMailEnabled(): bool
    {
        $envEnabled = env('MAIL_NOTIFICATIONS_ENABLED');
        if ($envEnabled !== null) {
            return filter_var($envEnabled, FILTER_VALIDATE_BOOLEAN);
        }
        return self::$enabled;
    }

    /**
     * Get list of admin email recipients (mail@sociapa.com, dheeraj@sociapa.com, webdev@sociapa.com)
     */
    public static function getAdminRecipients(): array
    {
        $envEmails = env('ADMIN_NOTIFICATION_EMAILS');
        if (!empty($envEmails)) {
            $parsed = array_filter(array_map('trim', explode(',', $envEmails)));
            $allowed = array_filter($parsed, function($email) {
                return !empty($email) && filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
            });
            if (!empty($allowed)) {
                return array_values(array_unique($allowed));
            }
        }
        return self::$adminRecipients;
    }

    /**
     * Send email via direct SSL socket SMTP (Port 465 / 587 fallback)
     */
    public static function sendSmtpEmail(string $toEmail, string $subject, string $htmlContent, string $replyToEmail = '', string $replyToName = ''): bool
    {
        $cleanToEmail = strtolower(trim($toEmail));

        // Validate recipient email address
        if (empty($cleanToEmail) || !filter_var($cleanToEmail, FILTER_VALIDATE_EMAIL)) {
            self::log('warning', "MailService: Invalid recipient email address: '{$toEmail}'");
            return false;
        }

        // If disabled, do not send any email
        if (!self::isMailEnabled()) {
            self::log('info', "MailService: Email sending is currently DISABLED. Skipped sending to {$toEmail}.");
            return true;
        }
        $smtpConfig = self::getSmtpConfig();
        if (empty($smtpConfig['smtp_user']) || empty($smtpConfig['smtp_pass'])) {
            self::log('error', "MailService: SMTP credentials not configured in .env (MAIL_PASSWORD / SMTP_PASS).");
            return false;
        }
        $context = stream_context_create([
            'ssl' => [
                'verify_peer'       => false,
                'verify_peer_name'  => false,
                'allow_self_signed' => true
            ]
        ]);

        // Try SSL port 465 first
        $socket = @stream_socket_client(
            "ssl://" . $smtpConfig['smtp_host'] . ":" . $smtpConfig['smtp_port'],
            $errno,
            $errstr,
            12,
            STREAM_CLIENT_CONNECT,
            $context
        );

        $useTls = false;
        // Fallback to TLS on port 587 if 465 fails
        if (!$socket) {
            $socket = @stream_socket_client(
                "tcp://" . $smtpConfig['smtp_host'] . ":587",
                $errno,
                $errstr,
                12,
                STREAM_CLIENT_CONNECT,
                $context
            );
            if ($socket) {
                $useTls = true;
            }
        }

        if (!$socket) {
            self::log('error', "MailService: Could not connect to SMTP server: $errstr ($errno)");
            return false;
        }

        fgets($socket, 512);

        fputs($socket, "EHLO localhost\r\n");
        while ($line = fgets($socket, 512)) {
            if (substr($line, 3, 1) == ' ') break;
        }

        if ($useTls) {
            fputs($socket, "STARTTLS\r\n");
            fgets($socket, 512);
            stream_socket_enable_crypto($socket, true, STREAM_CRYPTO_METHOD_TLSv1_2_CLIENT | STREAM_CRYPTO_METHOD_TLSv1_3_CLIENT);
            fputs($socket, "EHLO localhost\r\n");
            while ($line = fgets($socket, 512)) {
                if (substr($line, 3, 1) == ' ') break;
            }
        }

        // AUTH LOGIN
        fputs($socket, "AUTH LOGIN\r\n");
        fgets($socket, 512);

        fputs($socket, base64_encode($smtpConfig['smtp_user']) . "\r\n");
        fgets($socket, 512);

        fputs($socket, base64_encode($smtpConfig['smtp_pass']) . "\r\n");
        $authCode = fgets($socket, 512);

        if (substr($authCode, 0, 3) != '235') {
            self::log('error', "MailService: SMTP Authentication failed: $authCode");
            fclose($socket);
            return false;
        }

        fputs($socket, "MAIL FROM: <" . $smtpConfig['from_email'] . ">\r\n");
        fgets($socket, 512);

        fputs($socket, "RCPT TO: <{$toEmail}>\r\n");
        fgets($socket, 512);

        fputs($socket, "DATA\r\n");
        fgets($socket, 512);

        $headers  = "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/html; charset=utf-8\r\n";
        $headers .= "From: " . $smtpConfig['from_name'] . " <" . $smtpConfig['from_email'] . ">\r\n";
        $headers .= "To: <{$toEmail}>\r\n";
        if (!empty($replyToEmail)) {
            $rName = !empty($replyToName) ? $replyToName : $replyToEmail;
            $headers .= "Reply-To: {$rName} <{$replyToEmail}>\r\n";
        }
        $headers .= "Subject: {$subject}\r\n";
        $headers .= "Date: " . date('r') . "\r\n";
        $headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";

        fputs($socket, "{$headers}\r\n{$htmlContent}\r\n.\r\n");
        $dataCode = fgets($socket, 512);

        fputs($socket, "QUIT\r\n");
        fclose($socket);

        return (substr($dataCode, 0, 3) == '250');
    }

    /**
     * Send email to Admin recipient (webdev@sociapa.com only)
     */
    public static function sendToAdmins(string $subject, string $htmlContent, string $replyToEmail = '', string $replyToName = ''): bool
    {
        $allSuccess = true;
        foreach (self::getAdminRecipients() as $adminEmail) {
            $success = self::sendSmtpEmail($adminEmail, $subject, $htmlContent, $replyToEmail, $replyToName);
            if (!$success) {
                $allSuccess = false;
            }
        }
        return $allSuccess;
    }

    /**
     * 1. Contact Form Notification (Admin Only)
     */
    public static function notifyContact(array $data): void
    {
        try {
            $name    = htmlspecialchars(trim(($data['first_name'] ?? '') . ' ' . ($data['last_name'] ?? '')), ENT_QUOTES, 'UTF-8');
            $email   = htmlspecialchars(trim($data['email'] ?? ''), ENT_QUOTES, 'UTF-8');
            $phone   = htmlspecialchars(trim($data['phone'] ?? 'Not provided'), ENT_QUOTES, 'UTF-8');
            $message = nl2br(htmlspecialchars(trim($data['message'] ?? ''), ENT_QUOTES, 'UTF-8'));
            $date    = date('d M Y, h:i A') . ' IST';

            // Admin Email Notification
            $adminSubject = "✦ New Website Inquiry from {$name}";
            $adminHtml = self::buildEmailTemplate("New Website Inquiry", [
                "Full Name"     => $name,
                "Email Address" => "<a href='mailto:{$email}' style='color:#d20c0c;text-decoration:none;'>{$email}</a>",
                "Phone Number"  => $phone,
                "Message"       => "<div style='background:#f8fafc;padding:12px;border-left:4px solid #d20c0c;border-radius:6px;line-height:1.6;'>{$message}</div>"
            ], "Sociapa Contact Form • {$date}");

            self::sendToAdmins($adminSubject, $adminHtml, $email, $name);

            // User Confirmation Email (DISABLED - Only Admin gets enquiry emails)
            if (self::$sendUserConfirmation && !empty($email) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
                $userSubject = "Thank you for contacting Sociapa!";
                $userHtml = self::buildUserConfirmationTemplate($name, "We have received your message and our strategy team will reach out to you within 24 business hours.");
                self::sendSmtpEmail($email, $userSubject, $userHtml, 'webdev@sociapa.com', 'Sociapa');
            }
        } catch (\Throwable $e) {
            self::log('error', "MailService notifyContact failed: " . $e->getMessage());
        }
    }

    /**
     * 2. Website Audit Form Notification (Admin Only)
     */
    public static function notifyAudit(array $data, ?string $fileUrl = null): void
    {
        try {
            $name    = htmlspecialchars(trim($data['full_name'] ?? ''), ENT_QUOTES, 'UTF-8');
            $email   = htmlspecialchars(trim($data['email'] ?? ''), ENT_QUOTES, 'UTF-8');
            $url     = htmlspecialchars(trim($data['website_url'] ?? ''), ENT_QUOTES, 'UTF-8');
            $phone   = htmlspecialchars(trim($data['phone'] ?? 'Not provided'), ENT_QUOTES, 'UTF-8');
            $goals   = htmlspecialchars(trim($data['goals'] ?? 'General Audit'), ENT_QUOTES, 'UTF-8');
            $date    = date('d M Y, h:i A') . ' IST';

            $fields = [
                "Client Name"   => $name,
                "Audit Category" => "<strong>{$goals}</strong>",
                "Website URL"   => "<a href='{$url}' target='_blank' style='color:#d20c0c;'>{$url}</a>",
                "Email Address" => "<a href='mailto:{$email}' style='color:#d20c0c;'>{$email}</a>",
                "Phone Number"  => $phone,
            ];

            if ($fileUrl) {
                $fields["Campaign Document / Brief"] = "<a href='{$fileUrl}' target='_blank' style='color:#d20c0c;font-weight:bold;text-decoration:underline;'>📄 View / Download Attached Document</a>";
            }

            // Admin Email Notification (Strictly to webdev@sociapa.com)
            $adminSubject = "✦ Free Audit Request [{$goals}] from {$name} ({$url})";
            $adminHtml = self::buildEmailTemplate("Free Audit Request - {$goals}", $fields, "Sociapa Free Audit • {$date}");

            self::sendToAdmins($adminSubject, $adminHtml, $email, $name);

            // User Confirmation Email (DISABLED - Only Admin gets enquiry emails)
            if (self::$sendUserConfirmation && !empty($email) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
                $userSubject = "Your Free Website Audit Request — Sociapa";
                $userHtml = self::buildUserConfirmationTemplate($name, "Thank you for requesting a free audit for <strong>{$url}</strong>. Our digital marketing & technical SEO analysts have begun auditing your website. We'll share your detailed breakdown shortly.");
                self::sendSmtpEmail($email, $userSubject, $userHtml, 'webdev@sociapa.com', 'Sociapa');
            }
        } catch (\Throwable $e) {
            self::log('error', "MailService notifyAudit failed: " . $e->getMessage());
        }
    }

    /**
     * 3. Career Application Notification (Admin Only)
     */
    public static function notifyCareer(array $data, ?string $resumeUrl = null): void
    {
        try {
            $name       = htmlspecialchars(trim($data['full_name'] ?? ''), ENT_QUOTES, 'UTF-8');
            $email      = htmlspecialchars(trim($data['email'] ?? ''), ENT_QUOTES, 'UTF-8');
            $phone      = htmlspecialchars(trim($data['phone'] ?? ''), ENT_QUOTES, 'UTF-8');
            $position   = htmlspecialchars(trim($data['position'] ?? ''), ENT_QUOTES, 'UTF-8');
            $experience = htmlspecialchars(trim($data['experience'] ?? ''), ENT_QUOTES, 'UTF-8');
            $portfolio  = htmlspecialchars(trim($data['portfolio_url'] ?? 'Not provided'), ENT_QUOTES, 'UTF-8');
            $date       = date('d M Y, h:i A') . ' IST';

            $fields = [
                "Candidate Name" => $name,
                "Position"       => "<strong>{$position}</strong>",
                "Experience"     => $experience,
                "Email Address"  => "<a href='mailto:{$email}' style='color:#d20c0c;'>{$email}</a>",
                "Phone Number"   => $phone,
                "Portfolio URL"  => $portfolio !== 'Not provided' ? "<a href='{$portfolio}' target='_blank' style='color:#d20c0c;'>{$portfolio}</a>" : 'Not provided',
            ];

            if ($resumeUrl) {
                $fields["Resume Link"] = "<a href='{$resumeUrl}' target='_blank' style='color:#d20c0c;font-weight:bold;'>Download / View Resume</a>";
            }

            // Admin Email Notification
            $adminSubject = "✦ Job Application: {$position} - {$name}";
            $adminHtml = self::buildEmailTemplate("New Career Application", $fields, "Sociapa Careers • {$date}");

            self::sendToAdmins($adminSubject, $adminHtml, $email, $name);

            // User Confirmation Email (DISABLED - Only Admin gets enquiry emails)
            if (self::$sendUserConfirmation && !empty($email) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
                $userSubject = "We received your application for {$position} — Sociapa";
                $userHtml = self::buildUserConfirmationTemplate($name, "Thank you for applying for the <strong>{$position}</strong> role at Sociapa. Our recruitment team is reviewing your profile and credentials. If shortlisted, we'll reach out to schedule an interview.");
                self::sendSmtpEmail($email, $userSubject, $userHtml, 'webdev@sociapa.com', 'Sociapa Careers');
            }
        } catch (\Throwable $e) {
            self::log('error', "MailService notifyCareer failed: " . $e->getMessage());
        }
    }

    /**
     * 4. Influencer Registration Notification (Admin Only)
     */
    public static function notifyInfluencer(array $data): void
    {
        try {
            $name      = htmlspecialchars(trim($data['full_name'] ?? ''), ENT_QUOTES, 'UTF-8');
            $email     = htmlspecialchars(trim($data['email'] ?? ''), ENT_QUOTES, 'UTF-8');
            $phone     = htmlspecialchars(trim($data['phone'] ?? ''), ENT_QUOTES, 'UTF-8');
            $instagram = htmlspecialchars(trim($data['instagram_handle'] ?? $data['instagram'] ?? 'Not provided'), ENT_QUOTES, 'UTF-8');
            $category  = htmlspecialchars(trim($data['category'] ?? 'General'), ENT_QUOTES, 'UTF-8');
            $message   = nl2br(htmlspecialchars(trim($data['message'] ?? 'None'), ENT_QUOTES, 'UTF-8'));
            $date      = date('d M Y, h:i A') . ' IST';

            // Admin Email Notification
            $adminSubject = "✦ Influencer Marketplace Registration: {$name}";
            $adminHtml = self::buildEmailTemplate("Influencer Registration", [
                "Creator Name"     => $name,
                "Instagram / Social" => $instagram,
                "Category"         => $category,
                "Email Address"    => "<a href='mailto:{$email}' style='color:#d20c0c;'>{$email}</a>",
                "Phone Number"     => $phone,
                "Details / Note"   => "<div style='background:#f8fafc;padding:12px;border-left:4px solid #d20c0c;border-radius:6px;'>{$message}</div>"
            ], "Sociapa Influencer Marketplace • {$date}");

            self::sendToAdmins($adminSubject, $adminHtml, $email, $name);

            // User Confirmation Email (DISABLED - Only Admin gets enquiry emails)
            if (self::$sendUserConfirmation && !empty($email) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
                $userSubject = "Welcome to Sociapa Creator Network!";
                $userHtml = self::buildUserConfirmationTemplate($name, "Thank you for onboarding with Sociapa Influencer Marketplace. Your creator profile has been submitted to our talent management team for brand collaboration matching.");
                self::sendSmtpEmail($email, $userSubject, $userHtml, 'webdev@sociapa.com', 'Sociapa Creators');
            }
        } catch (\Throwable $e) {
            self::log('error', "MailService notifyInfluencer failed: " . $e->getMessage());
        }
    }

    /**
     * 5. Newsletter Subscription Notification (Admin Only)
     */
    public static function notifyNewsletter(array $data): void
    {
        try {
            $email = htmlspecialchars(trim($data['email'] ?? ''), ENT_QUOTES, 'UTF-8');
            $date  = date('d M Y, h:i A') . ' IST';

            // Admin Email Notification
            $adminSubject = "✦ New Newsletter Subscriber: {$email}";
            $adminHtml = self::buildEmailTemplate("New Newsletter Subscriber", [
                "Subscriber Email" => "<a href='mailto:{$email}' style='color:#d20c0c;'>{$email}</a>",
                "Subscribed At"    => $date
            ], "Sociapa Insights • {$date}");

            self::sendToAdmins($adminSubject, $adminHtml, $email);

            // User Confirmation Email (DISABLED - Only Admin gets enquiry emails)
            if (self::$sendUserConfirmation && !empty($email) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
                $userSubject = "Welcome to Sociapa Insights & Strategy Updates";
                $userHtml = self::buildUserConfirmationTemplate('Subscriber', "You are now subscribed to Sociapa's latest marketing trends, case studies, and brand growth insights. Welcome aboard!");
                self::sendSmtpEmail($email, $userSubject, $userHtml, 'webdev@sociapa.com', 'Sociapa Insights');
            }
        } catch (\Throwable $e) {
            self::log('error', "MailService notifyNewsletter failed: " . $e->getMessage());
        }
    }

    /**
     * Helper: Reusable Admin HTML template
     */
    private static function buildEmailTemplate(string $title, array $fields, string $footerText): string
    {
        $fieldsHtml = '';
        foreach ($fields as $label => $value) {
            $fieldsHtml .= "
            <div style='margin-bottom:16px;border-bottom:1px dashed #e2e8f0;padding-bottom:12px;'>
                <div style='font-size:11px;text-transform:uppercase;letter-spacing:1px;color:#718096;font-weight:bold;margin-bottom:4px;'>{$label}</div>
                <div style='font-size:15px;color:#2d3748;'>{$value}</div>
            </div>";
        }

        return "
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset='UTF-8'>
        </head>
        <body style='font-family:Arial,sans-serif;background-color:#f4f5f7;color:#1a1a1a;margin:0;padding:24px;'>
          <div style='max-width:600px;margin:0 auto;background:#ffffff;border-radius:12px;border:1px solid #e2e8f0;overflow:hidden;box-shadow:0 4px 14px rgba(0,0,0,0.06);'>
            <div style='background:linear-gradient(135deg,#d20c0c,#b00808);color:#ffffff;padding:24px 30px;text-align:left;'>
              <h2 style='margin:0;font-size:20px;letter-spacing:0.5px;'>✦ {$title}</h2>
            </div>
            <div style='padding:30px;'>
              {$fieldsHtml}
            </div>
            <div style='background:#edf2f7;padding:16px 30px;text-align:center;font-size:12px;color:#718096;'>
              {$footerText}
            </div>
          </div>
        </body>
        </html>";
    }

    /**
     * Helper: Reusable User Confirmation HTML template
     */
    private static function buildUserConfirmationTemplate(string $name, string $messageBody): string
    {
        return "
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset='UTF-8'>
        </head>
        <body style='font-family:Arial,sans-serif;background-color:#f4f5f7;color:#1a1a1a;margin:0;padding:24px;'>
          <div style='max-width:580px;margin:0 auto;background:#ffffff;border-radius:12px;border:1px solid #e2e8f0;overflow:hidden;box-shadow:0 4px 14px rgba(0,0,0,0.06);'>
            <div style='background:#d20c0c;color:#ffffff;padding:24px 30px;text-align:center;'>
              <h2 style='margin:0;font-size:22px;letter-spacing:1px;'>SOCIAPA</h2>
              <p style='margin:4px 0 0 0;font-size:13px;opacity:0.9;'>Your Brand Acceleration Partner</p>
            </div>
            <div style='padding:32px 30px;line-height:1.7;color:#2d3748;'>
              <h3 style='margin-top:0;font-size:18px;color:#1a202c;'>Hello {$name},</h3>
              <p style='font-size:15px;'>{$messageBody}</p>
              <div style='margin-top:24px;padding:16px;background:#f8fafc;border-radius:8px;border-left:4px solid #d20c0c;font-size:14px;color:#4a5568;'>
                <strong>Need immediate assistance?</strong><br>
                Feel free to call us directly at <a href='tel:01203130443' style='color:#d20c0c;font-weight:bold;'>0120 313 0443</a> or write to <a href='mailto:webdev@sociapa.com' style='color:#d20c0c;'>webdev@sociapa.com</a>.
              </div>
              <p style='margin-top:28px;font-size:14px;color:#4a5568;'>
                Best regards,<br>
                <strong>Team Sociapa</strong><br>
                <a href='https://www.sociapa.com' style='color:#d20c0c;text-decoration:none;'>www.sociapa.com</a>
              </p>
            </div>
            <div style='background:#edf2f7;padding:14px 30px;text-align:center;font-size:12px;color:#718096;'>
              BL-02, Sector 116, Noida, Uttar Pradesh 201306 • © " . date('Y') . " Sociapa. All rights reserved.
            </div>
          </div>
        </body>
        </html>";
    }
}
