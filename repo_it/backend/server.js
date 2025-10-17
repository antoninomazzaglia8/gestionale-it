const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/ping', (req, res) => res.json({ msg: 'pong' }));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
