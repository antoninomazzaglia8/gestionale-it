// backend/server.js
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 10000;
const MONGO_URI = process.env.MONGO_URI;

// Configura CORS
app.use(cors({
  origin: process.env.VITE_API_URL || '*', // fallback '*' se variabile non definita
}));

app.use(express.json());

// Connessione a MongoDB
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connesso!'))
.catch((err) => console.error('Errore connessione MongoDB:', err));

// Endpoint di test
app.get('/api/ping', (req, res) => {
  res.json({ message: 'Backend live!' });
});

// Inserisci qui le tue rotte, ad esempio /api/users, /api/dashboard
// app.use('/api/users', usersRouter);
// app.use('/api/dashboard', dashboardRouter);

app.listen(PORT, () => {
  console.log(`Backend live! Porta: ${PORT}`);
});
