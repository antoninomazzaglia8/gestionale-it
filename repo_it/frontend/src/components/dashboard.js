import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [services, setServices] = useState([]);
  const [revenues, setRevenues] = useState(0);
  const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:10000/api";

  useEffect(() => {
    // Funzione per caricare utenti
    const fetchUsers = async () => {
      try {
        const res = await fetch(`${API_URL}/api/users`);
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        console.error("Errore nel fetch utenti:", err);
      }
    };

    // Funzione per caricare servizi
    const fetchServices = async () => {
      try {
        const res = await fetch(`${API_URL}/api/services`);
        const data = await res.json();
        setServices(data);

        // Calcolo ricavi totali
        const totalRevenue = data.reduce((sum, service) => sum + (service.price || 0), 0);
        setRevenues(totalRevenue);
      } catch (err) {
        console.error("Errore nel fetch servizi:", err);
      }
    };

    fetchUsers();
    fetchServices();
  }, [API_URL]);

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>

      <div className="dashboard-section">
        <h3>Utenti Registrati: {users.length}</h3>
        <ul>
          {users.map((user) => (
            <li key={user._id}>{user.name} ({user.email})</li>
          ))}
        </ul>
      </div>

      <div className="dashboard-section">
        <h3>Servizi Disponibili: {services.length}</h3>
        <ul>
          {services.map((service) => (
            <li key={service._id}>
              {service.name} - Prezzo: €{service.price}
            </li>
          ))}
        </ul>
      </div>

      <div className="dashboard-section">
        <h3>Ricavi Totali: €{revenues}</h3>
      </div>
    </div>
  );
};

export default Dashboard;
