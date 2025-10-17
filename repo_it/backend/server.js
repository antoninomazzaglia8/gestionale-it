const express = require('express');
const app = express();

app.use(express.json());

// Rotta generica
app.get('/api', (req, res) => res.json({ msg: 'Benvenuto nella dashboard API' }));

// Rotta di test
app.get('/api/ping', (req, res) => res.json({ msg: 'pong' }));

// Porta dinamica Render o 5000 locale
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Backend live! Porta: ${PORT}`);
  console.log(`Test endpoint: ${process.env.PORT ? `https://gestionale-backend-it.onrender.com/api/ping` : `http://localhost:${PORT}/api/ping`}`);
});
