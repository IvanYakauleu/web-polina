import fetch from 'node-fetch';
import dotenv from 'dotenv';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    dotenv.config(); // Загружает переменные окружения из .env

    const chatId = process.env.TELEGRAM_CHAT_ID;
    const botToken = process.env.TELEGRAM_BOT_TOKEN;

    const { name, email, phone } = req.body;

    const messageText = `New form submission:\nИмя: ${name}\nПочта: ${email}\nТелефон: ${phone}`;

    try {
      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: messageText,
        }),
      });

      if (response.ok) {
        res.status(200).json({ message: 'Form submission successful' });
      } else {
        res.status(500).json({ message: 'Form submission failed' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Form submission failed' });
    }
  } else {
    res.status(405).end(); // Метод не разрешен
  }
}
