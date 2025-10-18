const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  cognome: { type: String, required: true },
  email: { type: String, required: true },
  telefono: { type: String },
  servizi_sottoscritti: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Servizio' }],
  data_iscrizione: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);
