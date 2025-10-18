import express from "express";
const router = express.Router();

// Esempio dati utenti
router.get("/", (req, res) => {
  res.json([
    { _id: "1", name: "Mario Rossi" },
    { _id: "2", name: "Luigi Bianchi" }
  ]);
});

export default router;
