import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

// Carica variabili ambiente
dotenv.config();

const app = express();
const PORT = process.env.PORT || 10000;

// Configura CORS
// Sostituisci l'URL con quello del tuo frontend su Render
app.use(cors({
  origin: "https://gestionale-it-1.onrender.com",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

// Middleware per JSON
app.use(express.json());

// Connessione a MongoDB
const mongoURI = process.env.MONGODB_URI || "mongodb://localhost:27017/gestionale";
mongoose.connect(mongoURI)
  .then(() => console.log("MongoDB connesso"))
  .catch(err => console.error("Errore connessione MongoDB:", err));

// Importa rotte API
import dashboardRoutes from "./routes/dashboard.js";
import usersRoutes from "./routes/users.js";
import servicesRoutes from "./routes/services.js";

// Usa le rotte
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/services", servicesRoutes);

// Rotta test
app.get("/api/ping", (req, res) => res.send("Pong"));

// Avvia server
app.listen(PORT, () => console.log(`Backend live! Porta: ${PORT}`));
