// frontend/src/api.js
// Centralizza tutte le chiamate al backend

import axios from 'axios';

// URL del backend: usa la variabile d'ambiente VITE_API_URL
// Assicurati di avere un file .env con:
// VITE_API_URL=https://gestionale-backend-it.onrender.com
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:10000';

// ---- UTENTI ----
export const getUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/users`);
    return response.data;
  } catch (error) {
    console.error("Errore nel recupero utenti:", error);
    throw error;
  }
};

export const getUserById = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/api/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error(`Errore nel recupero utente ${userId}:`, error);
    throw error;
  }
};

// ---- PING BACKEND ----
export const pingBackend = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/ping`);
    return response.data;
  } catch (error) {
    console.error("Errore ping backend:", error);
    throw error;
  }
};

// ---- SERVIZI ----
export const getServices = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/services`);
    return response.data;
  } catch (error) {
    console.error("Errore nel recupero servizi:", error);
    throw error;
  }
};

// ---- COSTI E RICAVI ----
export const getRevenue = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/revenue`);
    return response.data;
  } catch (error) {
    console.error("Errore nel recupero ricavi:", error);
    throw error;
  }
};

// ---- UTENTI CHE ADERISCONO ----
export const getSubscriptions = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/subscriptions`);
    return response.data;
  } catch (error) {
    console.error("Errore nel recupero sottoscrizioni:", error);
    throw error;
  }
};
