const mongoose = require('mongoose');

const ServizioSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  descrizione: { type: String },
  costo: { type: Number, required: true },
  categoria: { type: String }
});

module.exports = mongoose.model('Servizio', ServizioSchema);
