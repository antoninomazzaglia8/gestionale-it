import React, { useEffect, useState } from "react";

const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:10000/api";

const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`${apiUrl}/dashboard`)
      .then(res => res.json())
      .then(setData)
      .catch(err => console.error("Errore fetch dashboard:", err));
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>Dashboard</h1>
      {/* visualizza i dati */}
    </div>
  );
};

export default Dashboard;
