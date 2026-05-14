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
    image: "https://i.ibb.co/7QpKsCX/avatar.png",
    about:
      "We are a global tech company hiring developers, designers, and product managers for remote and onsite roles.",
  };

  return (
    <div className="min-h-screen bg-[#f5f6fa] p-6">
      {/* Page Title */}
      <h1 className="text-2xl font-bold text-[#0f3d2e] mb-6">
        Employer Profile
      </h1>

      {/* ================= PROFILE CARD ================= */}
      <div className="bg-white rounded-3xl p-8 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          {/* Image */}
          <div className="relative">
            <img
              src={employer.image}
              alt="profile"
              className="w-24 h-24 rounded-full object-cover"
            />

            {/* Camera Icon */}
            <button className="absolute bottom-1 right-1 bg-[#0f3d2e] text-white p-2 rounded-full">
              <FaCamera size={12} />
            </button>
          </div>

          {/* Info */}
          <div>
            <h2 className="text-2xl font-semibold text-[#0f3d2e]">
              {employer.firstName} {employer.lastName}
            </h2>

            <p className="text-gray-500 mt-1">{employer.role}</p>

            <div className="flex items-center gap-2 mt-2 text-gray-500">
              <FaMapMarkerAlt />
              <span>{employer.location}</span>
            </div>

            <div className="flex items-center gap-2 mt-1 text-gray-500">
              <FaBuilding />
              <span>{employer.company}</span>
            </div>
          </div>
        </div>
      </div>

      {/* ================= COMPANY INFORMATION ================= */}
      <div className="bg-white rounded-3xl p-8 shadow-sm mt-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b pb-4 mb-6">
          <h2 className="text-2xl font-semibold text-[#0f3d2e]">
            Company Information
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
              {employer.firstName}
            </h3>
          </div>

          {/* Last Name */}
          <div>
            <p className="text-gray-400 mb-2">Last Name</p>
            <h3 className="font-semibold text-lg text-gray-800">
              {employer.lastName}
            </h3>
          </div>

          {/* Role */}
          <div>
            <p className="text-gray-400 mb-2">Role</p>
            <h3 className="font-semibold text-lg text-gray-800">
              {employer.role}
            </h3>
          </div>

          {/* Email */}
          <div>
            <p className="text-gray-400 mb-2">Email Address</p>

            <div className="flex items-center gap-2">
              <FaEnvelope className="text-gray-400" />
              <h3 className="font-semibold text-lg text-gray-800">
                {employer.email}
              </h3>
            </div>
          </div>

          {/* Phone */}
          <div>
            <p className="text-gray-400 mb-2">Phone Number</p>

            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-gray-400" />
              <h3 className="font-semibold text-lg text-gray-800">
                {employer.phone}
              </h3>
            </div>
          </div>

          {/* Website */}
          <div>
            <p className="text-gray-400 mb-2">Website</p>

            <div className="flex items-center gap-2">
              <FaGlobe className="text-gray-400" />
              <h3 className="font-semibold text-lg text-gray-800">
                {employer.website}
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
          <div>
            <p className="text-gray-400 mb-2">Country</p>
            <h3 className="font-semibold text-lg text-gray-800">
              {employer.country}
            </h3>
          </div>

          <div>
            <p className="text-gray-400 mb-2">City</p>
            <h3 className="font-semibold text-lg text-gray-800">
              {employer.city}
            </h3>
          </div>

          <div>
            <p className="text-gray-400 mb-2">Postal Code</p>
            <h3 className="font-semibold text-lg text-gray-800">
              {employer.postalCode}
            </h3>
          </div>
        </div>
      </div>

      {/* ================= ABOUT COMPANY ================= */}
      <div className="bg-white rounded-3xl p-8 shadow-sm mt-6">
        <h2 className="text-2xl font-semibold text-[#0f3d2e] mb-4">
          About Company
        </h2>

        <p className="text-gray-600 leading-relaxed">{employer.about}</p>
      </div>
    </div>
  );
};

export default EmployerProfile;
