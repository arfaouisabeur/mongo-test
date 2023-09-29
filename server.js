





  const express = require('express');
const cors = require('cors');
const Bot = require('node-telegram-bot-api');
const app = express();

const token = '6647327011:AAErnbPs_krurmVxMbgai1SnWMYerC5-0lo'; // Replace with your Telegram bot token
app.use(cors()); // Enable Cross-Origin Resource Sharing (CORS)
app.use(express.json()); // Middleware to parse JSON request bodies

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://arfaouisabeur.github.io');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});



const bot = new Bot(token, { polling: true }); // Create a Telegram bot instance

// Handle POST requests at the root endpoint
app.post('/', async (req, res) => {
  const formData = req.body; // Get the form data from the request body

  if (!formData) {
    return res.status(400).json({ error: 'Form data is required in the request body' });
  }

  try {
    // Process the formData object here as needed
    console.log('Received form data:', formData);

    // Send the message to Telegram or perform other actions
    bot.sendMessage('5881759396', JSON.stringify(formData)); // Replace 'YOUR_CHAT_ID' with the chat ID of the recipient
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error saving data:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

const port = process.env.PORT || 5000; // Define the port to listen on
app.listen(port, () => console.log(`Listening on port ${port}...`)); // Start the server

