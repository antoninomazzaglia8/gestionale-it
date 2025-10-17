// server.js

const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config(); // opzionale se usi .env in locale

app.use(express.json());

// --- Connessione a MongoDB ---
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB connesso!"))
.catch(err => console.error("Errore connessione MongoDB:", err));

// --- Rotte di test ---
app.get('/api', (req, res) => res.json({ msg: 'Benvenuto nella dashboard API' }));
app.get('/api/ping', (req, res) => res.json({ msg: 'pong' }));

// --- Rotte future per Users, Servizi, Finanza ---
// app.use('/api/users', require('./routes/users'));
// app.use('/api/servizi', require('./routes/servizi'));
// app.use('/api/finanza', require('./routes/finanza'));

// --- Porta ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend live! Porta: ${PORT}`);
  console.log(`Test endpoint: ${process.env.PORT ? `https://gestionale-backend-it.onrender.com/api/ping` : `http://localhost:${PORT}/api/ping`}`);
});
