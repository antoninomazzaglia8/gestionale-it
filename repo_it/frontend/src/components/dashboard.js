import { useEffect, useState } from "react";

// dashboard.js
const API_URL =
  import.meta.env.VITE_API_URL || process.env.VITE_API_URL || "http://localhost:5000";

console.log("API_URL:", API_URL);

// esempio di chiamata API
fetch(`${API_URL}/api/users`)
  .then((res) => res.json())
  .then((data) => console.log("Dati ricevuti:", data))
  .catch((err) => console.error("Errore nella chiamata API:", err));

export default function Dashboard() {
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/api/dashboard`)
      .then(res => res.json())
      .then(data => setDashboardData(data))
      .catch(err => console.error("Errore fetch dashboard:", err));
  }, []);

  if (!dashboardData) return <div>Loading dashboard...</div>;

  return (
    <div>
      <h2>Dashboard</h2>
      <pre>{JSON.stringify(dashboardData, null, 2)}</pre>
    </div>
  );
}
