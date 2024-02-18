const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

mongoose.connect('mongodb+srv://BLUCKA:au2ADXsLQxYyLvqY@blucka.oy3gu3l.mongodb.net/mydatabase')
.then(() => console.log('MongoDB Connected'))
.catch(err => console.error('Error connecting to MongoDB:', err.message));

const Subscriber = mongoose.model('Subscriber', {
  email: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

app.use(express.json());

app.post('/api/subscribe', async (req, res) => {
  try {
    const { email } = req.body;
    const subscriber = new Subscriber({ email });
    await subscriber.save();
    res.status(201).send('Email added to MongoDB!');
  } catch (error) {
    console.log('Failed to add email to MongoDB:', error);
    res.status(500).send('Failed to add email to MongoDB');
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
