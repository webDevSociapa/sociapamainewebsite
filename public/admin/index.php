<?php
/**
 * Sociapa Standalone Mailer & Lead Recorder
 * Located in /admin/index.php to utilize Nginx FastCGI routing
 * Sends email via Gmail SSL SMTP with base64 MIME encoding
 */

// Enable CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Accept, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Action
$action = $_GET['action'] ?? '';
$uri = $_SERVER['REQUEST_URI'] ?? '';
$action = strtolower(trim(str_replace('/', '', $action)));

if (empty($action)) {
    if (strpos($uri, 'contact') !== false) {
        $action = 'contact';
    } elseif (strpos($uri, 'influencer') !== false) {
        $action = 'influencer';
    } elseif (strpos($uri, 'audit') !== false) {
        $action = 'audit';
    } elseif (strpos($uri, 'career') !== false) {
        $action = 'career';
    } elseif (strpos($uri, 'case-studies') !== false) {
        $action = 'case-studies';
    } elseif (strpos($uri, 'newsletter') !== false) {
        $action = 'newsletter';
    } else {
        $action = 'contact';
    }
}

// Payload
$rawInput = file_get_contents('php://input');
$payload = json_decode($rawInput, true);
if (!is_array($payload) || empty($payload)) {
    $payload = $_POST;
}

// Target email recipients
$recipients = ['mail@sociapa.com', 'dheeraj@sociapa.com', 'webdev@sociapa.com'];

// Robust SMTP Socket Sender
function sendSociapaSmtpEmail($recipients, $subject, $htmlContent) {
    $smtpHost = 'smtp.gmail.com';
    $smtpPort = 465;
    $smtpUser = 'webdev@sociapa.com';
    $smtpPass = 'czwwxybqwipigmjw'; // Google App Password

    $context = stream_context_create([
        'ssl' => [
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true
        ]
    ]);

    $socket = @stream_socket_client("ssl://{$smtpHost}:{$smtpPort}", $errno, $errstr, 12, STREAM_CLIENT_CONNECT, $context);
    if (!$socket) {
        // Fallback to PHP mail()
        $headers = [
            'MIME-Version: 1.0',
            'Content-type: text/html; charset=UTF-8',
            'From: Sociapa <webdev@sociapa.com>',
            'Reply-To: webdev@sociapa.com'
        ];
        foreach ($recipients as $to) {
            @mail($to, $subject, $htmlContent, implode("\r\n", $headers));
        }
        return true;
    }

    $readResp = function() use ($socket) {
        $res = '';
        while ($line = fgets($socket, 512)) {
            $res .= $line;
            if (strlen($line) >= 4 && (substr($line, 3, 1) === ' ' || substr($line, 3, 1) === "\r")) break;
        }
        return $res;
    };

    $sendCmd = function($cmd) use ($socket, $readResp) {
        fputs($socket, $cmd . "\r\n");
        return $readResp();
    };

    $readResp(); // greeting
    $sendCmd("EHLO sociapa.com");
    $sendCmd("AUTH LOGIN");
    $sendCmd(base64_encode($smtpUser));
    $authRes = $sendCmd(base64_encode($smtpPass));

    if (strpos($authRes, '235') === false) {
        fclose($socket);
        return false;
    }

    $sendCmd("MAIL FROM: <{$smtpUser}>");
    foreach ($recipients as $to) {
        $sendCmd("RCPT TO: <{$to}>");
    }

    $sendCmd("DATA");

    $headers  = "From: Sociapa <{$smtpUser}>\r\n";
    $headers .= "To: " . implode(', ', $recipients) . "\r\n";
    $headers .= "Subject: =?UTF-8?B?" . base64_encode($subject) . "?=\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $headers .= "Content-Transfer-Encoding: base64\r\n\r\n";
    $bodyEncoded = chunk_split(base64_encode($htmlContent));

    $sendCmd($headers . $bodyEncoded . "\r\n.");
    $sendCmd("QUIT");
    fclose($socket);
    return true;
}

// Generate rows
$subject = "New Inquiry on Sociapa (" . ucfirst($action) . ")";
$rows = "";

foreach ($payload as $key => $val) {
    if (is_array($val)) $val = implode(', ', $val);
    $formattedKey = ucwords(str_replace(['_', '-'], ' ', $key));
    $escapedVal = htmlspecialchars((string)$val);
    $rows .= "<tr>
        <td style='padding: 10px 14px; font-weight: bold; border-bottom: 1px solid #e5e7eb; background: #f9fafb; width: 35%; color: #374151;'>{$formattedKey}</td>
        <td style='padding: 10px 14px; border-bottom: 1px solid #e5e7eb; color: #111827;'>{$escapedVal}</td>
    </tr>";
}

$dateNow = date('d M Y, h:i A') . ' IST';
$htmlBody = "
<div style='font-family: Arial, sans-serif; max-width: 620px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden; background: #ffffff;'>
    <div style='background: #dc2626; color: #ffffff; padding: 22px 24px; text-align: center;'>
        <h2 style='margin: 0; font-size: 22px; font-weight: 700;'>New Lead Notification</h2>
        <p style='margin: 6px 0 0; font-size: 14px; opacity: 0.9;'>Sociapa Digital Marketing Agency</p>
    </div>
    <div style='padding: 24px;'>
        <p style='color: #4b5563; font-size: 15px; margin-top: 0;'>Hello Team, a new form submission was received on the website:</p>
        <table style='width: 100%; border-collapse: collapse; margin-top: 16px; font-size: 14px; border: 1px solid #e5e7eb; border-radius: 8px;'>
            {$rows}
            <tr>
                <td style='padding: 10px 14px; font-weight: bold; background: #f9fafb; color: #374151;'>Received At</td>
                <td style='padding: 10px 14px; color: #111827;'>{$dateNow}</td>
            </tr>
        </table>
    </div>
    <div style='background: #f3f4f6; padding: 14px 24px; text-align: center; color: #6b7280; font-size: 12px;'>
        This is an automated notification sent to " . implode(', ', $recipients) . "
    </div>
</div>";

// Send email & save lead
if (!empty($payload)) {
    sendSociapaSmtpEmail($recipients, $subject, $htmlBody);

    $leadRecord = [
        'timestamp' => date('Y-m-d H:i:s'),
        'action'    => $action,
        'ip'        => $_SERVER['REMOTE_ADDR'] ?? 'unknown',
        'data'      => $payload
    ];
    @file_put_contents(__DIR__ . '/leads_log.txt', json_encode($leadRecord) . PHP_EOL, FILE_APPEND | LOCK_EX);
}

echo json_encode([
    'success' => true,
    'message' => 'Thank you! Your submission has been received successfully.'
]);
exit;
