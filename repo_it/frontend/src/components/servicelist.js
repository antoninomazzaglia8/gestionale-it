import React, { useEffect, useState } from "react";

const ServiceList = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/services`)
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error("Errore caricamento servizi:", err));
  }, []);

  return (
    <div>
      <h2>Servizi</h2>
      <ul>
        {services.map((service) => (
          <li key={service._id}>{service.name} - €{service.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceList;
