const express = require('express');
const router = express.Router();
const User = require('../models/User');

// 🔹 GET - tutti gli utenti
router.get('/', async (req, res) => {
  try {
    const users = await User.find().populate('servizi_sottoscritti');
    res.json(users);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

// 🔹 POST - nuovo utente
router.post('/', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.json(user);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

module.exports = router;
