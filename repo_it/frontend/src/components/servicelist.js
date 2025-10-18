import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:10000';

export default function ServiceList() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/api/services`)
      .then(res => res.json())
      .then(data => setServices(data))
      .catch(err => console.error("Errore fetch servizi:", err));
  }, []);

  if (!services.length) return <div>Loading services...</div>;

  return (
    <div>
      <h2>Services List</h2>
      <ul>
        {services.map(s => (
          <li key={s._id}>{s.name}</li>
        ))}
      </ul>
    </div>
  );
}
