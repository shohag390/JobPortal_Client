import React, { useState } from "react";
import { BiLogoBlogger } from "react-icons/bi";
import { FaBriefcase, FaHome, FaUserFriends } from "react-icons/fa";
import { PiFlagBannerFill } from "react-icons/pi";
import { NavLink } from "react-router";

const DashSideNav = () => {
  const [role, setRole] = useState("candidate");

  return (
    <div className="h-screen lg:w-[25%] 2xl:w-[20%] fixed bg-[#ffffff]">
      {role === "admin" && (
        <div className="flex flex-col">
          <NavLink
            className={(navClass) =>
              navClass?.isActive
                ? "bg-[#2563eb14] py-3 flex items-center lg:gap-4 text-[#1d4ed8] font-medium px-6 lg:px-7 2xl:px-8"
                : "py-3 flex items-center lg:gap-4 font-medium px-6 lg:px-7 2xl:px-8"
            }
            to={"/"}
          >
            <FaHome className="lg:text-[18px]" />
            <span>Home</span>
          </NavLink>
          <NavLink
            className={(navClass) =>
              navClass?.isActive
                ? "bg-[#2563eb14] py-3 flex items-center lg:gap-4 text-[#1d4ed8] font-medium px-6 lg:px-7 2xl:px-8"
                : "py-3 flex items-center lg:gap-4 font-medium px-6 lg:px-7 2xl:px-8"
            }
            to={"all-user"}
          >
            <FaUserFriends className="lg:text-[18px]" />
            <span>All User</span>
          </NavLink>
          <NavLink
            className={(navClass) =>
              navClass?.isActive
                ? "bg-[#2563eb14] py-3 flex items-center lg:gap-4 text-[#1d4ed8] font-medium px-6 lg:px-7 2xl:px-8"
                : "py-3 flex items-center lg:gap-4 font-medium px-6 lg:px-7 2xl:px-8"
            }
            to={"all-blogs"}
          >
            <BiLogoBlogger className="lg:text-[18px]" />
            <span>All Blogs</span>
          </NavLink>
          <NavLink
            className={(navClass) =>
              navClass?.isActive
                ? "bg-[#2563eb14] py-3 flex items-center lg:gap-4 text-[#1d4ed8] font-medium px-6 lg:px-7 2xl:px-8"
                : "py-3 flex items-center lg:gap-4 font-medium px-6 lg:px-7 2xl:px-8"
            }
            to={"all-jobs"}
          >
            <FaBriefcase className="lg:text-[18px]" />
            <span>All Jobs</span>
          </NavLink>
          <NavLink
            className={(navClass) =>
              navClass?.isActive
                ? "bg-[#2563eb14] py-3 flex items-center lg:gap-4 text-[#1d4ed8] font-medium px-6 lg:px-7 2xl:px-8"
                : "py-3 flex items-center lg:gap-4 font-medium px-6 lg:px-7 2xl:px-8"
            }
            to={"add-blogs"}
          >
            <BiLogoBlogger className="lg:text-[20px]" />
            <span>Add Blogs</span>
          </NavLink>
          <NavLink
            className={(navClass) =>
              navClass?.isActive
                ? "bg-[#2563eb14] py-3 flex items-center lg:gap-4 text-[#1d4ed8] font-medium px-6 lg:px-7 2xl:px-8"
                : "py-3 flex items-center lg:gap-4 font-medium px-6 lg:px-7 2xl:px-8"
            }
            to={"add-hero-image"}
          >
            <PiFlagBannerFill className="lg:text-[20px]" />
            <span>Add Hero Image</span>
          </NavLink>
        </div>
      )}

      {role === "candidate" && (
        <div className="flex flex-col">
          <NavLink
            className={(navClass) =>
              navClass?.isActive
                ? "bg-[#2563eb14] py-3 flex items-center lg:gap-4 text-[#1d4ed8] font-medium px-6 lg:px-7 2xl:px-8"
                : "py-3 flex items-center lg:gap-4 font-medium px-6 lg:px-7 2xl:px-8"
            }
            to={"/"}
          >
            <FaHome className="lg:text-[18px]" />
            <span>Home</span>
          </NavLink>
          <NavLink
            className={(navClass) =>
              navClass?.isActive
                ? "bg-[#2563eb14] py-3 flex items-center lg:gap-4 text-[#1d4ed8] font-medium px-6 lg:px-7 2xl:px-8"
                : "py-3 flex items-center lg:gap-4 font-medium px-6 lg:px-7 2xl:px-8"
            }
            to={"all-user"}
          >
            <FaUserFriends className="lg:text-[18px]" />
            <span>All User</span>
          </NavLink>
          <NavLink
            className={(navClass) =>
              navClass?.isActive
                ? "bg-[#2563eb14] py-3 flex items-center lg:gap-4 text-[#1d4ed8] font-medium px-6 lg:px-7 2xl:px-8"
                : "py-3 flex items-center lg:gap-4 font-medium px-6 lg:px-7 2xl:px-8"
            }
            to={"all-blogs"}
          >
            <BiLogoBlogger className="lg:text-[18px]" />
            <span>All Blogs</span>
          </NavLink>
          <NavLink
            className={(navClass) =>
              navClass?.isActive
                ? "bg-[#2563eb14] py-3 flex items-center lg:gap-4 text-[#1d4ed8] font-medium px-6 lg:px-7 2xl:px-8"
                : "py-3 flex items-center lg:gap-4 font-medium px-6 lg:px-7 2xl:px-8"
            }
            to={"all-jobs"}
          >
            <FaBriefcase className="lg:text-[18px]" />
            <span>All Jobs</span>
          </NavLink>
          <NavLink
            className={(navClass) =>
              navClass?.isActive
                ? "bg-[#2563eb14] py-3 flex items-center lg:gap-4 text-[#1d4ed8] font-medium px-6 lg:px-7 2xl:px-8"
                : "py-3 flex items-center lg:gap-4 font-medium px-6 lg:px-7 2xl:px-8"
            }
            to={"add-blogs"}
          >
            <BiLogoBlogger className="lg:text-[20px]" />
            <span>Add Blogs</span>
          </NavLink>
          <NavLink
            className={(navClass) =>
              navClass?.isActive
                ? "bg-[#2563eb14] py-3 flex items-center lg:gap-4 text-[#1d4ed8] font-medium px-6 lg:px-7 2xl:px-8"
                : "py-3 flex items-center lg:gap-4 font-medium px-6 lg:px-7 2xl:px-8"
            }
            to={"add-hero-image"}
          >
            <PiFlagBannerFill className="lg:text-[20px]" />
            <span>Add Hero Image</span>
          </NavLink>
        </div>
      )}

      {role === "employer" && (
        <div className="flex flex-col">
          <NavLink
            className={(navClass) =>
              navClass?.isActive
                ? "bg-[#2563eb14] py-3 flex items-center lg:gap-4 text-[#1d4ed8] font-medium px-6 lg:px-7 2xl:px-8"
                : "py-3 flex items-center lg:gap-4 font-medium px-6 lg:px-7 2xl:px-8"
            }
            to={"/"}
          >
            <FaHome className="lg:text-[18px]" />
            <span>Home</span>
          </NavLink>
          <NavLink
            className={(navClass) =>
              navClass?.isActive
                ? "bg-[#2563eb14] py-3 flex items-center lg:gap-4 text-[#1d4ed8] font-medium px-6 lg:px-7 2xl:px-8"
                : "py-3 flex items-center lg:gap-4 font-medium px-6 lg:px-7 2xl:px-8"
            }
            to={"all-user"}
          >
            <FaUserFriends className="lg:text-[18px]" />
            <span>All User</span>
          </NavLink>
          <NavLink
            className={(navClass) =>
              navClass?.isActive
                ? "bg-[#2563eb14] py-3 flex items-center lg:gap-4 text-[#1d4ed8] font-medium px-6 lg:px-7 2xl:px-8"
                : "py-3 flex items-center lg:gap-4 font-medium px-6 lg:px-7 2xl:px-8"
            }
            to={"all-blogs"}
          >
            <BiLogoBlogger className="lg:text-[18px]" />
            <span>All Blogs</span>
          </NavLink>
          <NavLink
            className={(navClass) =>
              navClass?.isActive
                ? "bg-[#2563eb14] py-3 flex items-center lg:gap-4 text-[#1d4ed8] font-medium px-6 lg:px-7 2xl:px-8"
                : "py-3 flex items-center lg:gap-4 font-medium px-6 lg:px-7 2xl:px-8"
            }
            to={"all-jobs"}
          >
            <FaBriefcase className="lg:text-[18px]" />
            <span>All Jobs</span>
          </NavLink>
          <NavLink
            className={(navClass) =>
              navClass?.isActive
                ? "bg-[#2563eb14] py-3 flex items-center lg:gap-4 text-[#1d4ed8] font-medium px-6 lg:px-7 2xl:px-8"
                : "py-3 flex items-center lg:gap-4 font-medium px-6 lg:px-7 2xl:px-8"
            }
            to={"add-blogs"}
          >
            <BiLogoBlogger className="lg:text-[20px]" />
            <span>Add Blogs</span>
          </NavLink>
          <NavLink
            className={(navClass) =>
              navClass?.isActive
                ? "bg-[#2563eb14] py-3 flex items-center lg:gap-4 text-[#1d4ed8] font-medium px-6 lg:px-7 2xl:px-8"
                : "py-3 flex items-center lg:gap-4 font-medium px-6 lg:px-7 2xl:px-8"
            }
            to={"add-hero-image"}
          >
            <PiFlagBannerFill className="lg:text-[20px]" />
            <span>Add Hero Image</span>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default DashSideNav;
