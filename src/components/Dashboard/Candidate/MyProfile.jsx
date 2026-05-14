import React from "react";
import {
  FaCamera,
  FaEdit,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaUserShield,
} from "react-icons/fa";

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
    image: "https://i.ibb.co/7QpKsCX/avatar.png",
  };

  return (
    <div className="min-h-screen bg-[#f5f6fa] p-6">
      {/* Page Title */}
      <h1 className="text-2xl font-bold text-[#0f3d2e] mb-6">My Profile</h1>

      {/* ================= PROFILE CARD ================= */}
      <div className="bg-white rounded-3xl p-8 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          {/* Image */}
          <div className="relative">
            <img
              src={user.image}
              alt="profile"
              className="w-24 h-24 rounded-full object-cover"
            />

            {/* Camera Icon */}
            <button className="absolute bottom-1 right-1 bg-[#0f3d2e] text-white p-2 rounded-full">
              <FaCamera size={12} />
            </button>
          </div>

          {/* User Info */}
          <div>
            <h2 className="text-2xl font-semibold text-[#0f3d2e]">
              {user.firstName} {user.lastName}
            </h2>

            <p className="text-gray-500 mt-1">{user.role}</p>

            <div className="flex items-center gap-2 mt-2 text-gray-500">
              <FaMapMarkerAlt />
              <span>{user.location}</span>
            </div>
          </div>
        </div>
      </div>

      {/* ================= PERSONAL INFORMATION ================= */}
      <div className="bg-white rounded-3xl p-8 shadow-sm mt-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b pb-4 mb-6">
          <h2 className="text-2xl font-semibold text-[#0f3d2e]">
            Personal Information
          </h2>

          <button className="bg-orange-400 hover:bg-orange-500 text-white px-5 py-2 rounded-xl flex items-center gap-2 transition">
            <FaEdit />
            Edit
          </button>
        </div>

        {/* Info Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* First Name */}
          <div>
            <p className="text-gray-400 mb-2">First Name</p>

            <h3 className="font-semibold text-lg text-gray-800">
              {user.firstName}
            </h3>
          </div>

          {/* Last Name */}
          <div>
            <p className="text-gray-400 mb-2">Last Name</p>

            <h3 className="font-semibold text-lg text-gray-800">
              {user.lastName}
            </h3>
          </div>

          {/* Date of Birth */}
          <div>
            <p className="text-gray-400 mb-2">Date of Birth</p>

            <h3 className="font-semibold text-lg text-gray-800">
              {user.dateOfBirth}
            </h3>
          </div>

          {/* Email */}
          <div>
            <p className="text-gray-400 mb-2">Email Address</p>

            <div className="flex items-center gap-2">
              <FaEnvelope className="text-gray-400" />

              <h3 className="font-semibold text-lg text-gray-800">
                {user.email}
              </h3>
            </div>
          </div>

          {/* Phone */}
          <div>
            <p className="text-gray-400 mb-2">Phone Number</p>

            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-gray-400" />

              <h3 className="font-semibold text-lg text-gray-800">
                {user.phone}
              </h3>
            </div>
          </div>

          {/* Role */}
          <div>
            <p className="text-gray-400 mb-2">User Role</p>

            <div className="flex items-center gap-2">
              <FaUserShield className="text-gray-400" />

              <h3 className="font-semibold text-lg text-gray-800">
                {user.role}
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* ================= ADDRESS SECTION ================= */}
      <div className="bg-white rounded-3xl p-8 shadow-sm mt-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b pb-4 mb-6">
          <h2 className="text-2xl font-semibold text-[#0f3d2e]">Address</h2>

          <button className="border border-gray-300 hover:bg-gray-100 px-5 py-2 rounded-xl flex items-center gap-2 transition">
            <FaEdit />
            Edit
          </button>
        </div>

        {/* Address Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Country */}
          <div>
            <p className="text-gray-400 mb-2">Country</p>

            <h3 className="font-semibold text-lg text-gray-800">
              {user.country}
            </h3>
          </div>

          {/* City */}
          <div>
            <p className="text-gray-400 mb-2">City</p>

            <h3 className="font-semibold text-lg text-gray-800">{user.city}</h3>
          </div>

          {/* Postal Code */}
          <div>
            <p className="text-gray-400 mb-2">Postal Code</p>

            <h3 className="font-semibold text-lg text-gray-800">
              {user.postalCode}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
