import React, { useEffect, useState } from "react";

const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:10000/api";

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`${apiUrl}/users`)
      .then(res => res.json())
      .then(setUsers)
      .catch(err => console.error("Errore fetch utenti:", err));
  }, []);

  return (
    <ul>
      {users.map(user => (
        <li key={user._id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UsersList;

