import { useState } from "react";
import { Link, NavLink } from "react-router";
import logo from "../../assets/images/jobs-portal-logo.png";
import Logout from "../../shared/Logout";
import { IoClose, IoMenu } from "react-icons/io5";
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

const DashTopNav = () => {
  const [open, setOpen] = useState(false);
  const [role, setRole] = useState("employer");

  return (
    <div className="h-[7vh] md:h-[8vh] lg:h-[9vh] 2xl:h-[10vh] hero px-6 lg:px-7 2xl:px-8 flex items-center justify-between shadow">
      {/* Logo */}
      <Link to={"/dashboard"}>
        <img className="h-7.5 md:h-9 lg:h-10" src={logo} alt="" />
      </Link>

      <div className="flex items-center gap-4">
        <Logout />
        {/* Mobile Manu Bar */}
        <div>
          <button
            className="text-[25px] md:text-[30px] lg:hidden"
            onClick={() => setOpen(!open)}
          >
            {!open ? <IoMenu /> : <IoClose />}
          </button>
        </div>
      </div>

      {/* Mobile Manu */}
      <div
        className={`bg-[#ffff] w-full h-[93vh] md:h-[92vh] flex flex-col pt-8 absolute top-[7vh] md:top-[8vh] gap-6 lg:hidden duration-500 ${open ? "left-0" : "-left-full"}`}
      >
        {role === "admin" && (
          <div className="flex flex-col">
            <NavLink
              onClick={() => setOpen(!open)}
              className={(navClass) =>
                navClass?.isActive
                  ? "bg-[#2563eb14] py-3 flex items-center gap-4 text-[#1d4ed8] font-medium px-6 lg:px-7 2xl:px-8"
                  : "py-3 flex items-center gap-4 font-medium px-6 lg:px-7 2xl:px-8"
              }
              to={"/"}
            >
              <FaHome className="lg:text-[18px]" />
              <span>Home</span>
            </NavLink>
            <NavLink
              onClick={() => setOpen(!open)}
              className={(navClass) =>
                navClass?.isActive
                  ? "bg-[#2563eb14] py-3 flex items-center gap-4 text-[#1d4ed8] font-medium px-6 lg:px-7 2xl:px-8"
                  : "py-3 flex items-center gap-4 font-medium px-6 lg:px-7 2xl:px-8"
              }
              to={"all-user"}
            >
              <FaUserFriends className="lg:text-[18px]" />
              <span>All User</span>
            </NavLink>
            <NavLink
              onClick={() => setOpen(!open)}
              className={(navClass) =>
                navClass?.isActive
                  ? "bg-[#2563eb14] py-3 flex items-center gap-4 text-[#1d4ed8] font-medium px-6 lg:px-7 2xl:px-8"
                  : "py-3 flex items-center gap-4 font-medium px-6 lg:px-7 2xl:px-8"
              }
              to={"all-blogs"}
            >
              <BiLogoBlogger className="lg:text-[18px]" />
              <span>All Blogs</span>
            </NavLink>
            <NavLink
              onClick={() => setOpen(!open)}
              className={(navClass) =>
                navClass?.isActive
                  ? "bg-[#2563eb14] py-3 flex items-center gap-4 text-[#1d4ed8] font-medium px-6 lg:px-7 2xl:px-8"
                  : "py-3 flex items-center gap-4 font-medium px-6 lg:px-7 2xl:px-8"
              }
              to={"all-jobs"}
            >
              <FaBriefcase className="lg:text-[18px]" />
              <span>All Jobs</span>
            </NavLink>
            <NavLink
              onClick={() => setOpen(!open)}
              className={(navClass) =>
                navClass?.isActive
                  ? "bg-[#2563eb14] py-3 flex items-center gap-4 text-[#1d4ed8] font-medium px-6 lg:px-7 2xl:px-8"
                  : "py-3 flex items-center gap-4 font-medium px-6 lg:px-7 2xl:px-8"
              }
              to={"add-blogs"}
            >
              <BiLogoBlogger className="lg:text-[20px]" />
              <span>Add Blogs</span>
            </NavLink>
            <NavLink
              onClick={() => setOpen(!open)}
              className={(navClass) =>
                navClass?.isActive
                  ? "bg-[#2563eb14] py-3 flex items-center gap-4 text-[#1d4ed8] font-medium px-6 lg:px-7 2xl:px-8"
                  : "py-3 flex items-center gap-4 font-medium px-6 lg:px-7 2xl:px-8"
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
              onClick={() => setOpen(!open)}
              className={(navClass) =>
                navClass?.isActive
                  ? "bg-[#2563eb14] py-3 flex items-center gap-4 text-[#1d4ed8] font-medium px-6 lg:px-7 2xl:px-8"
                  : "py-3 flex items-center gap-4 font-medium px-6 lg:px-7 2xl:px-8"
              }
              to={"/"}
            >
              <FaHome className="lg:text-[18px]" />
              <span>Home</span>
            </NavLink>
            <NavLink
              onClick={() => setOpen(!open)}
              className={(navClass) =>
                navClass?.isActive
                  ? "bg-[#2563eb14] py-3 flex items-center gap-4 text-[#1d4ed8] font-medium px-6 lg:px-7 2xl:px-8"
                  : "py-3 flex items-center gap-4 font-medium px-6 lg:px-7 2xl:px-8"
              }
              to={"my-profile"}
            >
              <FaUserAlt className="lg:text-[18px]" />
              <span>My Profile</span>
            </NavLink>
            <NavLink
              onClick={() => setOpen(!open)}
              className={(navClass) =>
                navClass?.isActive
                  ? "bg-[#2563eb14] py-3 flex items-center gap-4 text-[#1d4ed8] font-medium px-6 lg:px-7 2xl:px-8"
                  : "py-3 flex items-center gap-4 font-medium px-6 lg:px-7 2xl:px-8"
              }
              to={"my-apply-jobs"}
            >
              <FaBriefcase className="lg:text-[18px]" />
              <span>My Apply Jobs</span>
            </NavLink>
            <NavLink
              onClick={() => setOpen(!open)}
              className={(navClass) =>
                navClass?.isActive
                  ? "bg-[#2563eb14] py-3 flex items-center gap-4 text-[#1d4ed8] font-medium px-6 lg:px-7 2xl:px-8"
                  : "py-3 flex items-center gap-4 font-medium px-6 lg:px-7 2xl:px-8"
              }
              to={"create-resume"}
            >
              <RiFileEditFill className="lg:text-[20px]" />
              <span>Create Resumes</span>
            </NavLink>
            <NavLink
              onClick={() => setOpen(!open)}
              className={(navClass) =>
                navClass?.isActive
                  ? "bg-[#2563eb14] py-3 flex items-center gap-4 text-[#1d4ed8] font-medium px-6 lg:px-7 2xl:px-8"
                  : "py-3 flex items-center gap-4 font-medium px-6 lg:px-7 2xl:px-8"
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
              onClick={() => setOpen(!open)}
              className={(navClass) =>
                navClass?.isActive
                  ? "bg-[#2563eb14] py-3 flex items-center gap-4 text-[#1d4ed8] font-medium px-6 lg:px-7 2xl:px-8"
                  : "py-3 flex items-center gap-4 font-medium px-6 lg:px-7 2xl:px-8"
              }
              to={"/"}
            >
              <FaHome className="lg:text-[18px]" />
              <span>Home</span>
            </NavLink>
            <NavLink
              onClick={() => setOpen(!open)}
              className={(navClass) =>
                navClass?.isActive
                  ? "bg-[#2563eb14] py-3 flex items-center gap-4 text-[#1d4ed8] font-medium px-6 lg:px-7 2xl:px-8"
                  : "py-3 flex items-center gap-4 font-medium px-6 lg:px-7 2xl:px-8"
              }
              to={"employer-profile"}
            >
              <FaUser className="lg:text-[18px]" />
              <span>Profile</span>
            </NavLink>
            <NavLink
              onClick={() => setOpen(!open)}
              className={(navClass) =>
                navClass?.isActive
                  ? "bg-[#2563eb14] py-3 flex items-center gap-4 text-[#1d4ed8] font-medium px-6 lg:px-7 2xl:px-8"
                  : "py-3 flex items-center gap-4 font-medium px-6 lg:px-7 2xl:px-8"
              }
              to={"submit-jobs"}
            >
              <FaBriefcaseMedical className="lg:text-[18px]" />
              <span>Submit Jobs</span>
            </NavLink>
            <NavLink
              onClick={() => setOpen(!open)}
              className={(navClass) =>
                navClass?.isActive
                  ? "bg-[#2563eb14] py-3 flex items-center gap-4 text-[#1d4ed8] font-medium px-6 lg:px-7 2xl:px-8"
                  : "py-3 flex items-center gap-4 font-medium px-6 lg:px-7 2xl:px-8"
              }
              to={"my-jobs"}
            >
              <FaBriefcase className="lg:text-[18px]" />
              <span>My Jobs</span>
            </NavLink>
            <NavLink
              onClick={() => setOpen(!open)}
              className={(navClass) =>
                navClass?.isActive
                  ? "bg-[#2563eb14] py-3 flex items-center gap-4 text-[#1d4ed8] font-medium px-6 lg:px-7 2xl:px-8"
                  : "py-3 flex items-center gap-4 font-medium px-6 lg:px-7 2xl:px-8"
              }
              to={"job-applicants"}
            >
              <FaPaperPlane className="lg:text-[20px]" />
              <span>Job Applicants</span>
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashTopNav;
