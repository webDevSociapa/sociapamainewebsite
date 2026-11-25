<?php
try {
    $pdo = new PDO('mysql:host=127.0.0.1;dbname=sociapa_admin', 'root', '');
    $stmt = $pdo->query('SELECT * FROM influencer_registrations ORDER BY id DESC LIMIT 5');
    print_r($stmt->fetchAll(PDO::FETCH_ASSOC));
} catch(Exception $e) {
    echo $e->getMessage();
}
