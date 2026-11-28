<?php
/**
 * Standalone Lead & Direct Gmail SMTP Handler for Sociapa
 * 100% Independent of Laravel admin folder.
 * Delivers submissions directly to:
 * - mail@sociapa.com
 * - dheeraj@sociapa.com
 * - webdev@sociapa.com
 */

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Method Not Allowed. Only POST form submissions are accepted.'
    ]);
    exit;
}

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!$data || !is_array($data)) {
    $data = $_POST;
}

// Collect valid uploaded files from $_FILES (PDF / DOC / DOCX / PPT / PPTX / ZIP / Images up to 20 MB)
$attachments = [];
$fileErrors = [];
$allowedExts = ['pdf', 'doc', 'docx', 'ppt', 'pptx', 'txt', 'rtf', 'csv', 'xls', 'xlsx', 'zip', 'png', 'jpg', 'jpeg', 'webp'];
$mimeByExt = [
    'pdf'  => 'application/pdf',
    'doc'  => 'application/msword',
    'docx' => 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'ppt'  => 'application/vnd.ms-powerpoint',
    'pptx' => 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'txt'  => 'text/plain',
    'rtf'  => 'application/rtf',
    'csv'  => 'text/csv',
    'xls'  => 'application/vnd.ms-excel',
    'xlsx' => 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'zip'  => 'application/zip',
    'png'  => 'image/png',
    'jpg'  => 'image/jpeg',
    'jpeg' => 'image/jpeg',
    'webp' => 'image/webp',
];
if (!empty($_FILES)) {
    foreach ($_FILES as $fieldName => $fileInfo) {
        if (!is_array($fileInfo)) continue;
        $names = is_array($fileInfo['name']) ? $fileInfo['name'] : [$fileInfo['name']];
        $tmps  = is_array($fileInfo['tmp_name']) ? $fileInfo['tmp_name'] : [$fileInfo['tmp_name']];
        $errs  = is_array($fileInfo['error']) ? $fileInfo['error'] : [$fileInfo['error']];
        $sizes = is_array($fileInfo['size']) ? $fileInfo['size'] : [$fileInfo['size']];

        foreach ($names as $idx => $origName) {
            $errCode = $errs[$idx] ?? UPLOAD_ERR_NO_FILE;
            if ($errCode === UPLOAD_ERR_NO_FILE) continue;
            if ($errCode !== UPLOAD_ERR_OK) {
                $fileErrors[] = "{$fieldName}: upload error code {$errCode}";
                continue;
            }
            $tmpPath = $tmps[$idx] ?? '';
            $fSize   = (int)($sizes[$idx] ?? 0);
            if (!$tmpPath || !is_readable($tmpPath) || $fSize <= 0 || $fSize > 20 * 1024 * 1024) {
                $fileErrors[] = "{$fieldName}: unreadable or invalid size ({$fSize})";
                continue;
            }
            $baseName = basename((string)$origName);
            $ext = strtolower(pathinfo($baseName, PATHINFO_EXTENSION));
            if ($ext === '' || !in_array($ext, $allowedExts, true)) {
                $fileErrors[] = "{$fieldName}: disallowed extension ({$ext})";
                continue;
            }
            $safeName = preg_replace('/[^A-Za-z0-9._-]/', '_', $baseName) ?: ("document.{$ext}");
            $rawBytes = @file_get_contents($tmpPath);
            if ($rawBytes === false || $rawBytes === '') {
                $fileErrors[] = "{$fieldName}: failed reading tmp file";
                continue;
            }
            $attachments[] = [
                'field' => (string)$fieldName,
                'name'  => $safeName,
                'mime'  => $mimeByExt[$ext] ?? 'application/octet-stream',
                'size'  => $fSize,
                'data'  => $rawBytes,
            ];
        }
    }
}

// Block empty / bot submissions so blank lead emails are never triggered
$hasFormValue = false;
$leadKeys = ['email', 'phone', 'mobile', 'name', 'full_name', 'first_name', 'website', 'website_url', 'message'];
if (is_array($data)) {
    foreach ($leadKeys as $lk) {
        if (!empty($data[$lk]) && trim((string)$data[$lk]) !== '') {
            $hasFormValue = true;
            break;
        }
    }
}
if (!$hasFormValue) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Empty submission ignored.'
    ]);
    exit;
}

$action = isset($_GET['action']) ? trim($_GET['action']) : (isset($data['action']) ? trim($data['action']) : 'lead');
$actionTitle = ucwords(str_replace(['-', '_', '/'], ' ', $action));

