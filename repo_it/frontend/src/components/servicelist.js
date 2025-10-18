import React, { useEffect, useState } from "react";

const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:10000/api";

const ServicesList = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`${apiUrl}/services`)
      .then(res => res.json())
      .then(setServices)
      .catch(err => console.error("Errore fetch servizi:", err));
  }, []);

  return (
    <ul>
      {services.map(service => (
        <li key={service._id}>{service.name}</li>
      ))}
    </ul>
  );
};

export default ServicesList;
