import React from "react";
import {
  FaCamera,
  FaEdit,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaUserShield,
  FaBuilding,
  FaGlobe,
} from "react-icons/fa";
import DashboardHeader from "../DashboardHeader";

const EmployerProfile = () => {
  const employer = {
    firstName: "John",
    lastName: "Smith",
    role: "Employer / HR Manager",
    company: "TechCorp Ltd",
    email: "hr@techcorp.com",
    phone: "(+880) 123 456 789",
    country: "Bangladesh",
    city: "Dhaka",
    postalCode: "1207",
    location: "Dhaka, Bangladesh",
    website: "www.techcorp.com",
    image: "https://i.ibb.co.com/Jw5qDrk5/user2.jpg",
    about:
      "We are a global tech company hiring developers, designers, and product managers for remote and onsite roles.",
  };

  return (
    <div className="px-6 lg:px-7 2xl:px-8">
      {/* Page Title */}
      <DashboardHeader
        title={"Employer Profile"}
        subTitle={"Innovative, Collaborative, Growth-Focused Team"}
      />

      {/* PROFILE CARD */}
      <div className="bg-[#ffff] p-4 lg:p-5 2xl:p-6 companie-card border border-[#cccccc5d] rounded-2xl">
        <div className="flex items-center gap-6">
          {/* Image */}
          <div>
            <img
              src={employer.image}
              alt="profile"
              className="w-25 md:w-28 lg:w-30 h-25 md:h-28 lg:h-30 rounded-full object-cover"
            />
          </div>

          {/* Info */}
          <div>
            <h2 className="text-[16px] md:text-[18px] lg:text-[20px] font-semibold">
              {employer.firstName} {employer.lastName}
            </h2>

            <p className="text-[14px] md:text-[16px] text-[#64748b] mt-1">
              {employer.role}
            </p>

            <div className="text-[14px] md:text-[16px] text-[#64748b] flex items-center gap-2 mt-2">
              <FaMapMarkerAlt />
              <span>{employer.location}</span>
            </div>

            <div className="flex items-center gap-2 mt-1 text-[14px] md:text-[16px] text-[#64748b]">
              <FaBuilding />
              <span>{employer.company}</span>
            </div>
          </div>
        </div>
      </div>

      {/*  COMPANY INFORMATION  */}
      <div className="bg-[#ffff] p-4 lg:p-5 2xl:p-6 companie-card border border-[#cccccc5d] rounded-2xl my-3 md:my-4 lg:my-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#64748b28] pb-2 lg:pb-3">
          <h2 className="text-[16px] md:text-[18px] lg:text-[20px] font-semibold">
            Company Information
          </h2>

          <button className="bg-[#1d4fd841] hover:bg-[#003ad8] duration-500 py-1.5 md:py-2 lg:py-3 px-6 md:px-8 lg:px-10 rounded-full text-[#003ad8] hover:text-[#ffff] text-[14px] md:text-[16px] flex items-center justify-center gap-2">
            <FaEdit />
            Edit
          </button>
        </div>

        {/* Info */}
        <div className="grid md:grid-cols-3 gap-3 md:gap-4 lg:gap-5 2xl:gap-6">
          {/* First Name */}
          <div className="pt-4">
            <p className="font-medium text-[18px]">First Name</p>
            <p className="text-[14px] md:text-[16px] text-[#64748b]">
              {employer.firstName}
            </p>
          </div>

          {/* Last Name */}
          <div className="pt-4">
            <p className="font-medium text-[18px]">Last Name</p>
            <p className="text-[14px] md:text-[16px] text-[#64748b]">
              {employer.lastName}
            </p>
          </div>

          {/* Role */}
          <div className="pt-4">
            <p className="font-medium text-[18px]">Role</p>
            <p className="text-[14px] md:text-[16px] text-[#64748b]">
              {employer.role}
            </p>
          </div>

          {/* Email */}
          <div className="pt-4">
            <p className="font-medium text-[18px]">Email Address</p>
            <p className="text-[14px] md:text-[16px] text-[#64748b]">
              {employer.email}
            </p>
          </div>

          {/* Phone */}
          <div className="pt-4">
            <p className="font-medium text-[18px]">Phone Number</p>
            <p className="text-[14px] md:text-[16px] text-[#64748b]">
              {employer.phone}
            </p>
          </div>

          {/* Website */}
          <div className="pt-4">
            <p className="font-medium text-[18px]">Website</p>
            <p className="text-[14px] md:text-[16px] text-[#64748b]">
              {employer.website}
            </p>
          </div>
        </div>
      </div>

      {/* ADDRESS SECTION  */}
      <div className="bg-[#ffff] p-4 lg:p-5 2xl:p-6 companie-card border border-[#cccccc5d] rounded-2xl mb-3 md:mb-4 lg:mb-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#64748b28] pb-2 lg:pb-3">
          <h2 className="text-[16px] md:text-[18px] lg:text-[20px] font-semibold">
            Address
          </h2>

          <button className="bg-[#1d4fd841] hover:bg-[#003ad8] duration-500 py-1.5 md:py-2 lg:py-3 px-6 md:px-8 lg:px-10 rounded-full text-[#003ad8] hover:text-[#ffff] text-[14px] md:text-[16px] flex items-center justify-center gap-2">
            <FaEdit />
            Edit
          </button>
        </div>

        {/* Address Grid */}
        <div className="grid md:grid-cols-3 gap-3 md:gap-4 lg:gap-5 2xl:gap-6">
          <div className="pt-4">
            <p className="font-medium text-[18px]">Country</p>
            <h3 className="text-[14px] md:text-[16px] text-[#64748b]">
              {employer.country}
            </h3>
          </div>

          <div className="pt-4">
            <p className="font-medium text-[18px]">City</p>
            <h3 className="text-[14px] md:text-[16px] text-[#64748b]">
              {employer.city}
            </h3>
          </div>

          <div className="pt-4">
            <p className="font-medium text-[18px]">Postal Code</p>
            <h3 className="text-[14px] md:text-[16px] text-[#64748b]">
              {employer.postalCode}
            </h3>
          </div>
        </div>
      </div>

      {/*  ABOUT COMPANY  */}
      <div className="bg-[#ffff] p-4 lg:p-5 2xl:p-6 companie-card border border-[#cccccc5d] rounded-2xl mb-3 md:mb-4 lg:mb-6">
        <h2 className="text-[16px] md:text-[18px] lg:text-[20px] font-semibold">
          About Company
        </h2>

        <p className="text-[#64748b] leading-relaxed">{employer.about}</p>
      </div>
    </div>
  );
};

export default EmployerProfile;
