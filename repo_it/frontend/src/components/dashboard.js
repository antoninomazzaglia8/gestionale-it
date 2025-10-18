import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:10000';

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
