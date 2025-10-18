import React from "react";

// Import dei componenti
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import UserList from "./components/UserList.jsx"; // Assumiamo che questa sia la versione principale
import ServiceList from "./components/ServiceList";

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <Header />

      <main style={{ padding: "20px" }}>
        <h1>Gestionale Confartigianato Catania</h1>
        <p>Dashboard per la gestione di utenti, servizi e ricavi.</p>

        <section style={{ marginBottom: "40px" }}>
          <h2>Dashboard</h2>
          <Dashboard />
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2>Lista Utenti</h2>
          <UserList />
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2>Servizi Disponibili</h2>
          <ServiceList />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
