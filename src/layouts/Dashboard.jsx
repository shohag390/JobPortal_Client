import React from "react";
import { Outlet } from "react-router";
import DashTopNav from "../components/Dashboard/DashTopNav";
import DashSideNav from "../components/Dashboard/DashSideNav";

const Dashboard = () => {
  return (
    <div className="flex flex-col h-full w-full">
      <div className="sticky top-0 left-0 z-50">
        <DashTopNav />
      </div>
      <div className="flex justify-between">
        <div className="hidden lg:inline-block">
          <DashSideNav />
        </div>
        <div className="w-full lg:w-[75%] 2xl:w-[80%]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