$recipients = [
    'mail@sociapa.com',
    'dheeraj@sociapa.com',
    'webdev@sociapa.com'
];

// Clean client info
$senderName = !empty($data['name']) ? trim($data['name']) : (!empty($data['full_name']) ? trim($data['full_name']) : (!empty($data['first_name']) ? trim($data['first_name'] . ' ' . ($data['last_name'] ?? '')) : 'Valued Client'));
$senderEmail = !empty($data['email']) && filter_var($data['email'], FILTER_VALIDATE_EMAIL) ? trim($data['email']) : 'noreply@sociapa.com';
$senderPhone = !empty($data['phone']) ? trim($data['phone']) : (!empty($data['mobile']) ? trim($data['mobile']) : 'Not provided');
$targetWebsite = !empty($data['website']) ? trim($data['website']) : (!empty($data['website_url']) ? trim($data['website_url']) : '');
$messageText = !empty($data['message']) ? trim($data['message']) : '';

$subject = "✦ New {$actionTitle} from {$senderName}" . ($targetWebsite ? " ({$targetWebsite})" : "");

// Build HTML email
$date = date('d M Y, h:i A') . ' IST';
$rowsHtml = '';
foreach ($data as $k => $v) {
    if (strpos($k, '_') === 0) continue; // skip internal metadata like _cc, _template
    if (is_array($v)) $v = implode(', ', $v);
    $label = ucwords(str_replace(['_', '-'], ' ', $k));
    $cleanVal = htmlspecialchars((string)$v, ENT_QUOTES, 'UTF-8');
    $rowsHtml .= "
    <tr style='border-bottom:1px solid #f1f5f9;'>
        <td style='padding:12px 16px;font-size:12px;color:#64748b;font-weight:700;text-transform:uppercase;width:35%;'>{$label}</td>
        <td style='padding:12px 16px;font-size:14px;color:#0f172a;font-weight:600;'>{$cleanVal}</td>
    </tr>";
}
foreach ($attachments as $att) {
    $attLabel = htmlspecialchars(ucwords(str_replace(['_', '-'], ' ', $att['field'])) . ' File', ENT_QUOTES, 'UTF-8');
    $sizeKb = max(1, (int)round($att['size'] / 1024));
    $attVal = htmlspecialchars($att['name'] . " ({$sizeKb} KB — attached)", ENT_QUOTES, 'UTF-8');
    $rowsHtml .= "
    <tr style='border-bottom:1px solid #f1f5f9;'>
        <td style='padding:12px 16px;font-size:12px;color:#64748b;font-weight:700;text-transform:uppercase;width:35%;'>{$attLabel}</td>
        <td style='padding:12px 16px;font-size:14px;color:#D20C0C;font-weight:700;'>📎 {$attVal}</td>
    </tr>";
}

$htmlBody = "
<!DOCTYPE html>
<html>
<head><meta charset='UTF-8'></head>
<body style='font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;background-color:#f8fafc;margin:0;padding:24px;'>
  <div style='max-width:600px;margin:0 auto;background:#ffffff;border-radius:16px;border:1px solid #e2e8f0;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,0.06);'>
    <div style='background:linear-gradient(135deg,#D20C0C 0%,#990808 100%);color:#ffffff;padding:26px 30px;'>
      <div style='font-size:11px;letter-spacing:1.5px;text-transform:uppercase;opacity:0.85;margin-bottom:6px;'>SOCIAPA WEBSITE LEAD</div>
      <h2 style='margin:0;font-size:22px;font-weight:800;letter-spacing:-0.5px;'>✦ {$actionTitle} Received</h2>
    </div>
    <div style='padding:24px 30px;'>
      <table style='width:100%;border-collapse:collapse;'>
        {$rowsHtml}
      </table>
    </div>
    <div style='background:#f1f5f9;padding:16px 30px;text-align:center;font-size:12px;color:#64748b;border-top:1px solid #e2e8f0;'>
      Lead registered at {$date} • IP: " . (isset($_SERVER['REMOTE_ADDR']) ? $_SERVER['REMOTE_ADDR'] : '127.0.0.1') . "
    </div>
  </div>
</body>
</html>";

/**
 * Load SMTP credentials from environment or untracked .env file.
 */
