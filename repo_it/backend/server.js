const express = require('express');
const app = express();

app.use(express.json());

// Rotta di test
app.get('/api/ping', (req, res) => res.json({ msg: 'pong' }));

// Usa sempre la porta assegnata da Render, oppure 5000 in locale
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT} (Render assigned port)`);
  console.log(`Test endpoint: ${process.env.PORT ? `https://gestionale-backend-it.onrender.com/api/ping` : `http://localhost:${PORT}/api/ping`}`);
});
