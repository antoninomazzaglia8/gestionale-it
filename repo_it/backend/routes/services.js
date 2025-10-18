import express from "express";
const router = express.Router();

// Esempio dati servizi
router.get("/", (req, res) => {
  res.json([
    { _id: "1", name: "Servizio A" },
    { _id: "2", name: "Servizio B" }
  ]);
});

export default router;
