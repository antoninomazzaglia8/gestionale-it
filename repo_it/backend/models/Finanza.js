const mongoose = require('mongoose');

const FinanzaSchema = new mongoose.Schema({
  tipo: { type: String, enum: ['entrata', 'uscita'], required: true },
  descrizione: { type: String },
  importo: { type: Number, required: true },
  data: { type: Date, default: Date.now },
  utente: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Finanza', FinanzaSchema);
