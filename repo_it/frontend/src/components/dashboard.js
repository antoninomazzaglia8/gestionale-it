import React, { useEffect, useState } from "react";

const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:10000/api";

function Dashboard() {
  const [stats, setStats] = useState({ users: 0, services: 0 });

  useEffect(() => {
    // Fetch dei dati statistici
    fetch(`${apiUrl}/dashboard`)
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch((err) => console.error("Errore fetch dashboard:", err));
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Utenti registrati: {stats.users}</p>
      <p>Servizi disponibili: {stats.services}</p>
    </div>
  );
}

export default Dashboard;
