require('dotenv').config();
const db = require('./db/knex');

const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors('http://localhost:5173'));

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Working' });
});

app.get('/fav_movies', async (req, res) => {
  try {
    const fav_movies = await db('favorites').select('*');

    res.status(200).json(fav_movies);
  } catch (err) {
    res.status(err.status || 500).json({
      message: err.message || 'Internal server error.',
    });
  }
});

module.exports = app;
