import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../../assets/images/jobs-portal-logo.png";

const DashTopNav = () => {
  return (
    <div className="h-[7vh] md:h-[8vh] lg:h-[9vh] 2xl:h-[10vh] hero px-6 lg:px-7 2xl:px-8 flex items-center justify-between shadow">
      {/* Logo */}
      <Link to={"/dashboard"}>
        <img className="h-7.5 md:h-9 lg:h-10" src={logo} alt="" />
      </Link>
    </div>
  );
};

export default DashTopNav;
