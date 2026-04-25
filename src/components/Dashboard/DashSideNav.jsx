import React, { useState } from "react";
import { BiLogoBlogger } from "react-icons/bi";
import {
  FaBriefcase,
  FaBriefcaseMedical,
  FaHome,
  FaPaperPlane,
  FaUser,
  FaUserAlt,
  FaUserFriends,
} from "react-icons/fa";
import { PiFlagBannerFill, PiReadCvLogoFill } from "react-icons/pi";
import { RiFileEditFill } from "react-icons/ri";
import { NavLink } from "react-router";

const DashSideNav = () => {
  const [role, setRole] = useState("employer");

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
            to={"my-profile"}
          >
            <FaUserAlt className="lg:text-[18px]" />
            <span>My Profile</span>
          </NavLink>
          <NavLink
            className={(navClass) =>
              navClass?.isActive
                ? "bg-[#2563eb14] py-3 flex items-center lg:gap-4 text-[#1d4ed8] font-medium px-6 lg:px-7 2xl:px-8"
                : "py-3 flex items-center lg:gap-4 font-medium px-6 lg:px-7 2xl:px-8"
            }
            to={"my-apply-jobs"}
          >
            <FaBriefcase className="lg:text-[18px]" />
            <span>My Apply Jobs</span>
          </NavLink>
          <NavLink
            className={(navClass) =>
              navClass?.isActive
                ? "bg-[#2563eb14] py-3 flex items-center lg:gap-4 text-[#1d4ed8] font-medium px-6 lg:px-7 2xl:px-8"
                : "py-3 flex items-center lg:gap-4 font-medium px-6 lg:px-7 2xl:px-8"
            }
            to={"create-resume"}
          >
            <RiFileEditFill className="lg:text-[20px]" />
            <span>Create Resumes</span>
          </NavLink>
          <NavLink
            className={(navClass) =>
              navClass?.isActive
                ? "bg-[#2563eb14] py-3 flex items-center lg:gap-4 text-[#1d4ed8] font-medium px-6 lg:px-7 2xl:px-8"
                : "py-3 flex items-center lg:gap-4 font-medium px-6 lg:px-7 2xl:px-8"
            }
            to={"my-resume"}
          >
            <PiReadCvLogoFill className="lg:text-[20px]" />
            <span>My Resumes</span>
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
            to={"employer-profile"}
          >
            <FaUser className="lg:text-[18px]" />
            <span>Profile</span>
          </NavLink>
          <NavLink
            className={(navClass) =>
              navClass?.isActive
                ? "bg-[#2563eb14] py-3 flex items-center lg:gap-4 text-[#1d4ed8] font-medium px-6 lg:px-7 2xl:px-8"
                : "py-3 flex items-center lg:gap-4 font-medium px-6 lg:px-7 2xl:px-8"
            }
            to={"submit-jobs"}
          >
            <FaBriefcaseMedical className="lg:text-[18px]" />
            <span>Submit Jobs</span>
          </NavLink>
          <NavLink
            className={(navClass) =>
              navClass?.isActive
                ? "bg-[#2563eb14] py-3 flex items-center lg:gap-4 text-[#1d4ed8] font-medium px-6 lg:px-7 2xl:px-8"
                : "py-3 flex items-center lg:gap-4 font-medium px-6 lg:px-7 2xl:px-8"
            }
            to={"my-jobs"}
          >
            <FaBriefcase className="lg:text-[18px]" />
            <span>My Jobs</span>
          </NavLink>
          <NavLink
            className={(navClass) =>
              navClass?.isActive
                ? "bg-[#2563eb14] py-3 flex items-center lg:gap-4 text-[#1d4ed8] font-medium px-6 lg:px-7 2xl:px-8"
                : "py-3 flex items-center lg:gap-4 font-medium px-6 lg:px-7 2xl:px-8"
            }
            to={"job-applicants"}
          >
            <FaPaperPlane className="lg:text-[20px]" />
            <span>Job Applicants</span>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default DashSideNav;
