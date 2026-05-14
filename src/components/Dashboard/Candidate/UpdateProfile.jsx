import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaUser } from "react-icons/fa";

const UpdateProfile = () => {
  // 👉 MyProfile data এখানে import না করে state এ দিলাম
  const [user, setUser] = useState({
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
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Profile:", user);

    // 👉 এখানে API / Firebase update call যাবে
    alert("Profile Updated Successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-[#0f3d2e]">
          Update Profile
        </h2>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-5">
          {/* First Name */}
          <div>
            <label className="text-sm text-gray-500">First Name</label>
            <input
              name="firstName"
              value={user.firstName}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="text-sm text-gray-500">Last Name</label>
            <input
              name="lastName"
              value={user.lastName}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-gray-500 flex items-center gap-1">
              <FaEnvelope /> Email
            </label>
            <input
              name="email"
              value={user.email}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="text-sm text-gray-500 flex items-center gap-1">
              <FaPhoneAlt /> Phone
            </label>
            <input
              name="phone"
              value={user.phone}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />
          </div>

          {/* DOB */}
          <div>
            <label className="text-sm text-gray-500">Date of Birth</label>
            <input
              name="dateOfBirth"
              value={user.dateOfBirth}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />
          </div>

          {/* Role */}
          <div>
            <label className="text-sm text-gray-500 flex items-center gap-1">
              <FaUser /> Role
            </label>
            <input
              name="role"
              value={user.role}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />
          </div>

          {/* Country */}
          <div>
            <label className="text-sm text-gray-500">Country</label>
            <input
              name="country"
              value={user.country}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />
          </div>

          {/* City */}
          <div>
            <label className="text-sm text-gray-500 flex items-center gap-1">
              <FaMapMarkerAlt /> City
            </label>
            <input
              name="city"
              value={user.city}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />
          </div>

          {/* Postal Code */}
          <div>
            <label className="text-sm text-gray-500">Postal Code</label>
            <input
              name="postalCode"
              value={user.postalCode}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />
          </div>

          {/* Location */}
          <div className="md:col-span-2">
            <label className="text-sm text-gray-500">Location</label>
            <input
              name="location"
              value={user.location}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-[#0f3d2e] text-white py-3 rounded-lg hover:bg-green-800 transition"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
