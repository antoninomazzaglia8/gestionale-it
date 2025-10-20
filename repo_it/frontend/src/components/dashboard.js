import { useEffect, useState } from "react";

const apiUrl = import.meta?.env?.VITE_API_URL || process.env.VITE_API_URL || "https://gestionale-backend-it.onrender.com";

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
