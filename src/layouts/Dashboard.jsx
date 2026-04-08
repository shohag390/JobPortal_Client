import React from "react";
import DashNav from "../components/Dashboard/DashNav";
import { Outlet } from "react-router";

const Dashboard = () => {
  return (
    <>
      <DashNav />
      <Outlet />
    </>
  );
};

export default Dashboard;
