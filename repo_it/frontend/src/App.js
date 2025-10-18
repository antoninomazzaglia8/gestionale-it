import React, { useEffect, useState } from "react";
import config from "./config";

import UsersList from './components/UsersList';

function App() {
  return (
    <div>
      <h1>Gestionale Confartigianato</h1>
      <UsersList />
    </div>
  );
}

export default App;

export default function App() {
  const [message, setMessage] = useState("Caricamento...");

  useEffect(() => {
    // Prova a contattare il backend per verificare la connessione
    fetch(`${config.API_BASE_URL}/api`)
      .then((res) => {
        if (!res.ok) throw new Error("Errore di connessione");
        return res.text();
      })
      .then((data) => setMessage(data))
      .catch(() => setMessage("⚠️ Impossibile contattare il backend."));
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif", textAlign: "center" }}>
      <h1>Benvenuto nella Dashboard</h1>
      <p>Stato connessione backend:</p>
      <h3>{message}</h3>
    </div>
  );
}