function loadSociapaSmtpConfig(): array {
    $env = [];
    $candidates = [
        __DIR__ . '/.env',
        dirname(__DIR__) . '/.env',
        dirname(__DIR__, 2) . '/.env',
        __DIR__ . '/admin/.env',
        dirname(__DIR__) . '/admin/.env',
    ];
    foreach ($candidates as $file) {
        if (!is_readable($file)) continue;
        $lines = @file($file, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
        if (!$lines) continue;
        foreach ($lines as $line) {
            $trimmed = trim($line);
            if ($trimmed === '' || $trimmed[0] === '#' || strpos($trimmed, '=') === false) continue;
            [$k, $v] = explode('=', $trimmed, 2);
            $k = trim($k);
            $v = trim($v, " \t\n\r\0\x0B\"'");
            if ($k !== '' && !isset($env[$k])) {
                $env[$k] = $v;
            }
        }
    }
    $get = function(string $primary, string $fallback = '', string $default = '') use ($env): string {
        $val = getenv($primary);
        if ($val !== false && $val !== '') return (string)$val;
        if (!empty($env[$primary])) return $env[$primary];
        if ($fallback !== '') {
            $fVal = getenv($fallback);
            if ($fVal !== false && $fVal !== '') return (string)$fVal;
            if (!empty($env[$fallback])) return $env[$fallback];
        }
        return $default;
    };
    return [
        'host' => $get('SMTP_HOST', 'MAIL_HOST', 'smtp.gmail.com'),
        'port' => (int)$get('SMTP_PORT', 'MAIL_PORT', '465'),
        'user' => $get('SMTP_USER', 'MAIL_USERNAME', 'webdev@sociapa.com'),
        'pass' => $get('SMTP_PASS', 'MAIL_PASSWORD', ''),
    ];
}

/**
 * Direct SSL SMTP socket sender (Gmail SMTP) with MIME attachment support
 */
function sendDirectSmtp(array $recipients, string $subject, string $htmlContent, string $replyEmail = '', string $replyName = '', array $attachments = []): bool {
    $cfg  = loadSociapaSmtpConfig();
    $host = $cfg['host'];
    $port = $cfg['port'] ?: 465;
    $user = $cfg['user'];
    $pass = $cfg['pass'];

    if (empty($user) || empty($pass)) {
        return false;
    }

    $context = stream_context_create([
        'ssl' => [
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true
        ]
    ]);

    $socket = @stream_socket_client("ssl://{$host}:{$port}", $errno, $errstr, 20, STREAM_CLIENT_CONNECT, $context);
    if (!$socket) {
        return false;
    }

    fgets($socket, 512);
    fputs($socket, "EHLO localhost\r\n");
    while ($line = fgets($socket, 512)) {
        if (substr($line, 3, 1) === ' ') break;
    }

    fputs($socket, "AUTH LOGIN\r\n");
    fgets($socket, 512);

    fputs($socket, base64_encode($user) . "\r\n");
    fgets($socket, 512);

    fputs($socket, base64_encode($pass) . "\r\n");
    $authCode = fgets($socket, 512);
    if (substr($authCode, 0, 3) !== '235') {
        fclose($socket);
        return false;
    }

    fputs($socket, "MAIL FROM: <{$user}>\r\n");
    fgets($socket, 512);

    foreach ($recipients as $recipient) {
        fputs($socket, "RCPT TO: <{$recipient}>\r\n");
        fgets($socket, 512);
    }

    fputs($socket, "DATA\r\n");
    fgets($socket, 512);

    $cleanSubject = str_replace(["\r", "\n"], ' ', $subject);
    $toHeader = implode(', ', array_map(function($r) { return "<{$r}>"; }, $recipients));
    $headers  = "MIME-Version: 1.0\r\n";
    $headers .= "From: Sociapa Leads <{$user}>\r\n";
    $headers .= "To: {$toHeader}\r\n";
    if (!empty($replyEmail) && filter_var($replyEmail, FILTER_VALIDATE_EMAIL)) {
        $rName = str_replace(["\r", "\n"], ' ', !empty($replyName) ? $replyName : $replyEmail);
        $headers .= "Reply-To: {$rName} <{$replyEmail}>\r\n";
    }
    $headers .= "Subject: {$cleanSubject}\r\n";
    $headers .= "Date: " . date('r') . "\r\n";
    $headers .= "X-Mailer: Sociapa Universal Engine\r\n";

    if (!empty($attachments)) {
        $boundary = '=_SociapaMix_' . md5(uniqid((string)mt_rand(), true));
        $headers .= "Content-Type: multipart/mixed; boundary=\"{$boundary}\"\r\n";

        $bodyPayload  = "--{$boundary}\r\n";
        $bodyPayload .= "Content-Type: text/html; charset=utf-8\r\n";
        $bodyPayload .= "Content-Transfer-Encoding: base64\r\n\r\n";
        $bodyPayload .= chunk_split(base64_encode($htmlContent), 76, "\r\n");

        foreach ($attachments as $att) {
            $safeName = str_replace(['"', "\r", "\n"], '_', $att['name']);
            $mime     = $att['mime'] ?: 'application/octet-stream';
            $bodyPayload .= "\r\n--{$boundary}\r\n";
            $bodyPayload .= "Content-Type: {$mime}; name=\"{$safeName}\"\r\n";
            $bodyPayload .= "Content-Disposition: attachment; filename=\"{$safeName}\"\r\n";
            $bodyPayload .= "Content-Transfer-Encoding: base64\r\n\r\n";
            $bodyPayload .= chunk_split(base64_encode($att['data']), 76, "\r\n");
        }
        $bodyPayload .= "--{$boundary}--\r\n";
    } else {
        $headers .= "Content-Type: text/html; charset=utf-8\r\n";
        $bodyPayload = $htmlContent . "\r\n";
    }

    // SMTP dot-stuffing for lines starting with '.'
    $fullMessage = preg_replace('/^\./m', '..', "{$headers}\r\n{$bodyPayload}");
    fputs($socket, "{$fullMessage}\r\n.\r\n");
    $dataRes = fgets($socket, 512);

    fputs($socket, "QUIT\r\n");
    fclose($socket);

    return (substr($dataRes, 0, 3) === '250');
}

// 1. Deliver via Direct Gmail SMTP Socket (with attachments if uploaded)
$mailSent = sendDirectSmtp($recipients, $subject, $htmlBody, $senderEmail, $senderName, $attachments);

// 2. Fallback: Also try standard mail() if socket failed
if (!$mailSent) {
    if (!empty($attachments)) {
        $fbBoundary = '=_SociapaFb_' . md5(uniqid((string)mt_rand(), true));
        $flatHeaders = "MIME-Version: 1.0\r\nContent-Type: multipart/mixed; boundary=\"{$fbBoundary}\"\r\nFrom: Sociapa Leads <webdev@sociapa.com>\r\n";
        $fbBody  = "--{$fbBoundary}\r\nContent-Type: text/html; charset=utf-8\r\nContent-Transfer-Encoding: base64\r\n\r\n" . chunk_split(base64_encode($htmlBody));
        foreach ($attachments as $att) {
            $safeName = str_replace(['"', "\r", "\n"], '_', $att['name']);
            $fbBody .= "\r\n--{$fbBoundary}\r\nContent-Type: {$att['mime']}; name=\"{$safeName}\"\r\nContent-Disposition: attachment; filename=\"{$safeName}\"\r\nContent-Transfer-Encoding: base64\r\n\r\n" . chunk_split(base64_encode($att['data']));
        }
        $fbBody .= "--{$fbBoundary}--\r\n";
        @mail(implode(', ', $recipients), $subject, $fbBody, $flatHeaders);
    } else {
        $flatHeaders = "MIME-Version: 1.0\r\nContent-Type: text/html; charset=utf-8\r\nFrom: Sociapa Leads <webdev@sociapa.com>\r\n";
        @mail(implode(', ', $recipients), $subject, $htmlBody, $flatHeaders);
    }
}

// 3. Always log safely to leads_backup.json
try {
    $logFile = __DIR__ . '/leads_backup.json';
    $attMeta = array_map(function($a) {
        return ['field' => $a['field'], 'name' => $a['name'], 'size' => $a['size']];
    }, $attachments);
    $entry = [
        'timestamp'   => date('c'),
        'action'      => $action,
        'smtp_sent'   => $mailSent,
        'attachments' => $attMeta,
        'file_errors' => $fileErrors,
        'data'        => $data
    ];
    @file_put_contents($logFile, json_encode($entry, JSON_PRETTY_PRINT) . PHP_EOL, FILE_APPEND);
} catch (Exception $e) {}

echo json_encode([
    'success'     => true,
    'smtp_sent'   => $mailSent,
    'attachments' => count($attachments),
    'message'     => 'Thank you! Your submission has been received successfully.'
]);
exit;
