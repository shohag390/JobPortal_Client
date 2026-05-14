import React from "react";
import {
  FaBriefcase,
  FaUsers,
  FaCheckCircle,
  FaHourglassHalf,
  FaTimesCircle,
  FaPlus,
  FaEye,
  FaCalendarAlt,
} from "react-icons/fa";

const EmployerHome = () => {
  const stats = [
    {
      title: "Active Jobs",
      value: "18",
      icon: <FaBriefcase />,
      color: "bg-blue-500",
      desc: "Currently live job posts",
    },
    {
      title: "Total Applicants",
      value: "1,240",
      icon: <FaUsers />,
      color: "bg-green-500",
      desc: "All job applications received",
    },
    {
      title: "Hired",
      value: "86",
      icon: <FaCheckCircle />,
      color: "bg-emerald-500",
      desc: "Successful hires",
    },
    {
      title: "Pending Review",
      value: "320",
      icon: <FaHourglassHalf />,
      color: "bg-orange-500",
      desc: "Waiting for review",
    },
    {
      title: "Rejected",
      value: "210",
      icon: <FaTimesCircle />,
      color: "bg-red-500",
      desc: "Not selected candidates",
    },
  ];

  const recentJobs = [
    { title: "Frontend Developer", applicants: 45, status: "Active" },
    { title: "React Developer", applicants: 32, status: "Active" },
    { title: "Backend Developer", applicants: 18, status: "Closed" },
  ];

  const recentApplicants = [
    { name: "John Doe", job: "Frontend Developer", status: "Pending" },
    { name: "Sarah Khan", job: "React Developer", status: "Interview" },
    { name: "Rahim Uddin", job: "Backend Developer", status: "Rejected" },
  ];

  const interviews = [
    { name: "John Doe", time: "10:30 AM", date: "Today" },
    { name: "Sarah Khan", time: "2:00 PM", date: "Today" },
  ];

  return (
    <div className="px-6 lg:px-8 min-h-screen bg-gray-50">
      {/* HEADER */}
      <div className="py-6">
        <h1 className="text-2xl font-bold text-gray-800">Employer Dashboard</h1>
        <p className="text-gray-500">
          Manage your hiring process, jobs, and applicants in one place.
        </p>
      </div>

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
        {stats.map((item, i) => (
          <div
            key={i}
            className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">{item.title}</p>
                <h2 className="text-xl font-bold">{item.value}</h2>
              </div>

              <div className={`text-white p-3 rounded-full ${item.color}`}>
                {item.icon}
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-2">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* QUICK ACTION + INTERVIEW */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        {/* Quick Actions */}
        <div className="bg-white p-5 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>

          <div className="grid grid-cols-2 gap-3">
            <button className="bg-blue-500 text-white py-3 rounded-lg flex items-center justify-center gap-2">
              <FaPlus /> Post Job
            </button>

            <button className="bg-green-500 text-white py-3 rounded-lg flex items-center justify-center gap-2">
              <FaEye /> View Jobs
            </button>

            <button className="bg-purple-500 text-white py-3 rounded-lg">
              Applicants
            </button>

            <button className="bg-orange-500 text-white py-3 rounded-lg">
              Reports
            </button>
          </div>
        </div>

        {/* Interviews */}
        <div className="bg-white p-5 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <FaCalendarAlt /> Today Interviews
          </h3>

          <ul className="space-y-3">
            {interviews.map((i, idx) => (
              <li
                key={idx}
                className="flex justify-between bg-gray-50 p-3 rounded-lg"
              >
                <span className="font-medium">{i.name}</span>
                <span className="text-sm text-gray-500">
                  {i.time} - {i.date}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* JOBS + APPLICANTS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        {/* Recent Jobs */}
        <div className="bg-white p-5 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Recent Job Posts</h3>

          <ul className="space-y-3">
            {recentJobs.map((job, i) => (
              <li
                key={i}
                className="flex justify-between items-center bg-gray-50 p-3 rounded-lg"
              >
                <div>
                  <p className="font-medium">{job.title}</p>
                  <p className="text-xs text-gray-500">
                    {job.applicants} applicants
                  </p>
                </div>

                <span
                  className={`text-xs px-3 py-1 rounded-full ${
                    job.status === "Active"
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {job.status}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Recent Applicants */}
        <div className="bg-white p-5 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Recent Applicants</h3>

          <ul className="space-y-3">
            {recentApplicants.map((a, i) => (
              <li
                key={i}
                className="flex justify-between items-center bg-gray-50 p-3 rounded-lg"
              >
                <div>
                  <p className="font-medium">{a.name}</p>
                  <p className="text-xs text-gray-500">{a.job}</p>
                </div>

                <span
                  className={`text-xs px-3 py-1 rounded-full ${
                    a.status === "Interview"
                      ? "bg-blue-100 text-blue-600"
                      : a.status === "Pending"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-red-100 text-red-600"
                  }`}
                >
                  {a.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EmployerHome;
