
const express = require('express');
const cors = require('cors');
const Bot = require('node-telegram-bot-api');
const app = express();
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://arfaouisabeur.github.io');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});

const token = '6647327011:AAErnbPs_krurmVxMbgai1SnWMYerC5-0lo'; // Replace with your Telegram bot token
app.use(cors({origin: '*'}));
app.use(express.json()); // Middleware to parse JSON request bodies


const bot = new Bot(token, { polling: true });


app.post('/', async (req, res) => {
  const { msg } = req.body;

  if (!msg) {
    return res.status(400).json({ error: 'Message (msg) is required in the request body' });
  }

  try {
    // Send the message to Telegram
    bot.sendMessage('5881759396', msg); // Replace 'YOUR_CHAT_ID' with the chat ID of the recipient
  } catch (error) {
    console.error('Error saving DATA:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
