// src/App.js
import React, { useEffect, useState } from "react";

function App() {
  const [ping, setPing] = useState("");

  useEffect(() => {
    // Prende l'URL del backend dalla variabile di ambiente
    const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";

    fetch(`${apiUrl}/api/ping`)
      .then((res) => res.json())
      .then((data) => setPing(data.msg))
      .catch((err) => setPing("Errore connessione"));
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Benvenuto nel Gestionale Confartigianato Catania</h1>
      <p>Test backend: {ping}</p>
    </div>
  );
}

export default App;
