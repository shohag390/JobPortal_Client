import React from "react";
import {
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";
import {
  MdAlternateEmail,
  MdKeyboardDoubleArrowRight,
  MdPhoneInTalk,
} from "react-icons/md";
import { NavLink } from "react-router";

const quickLinks = [
  { path: "/", display: "Home" },
  { path: "/contact-us", display: "Contact Us" },
  { path: "/faqs", display: "FAQs" },
  { path: "/about", display: "About Us" },
  { path: "/terms", display: "Terms Of Use" },
];

const jobsByFunctionalArea = [
  { path: "/jobs/marketing", display: "Marketing" },
  { path: "/jobs/graphic-design", display: "Graphic Design" },
  { path: "/jobs/business-management", display: "Business Management" },
  {
    path: "/jobs/software-web-development",
    display: "Software & Web Development",
  },
  { path: "/jobs/admin", display: "Admin" },
  { path: "/jobs/database-administration", display: "Database Administration" },
  { path: "/jobs/advertising", display: "Advertising" },
  { path: "/jobs/web-developer", display: "Web Developer" },
];

const jobsByIndustry = [
  { path: "/industry/courier-logistics", display: "Courier/Logistics" },
  {
    path: "/industry/travel-tourism-transportation",
    display: "Travel/Tourism/Transportation",
  },
  { path: "/industry/fashion", display: "Fashion" },
  { path: "/industry/electronics", display: "Electronics" },
  { path: "/industry/automobile", display: "Automobile" },
  { path: "/industry/advertising-pr", display: "Advertising/PR" },
  { path: "/industry/health-fitness", display: "Health & Fitness" },
  {
    path: "/industry/information-technology",
    display: "Information Technology",
  },
];

const Footer = () => {
  return (
    <div className="">
      <div className="footer px-5 md:px-12 lg:px-20 2xl:px-60 py-8 md:py-10 lg:py-12 2xl:py-18 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8 lg:gap-0">
        <div>
          <h4 className="font-medium lg:font-semibold 2xl:font-bold text-[16px] lg:text-[18px] pb-2 lg:pb-3">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-1 lg:gap-2">
            {quickLinks?.map((link, index) => (
              <li key={index}>
                <NavLink
                  className={
                    "text-[14px] md:text-[16px] flex items-center gap-2 lg:gap-3 hover:text-[#1d4ed8] duration-500"
                  }
                  to={link?.path}
                >
                  <MdKeyboardDoubleArrowRight className="text-[#1d4ed8]" />
                  <span className="w-full">{link?.display}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-medium lg:font-semibold 2xl:font-bold text-[16px] lg:text-[18px] pb-2 lg:pb-3">
            Jobs By Functional Area
          </h4>
          <ul className="flex flex-col gap-1 lg:gap-2">
            {jobsByFunctionalArea?.map((link, index) => (
              <li key={index}>
                <NavLink
                  className={
                    "text-[14px] md:text-[16px] flex items-center gap-2 lg:gap-3 hover:text-[#1d4ed8] duration-500"
                  }
                  to={link?.path}
                >
                  <MdKeyboardDoubleArrowRight className="text-[#1d4ed8]" />
                  <span className="w-full">{link?.display}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-medium lg:font-semibold 2xl:font-bold text-[16px] lg:text-[18px] pb-2 lg:pb-3">
            Jobs By Industry
          </h4>
          <ul className="flex flex-col gap-1 lg:gap-2">
            {jobsByIndustry?.map((link, index) => (
              <li key={index}>
                <NavLink
                  className={
                    "text-[14px] md:text-[16px] flex items-center gap-2 lg:gap-3 hover:text-[#1d4ed8] duration-500"
                  }
                  to={link?.path}
                >
                  <MdKeyboardDoubleArrowRight className="text-[#1d4ed8]" />
                  <span className="w-full">{link?.display}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-medium lg:font-semibold 2xl:font-bold text-[16px] lg:text-[18px] pb-2 lg:pb-3">
            Contact Us
          </h4>
          <ul className="flex flex-col gap-1 lg:gap-2">
            <li
              className={
                "text-[14px] md:text-[16px] flex items-center gap-2 lg:gap-3 hover:text-[#1d4ed8] duration-500"
              }
            >
              <FaLocationDot className="text-[#1d4ed8]" />
              <span className="text-justify w-full">
                651 N Broad St, Suite 201, Middletown, Zip Code 19709, New
                Castle, Delaware, USA.
              </span>
            </li>
            <li
              className={
                "text-[14px] md:text-[16px] flex items-center gap-2 lg:gap-3 hover:text-[#1d4ed8] duration-500"
              }
            >
              <MdAlternateEmail className="text-[#1d4ed8]" />
              <span className="text-justify w-full">info@jobsportal.com</span>
            </li>
            <li
              className={
                "text-[14px] md:text-[16px] flex items-center gap-2 lg:gap-3 hover:text-[#1d4ed8] duration-500"
              }
            >
              <MdPhoneInTalk className="text-[#1d4ed8]" />
              <span className="text-justify w-full">+1 (302) 555-0123</span>
            </li>
          </ul>
          <div className="pt-4 md:pt-5 lg:pt-6 flex items-center gap-2 lg:gap-3">
            <div className="bg-[#1d4ed81f] h-10 md:h-11 lg:h-12 w-10 md:w-11 lg:w-12 flex items-center justify-center text-[20px] text-[#1d4ed8] rounded-full">
              <FaFacebookF />
            </div>
            <div className="bg-[#1d4ed81f] h-10 md:h-11 lg:h-12 w-10 md:w-11 lg:w-12 flex items-center justify-center text-[20px] text-[#1d4ed8] rounded-full">
              <FaXTwitter />
            </div>
            <div className="bg-[#1d4ed81f] h-10 md:h-11 lg:h-12 w-10 md:w-11 lg:w-12 flex items-center justify-center text-[20px] text-[#1d4ed8] rounded-full">
              <FaInstagram />
            </div>
            <div className="bg-[#1d4ed81f] h-10 md:h-11 lg:h-12 w-10 md:w-11 lg:w-12 flex items-center justify-center text-[20px] text-[#1d4ed8] rounded-full">
              <FaLinkedinIn />
            </div>
            <div className="bg-[#1d4ed81f] h-10 md:h-11 lg:h-12 w-10 md:w-11 lg:w-12 flex items-center justify-center text-[20px] text-[#1d4ed8] rounded-full">
              <FaYoutube />
            </div>
          </div>
        </div>
      </div>
      <div className="px-5 md:px-12 lg:px-20 2xl:px-60 py-3 md:py-4 lg:py-5 bg-[#ffff] border-t border-[#c2ffd2]">
        <p className="text-center">
          Copyright &copy; 2025 Jobs Portal. All rights reserved. Design by: Md
          Shohag Ali
        </p>
      </div>
    </div>
  );
};

export default Footer;
