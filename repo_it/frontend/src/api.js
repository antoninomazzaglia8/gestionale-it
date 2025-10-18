// frontend/src/api.js
const API_URL = import.meta.env.VITE_API_URL || 'https://gestionale-backend-it.onrender.com';

export async function getUsers() {
  const res = await fetch(`${API_URL}/api/users`);
  if (!res.ok) throw new Error(`Errore nel recupero utenti: ${res.status}`);
  return res.json();
}

export async function getServices() {
  const res = await fetch(`${API_URL}/api/services`);
  if (!res.ok) throw new Error(`Errore nel recupero servizi: ${res.status}`);
  return res.json();
}
