import React, { useState } from "react";
import {
  FaCamera,
  FaSave,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGlobe,
} from "react-icons/fa";

const EmployerProfileUpdate = () => {
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Smith",
    role: "Employer / HR Manager",
    company: "TechCorp Ltd",
    email: "hr@techcorp.com",
    phone: "(+880) 123 456 789",
    country: "Bangladesh",
    city: "Dhaka",
    postalCode: "1207",
    website: "www.techcorp.com",
    location: "Dhaka, Bangladesh",
    about:
      "We are a global tech company hiring developers, designers, and product managers.",
    image: "https://i.ibb.co/7QpKsCX/avatar.png",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Profile Updated Successfully!");
  };

  return (
    <div className="min-h-screen bg-[#f5f6fa] p-6">
      {/* Title */}
      <h1 className="text-2xl font-bold text-[#0f3d2e] mb-6">
        Update Employer Profile
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* ================= PROFILE IMAGE ================= */}
        <div className="bg-white rounded-3xl p-8 shadow-sm flex flex-col md:flex-row items-center gap-6">
          <div className="relative">
            <img
              src={formData.image}
              alt="profile"
              className="w-24 h-24 rounded-full object-cover"
            />

            <button className="absolute bottom-1 right-1 bg-[#0f3d2e] text-white p-2 rounded-full">
              <FaCamera size={12} />
            </button>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#0f3d2e]">
              Upload Company Profile Image
            </h2>
            <p className="text-gray-500 text-sm">Recommended size: 300x300px</p>
          </div>
        </div>

        {/* ================= BASIC INFO ================= */}
        <div className="bg-white rounded-3xl p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-[#0f3d2e] mb-6">
            Basic Information
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className="border p-3 rounded-xl"
            />

            <input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="border p-3 rounded-xl"
            />

            <input
              name="role"
              value={formData.role}
              onChange={handleChange}
              placeholder="Role"
              className="border p-3 rounded-xl"
            />

            <input
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company Name"
              className="border p-3 rounded-xl"
            />
          </div>
        </div>

        {/* ================= CONTACT INFO ================= */}
        <div className="bg-white rounded-3xl p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-[#0f3d2e] mb-6">
            Contact Information
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center gap-2 border p-3 rounded-xl">
              <FaEnvelope className="text-gray-400" />
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full outline-none"
                placeholder="Email"
              />
            </div>

            <div className="flex items-center gap-2 border p-3 rounded-xl">
              <FaPhoneAlt className="text-gray-400" />
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full outline-none"
                placeholder="Phone"
              />
            </div>

            <div className="flex items-center gap-2 border p-3 rounded-xl">
              <FaGlobe className="text-gray-400" />
              <input
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="w-full outline-none"
                placeholder="Website"
              />
            </div>
          </div>
        </div>

        {/* ================= ADDRESS ================= */}
        <div className="bg-white rounded-3xl p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-[#0f3d2e] mb-6">
            Address Information
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <input
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="Country"
              className="border p-3 rounded-xl"
            />

            <input
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City"
              className="border p-3 rounded-xl"
            />

            <input
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              placeholder="Postal Code"
              className="border p-3 rounded-xl"
            />
          </div>

          <div className="flex items-center gap-2 border p-3 rounded-xl mt-6">
            <FaMapMarkerAlt className="text-gray-400" />
            <input
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full outline-none"
              placeholder="Full Location"
            />
          </div>
        </div>

        {/* ================= ABOUT ================= */}
        <div className="bg-white rounded-3xl p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-[#0f3d2e] mb-4">
            About Company
          </h2>

          <textarea
            name="about"
            value={formData.about}
            onChange={handleChange}
            rows="5"
            className="w-full border p-3 rounded-xl"
            placeholder="Write about your company..."
          ></textarea>
        </div>

        {/*  BUTTON */}
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl flex items-center gap-2"
        >
          <FaSave /> Save Changes
        </button>
      </form>
    </div>
  );
};

export default EmployerProfileUpdate;
