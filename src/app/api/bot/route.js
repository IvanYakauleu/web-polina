import fetch from 'node-fetch';
import dotenv from 'dotenv';
import { NextResponse } from 'next/server';

export async function POST(req, res) {
  if (req.method === 'POST') {
    dotenv.config();

    const chatId = process.env.TELEGRAM_CHAT_ID;
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const { name, email, phone } = await req.json();

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

      return new NextResponse('Form submission successful', {
        status: 200,
      });
    } catch (error) {
      return new NextResponse('Form submission failed', {
        status: 500,
      });
    }
  } else {
    // res.status(405).end(); // Метод не разрешен
  }
}
