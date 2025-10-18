import express from "express";
const router = express.Router();

// Esempio dati dashboard
router.get("/", (req, res) => {
  res.json({
    totalUsers: 10,
    totalServices: 5
  });
});

export default router;
