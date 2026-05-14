import React from "react";
import {
  FaBriefcase,
  FaUsers,
  FaUserTie,
  FaClipboardList,
  FaBuilding,
  FaChartLine,
  FaRegCheckCircle,
  FaHourglassHalf,
} from "react-icons/fa";

const AdminHome = () => {
  const stats = [
    {
      title: "Total Job Posts",
      value: "1,420",
      icon: <FaBriefcase />,
      color: "bg-blue-500",
    },
    {
      title: "Total Applicants",
      value: "8,560",
      icon: <FaUsers />,
      color: "bg-green-500",
    },
    {
      title: "Companies",
      value: "320",
      icon: <FaBuilding />,
      color: "bg-purple-500",
    },
    {
      title: "Active Recruiters",
      value: "180",
      icon: <FaUserTie />,
      color: "bg-orange-500",
    },
    {
      title: "Hired Candidates",
      value: "640",
      icon: <FaRegCheckCircle />,
      color: "bg-emerald-500",
    },
    {
      title: "Pending Applications",
      value: "1,230",
      icon: <FaHourglassHalf />,
      color: "bg-pink-500",
    },
  ];

  return (
    <div className="px-6 lg:px-8 min-h-screen bg-gray-50">
      {/* Header */}
      <div className="py-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Job Portal Admin Dashboard
        </h1>
        <p className="text-gray-500 mt-1">
          Manage jobs, companies, applicants and hiring activity.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm p-5 flex items-center justify-between hover:shadow-md transition"
          >
            <div>
              <p className="text-gray-500 text-sm">{item.title}</p>
              <h2 className="text-xl font-semibold mt-1">{item.value}</h2>
            </div>

            <div
              className={`text-white text-xl p-3 rounded-full ${item.color}`}
            >
              {item.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Applications */}
        <div className="bg-white p-5 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Recent Applications</h3>

          <ul className="space-y-3 text-sm text-gray-600">
            <li>👤 John Doe applied for Frontend Developer</li>
            <li>👤 Sarah Khan applied for UI/UX Designer</li>
            <li>👤 Rahim Uddin applied for Backend Developer</li>
            <li>👤 Emily Rose applied for Project Manager</li>
          </ul>
        </div>

        {/* Quick Actions */}
        <div className="bg-white p-5 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>

          <div className="grid grid-cols-2 gap-3">
            <button className="bg-blue-500 text-white py-2 rounded-lg">
              Manage Jobs
            </button>
            <button className="bg-green-500 text-white py-2 rounded-lg">
              View Applicants
            </button>
            <button className="bg-purple-500 text-white py-2 rounded-lg">
              Manage Companies
            </button>
            <button className="bg-orange-500 text-white py-2 rounded-lg">
              Interview List
            </button>
          </div>
        </div>
      </div>

      {/* Analytics Section */}
      <div className="mt-8 bg-white p-5 rounded-xl shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Hiring Overview</h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-500">Interview Scheduled</p>
            <h2 className="text-xl font-bold">320</h2>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-500">Shortlisted</p>
            <h2 className="text-xl font-bold">780</h2>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-500">Rejected</p>
            <h2 className="text-xl font-bold">1,120</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
