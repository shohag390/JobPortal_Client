import { useState } from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/images/jobs-portal-logo.png";
import userimage from "../assets/images/user.png";
import { IoIosMenu } from "react-icons/io";
import { IoClose, IoCloseOutline, IoMenu } from "react-icons/io5";

const navLink = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/about",
    display: "About Us",
  },
  {
    path: "/jobs",
    display: "Jobs",
  },
  {
    path: "/blogs",
    display: "Blogs",
  },
  {
    path: "/contacts-us",
    display: "Contacts Us",
  },
];

const Navbar = () => {
  const [user, setUser] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <nav className="px-5 md:px-12 lg:px-20 2xl:px-60 h-[7vh] md:h-[8vh] lg:h-[9vh] 2xl:h-[10vh] bg-[#ffffff] flex items-center justify-between sticky top-0 left-0 z-50 shadow">
      {/* Logo */}
      <Link to={"/"}>
        <img className="h-7.5 md:h-9 lg:h-10" src={logo} alt="" />
      </Link>

      {/* Desktop Menu */}
      <ul className="lg:flex lg:items-center lg:gap-6 hidden">
        {navLink?.map((link, index) => (
          <li key={index}>
            <NavLink to={link?.path}>{link?.display}</NavLink>
          </li>
        ))}
      </ul>

      {/* Mobile Menu */}
      <ul
        className={`bg-[#ffff] w-full h-[93vh] md:h-[92vh] flex flex-col items-center justify-center absolute top-[7vh] md:top-[8vh] gap-6 lg:hidden duration-500 ${open ? "left-0" : "-left-full"}`}
      >
        {navLink?.map((link, index) => (
          <li key={index}>
            <NavLink onClick={() => setOpen(!open)} to={link?.path}>
              {link?.display}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Login Button & Mobile Manu Bar */}
      <div className="flex items-center gap-4">
        {/* Auth Button */}
        {!user ? (
          <Link to={"/sign-in"}>
            <button className="bg-[#22c55e] hover:bg-[#05af44] duration-500 py-1.5 md:py-2 lg:py-3 px-6 md:px-8 lg:px-10 rounded-full text-[#ffff] text-[14px] md:text-[16px]">
              Sign In
            </button>
          </Link>
        ) : (
          <Link to={"/dashboard"}>
            <img
              className="h-10 md:h-12 lg:h-13 w-10 md:w-12 lg:w-13 rounded-full shadow"
              src={userimage}
              alt="profile"
            />
          </Link>
        )}

        {/* Mobile Manu Bar */}
        <button
          className="text-[25px] md:text-[30px] lg:hidden"
          onClick={() => setOpen(!open)}
        >
          {!open ? <IoMenu /> : <IoClose />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
