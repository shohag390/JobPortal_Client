import React from "react";
import {
  FaCamera,
  FaEdit,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaUserShield,
} from "react-icons/fa";
import DashboardHeader from "../DashboardHeader";

const MyProfile = () => {
  const user = {
    firstName: "Natashia",
    lastName: "Khaleira",
    role: "Admin",
    dateOfBirth: "12-10-1990",
    email: "info@binary-fusion.com",
    phone: "(+62) 821 2554-5846",
    country: "United Kingdom",
    city: "Leeds, East London",
    postalCode: "ERT 1254",
    location: "Leeds, United Kingdom",
    image: "https://i.ibb.co.com/Jw5qDrk5/user2.jpg",
  };

  return (
    <div className="px-6 lg:px-7 2xl:px-8">
      {/* Page Title */}
      <DashboardHeader
        title={"My Profile"}
        subTitle={"Innovative, Collaborative, Growth-Focused Team"}
      />

      {/*  PROFILE CARD  */}
      <div className="bg-[#ffff] p-4 lg:p-5 2xl:p-6 companie-card border border-[#cccccc5d] rounded-2xl">
        <div className="flex items-center gap-6">
          {/* Image */}
          <div>
            <img
              src={user.image}
              alt="profile"
              className="w-25 md:w-28 lg:w-30 h-25 md:h-28 lg:h-30 rounded-full object-cover"
            />
          </div>

          {/* User Info */}
          <div>
            <h2 className="text-[16px] md:text-[18px] lg:text-[20px] font-semibold">
              {user.firstName} {user.lastName}
            </h2>

            <p className="text-[14px] md:text-[16px] text-[#64748b] mt-1">
              {user.role}
            </p>

            <div className="text-[14px] md:text-[16px] text-[#64748b] flex items-center gap-2 mt-2">
              <FaMapMarkerAlt />
              <span>{user.location}</span>
            </div>
          </div>
        </div>
      </div>

      {/*  PERSONAL INFORMATION  */}
      <div className="bg-[#ffff] p-4 lg:p-5 2xl:p-6 companie-card border border-[#cccccc5d] rounded-2xl my-3 md:my-4 lg:my-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#64748b28] pb-2 lg:pb-3">
          <h2 className="text-[16px] md:text-[18px] lg:text-[20px] font-semibold">
            Personal Information
          </h2>

          <button className="bg-[#1d4fd841] hover:bg-[#003ad8] duration-500 py-1.5 md:py-2 lg:py-3 px-6 md:px-8 lg:px-10 rounded-full text-[#003ad8] hover:text-[#ffff] text-[14px] md:text-[16px] flex items-center justify-center gap-2">
            <FaEdit />
            Edit
          </button>
        </div>

        {/* Info Grid */}
        <div className="grid md:grid-cols-3 gap-3 md:gap-4 lg:gap-5 2xl:gap-6">
          {/* First Name */}
          <div className="pt-4">
            <p className="font-medium text-[18px]">First Name</p>

            <h3 className="text-[14px] md:text-[16px] text-[#64748b]">
              {user.firstName}
            </h3>
          </div>

          {/* Last Name */}
          <div className="pt-4">
            <p className="font-medium text-[18px]">Last Name</p>

            <h3 className="text-[14px] md:text-[16px] text-[#64748b]">
              {user.lastName}
            </h3>
          </div>

          {/* Date of Birth */}
          <div className="pt-4">
            <p className="font-medium text-[18px]">Date of Birth</p>

            <h3 className="text-[14px] md:text-[16px] text-[#64748b]">
              {user.dateOfBirth}
            </h3>
          </div>

          {/* Email */}
          <div className="pt-4">
            <p className="font-medium text-[18px]">Email Address</p>
            <h3 className="text-[14px] md:text-[16px] text-[#64748b]">
              {user.email}
            </h3>
          </div>

          {/* Phone */}
          <div className="pt-4">
            <p className="font-medium text-[18px]">Phone Number</p>
            <h3 className="text-[14px] md:text-[16px] text-[#64748b]">
              {user.phone}
            </h3>
          </div>
        </div>
      </div>

      {/*  ADDRESS SECTION  */}
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
          {/* Country */}
          <div className="pt-4">
            <p className="font-medium text-[18px]">Country</p>
            <h3 className="text-[14px] md:text-[16px] text-[#64748b]">
              {user.country}
            </h3>
          </div>

          {/* City */}
          <div className="pt-4">
            <p className="font-medium text-[18px]">City</p>
            <h3 className="text-[14px] md:text-[16px] text-[#64748b]">
              {user.city}
            </h3>
          </div>

          {/* Postal Code */}
          <div className="pt-4">
            <p className="font-medium text-[18px]">Postal Code</p>
            <h3 className="text-[14px] md:text-[16px] text-[#64748b]">
              {user.postalCode}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
