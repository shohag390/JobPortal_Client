import React, { useState } from "react";
import AdminHome from "./Admin/AdminHome";
import CandidateHome from "./Candidate/CandidateHome";
import EmployerHome from "./Employer/EmployerHome";

const DashboardHome = () => {
  const [role, setRole] = useState("employer");

  return (
    <div>
      {role === "admin" && <AdminHome />}
      {role === "candidate" && <CandidateHome />}
      {role === "employer" && <EmployerHome />}
    </div>
  );
};

export default DashboardHome;
