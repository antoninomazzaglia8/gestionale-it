import React from "react";
import UserList from "./UserList";
import ServiceList from "./ServiceList";

const Dashboard = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Dashboard</h1>
      <UserList />
      <ServiceList />
    </div>
  );
};

export default Dashboard;
