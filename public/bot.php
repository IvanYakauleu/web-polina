<?php
header("Access-Control-Allow-Origin: https://web-polina.vercel.app/");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    
    // Ваш токен бота и ID чата (замените на свои значения)
    require __DIR__ . '/vendor/autoload.php';

    $dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
    $dotenv->load();
    
    $botToken = $_ENV['TELEGRAM_BOT_TOKEN'];
    
    $chatId = "@CriticL";
    
    // Текст сообщения
    $messageText = "Имя: $name\n";
    $messageText .= "Email: $email\n";
    $messageText .= "Телефон:\n$phone";
    
    // URL для отправки сообщения через Telegram Bot API
    $telegramApiUrl = "https://api.telegram.org/bot$botToken/sendMessage";
    
    // Параметры запроса
    $params = [
        "chat_id" => $chatId,
        "text" => $messageText,
    ];
    
    // Отправка сообщения в Telegram
    $options = [
        "http" => [
            "method" => "POST",
            "header" => "Content-Type: application/x-www-form-urlencoded\r\n",
            "content" => http_build_query($params),
        ],
    ];
    
    $context = stream_context_create($options);
    $result = file_get_contents($telegramApiUrl, false, $context);
    
    // Проверка успешной отправки
    if ($response->getStatusCode() == 200) {
        echo "Сообщение успешно отправлено в Telegram";
    } else {
        echo "Ошибка при отправке сообщения в Telegram";
    }
} else {
    echo "Доступ запрещен";
}
?>