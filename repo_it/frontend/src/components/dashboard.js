import React, { useEffect, useState } from 'react';

// ✅ Ottiene la variabile d'ambiente correttamente
const API_URL = import.meta.env.VITE_API_URL;

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("✅ API URL letta da Vite:", API_URL);

    if (!API_URL) {
      console.error("❌ ERRORE: VITE_API_URL non è definita!");
      setError("Configurazione mancante: variabile VITE_API_URL non trovata");
      setLoading(false);
      return;
    }

    // Esegui la chiamata API
    fetch(`${API_URL}/api/data`)
      .then((res) => {
        if (!res.ok) throw new Error("Errore durante la richiesta");
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("❌ Errore fetch:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Caricamento dati...</p>;
  if (error) return <p style={{ color: "red" }}>Errore: {error}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Dashboard</h1>
      {data.length > 0 ? (
        <ul>
          {data.map((item, i) => (
            <li key={i}>{item.name || JSON.stringify(item)}</li>
          ))}
        </ul>
      ) : (
        <p>Nessun dato disponibile.</p>
      )}
    </div>
  );
};

export default Dashboard;
