import React, { useState } from "react";
import { FaSearch, FaEye, FaEdit, FaTrash } from "react-icons/fa";

const MyJobs = () => {
  const [search, setSearch] = useState("");

  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "TechCorp Ltd",
      location: "Remote",
      type: "Full Time",
      applicants: 45,
      status: "Active",
      posted: "10 May 2026",
    },
    {
      id: 2,
      title: "React Developer",
      company: "InnovateX",
      location: "USA",
      type: "Contract",
      applicants: 32,
      status: "Active",
      posted: "08 May 2026",
    },
    {
      id: 3,
      title: "Backend Developer",
      company: "CloudSoft",
      location: "Canada",
      type: "Full Time",
      applicants: 18,
      status: "Closed",
      posted: "05 May 2026",
    },
    {
      id: 4,
      title: "UI/UX Designer",
      company: "DesignHub",
      location: "Remote",
      type: "Internship",
      applicants: 60,
      status: "Draft",
      posted: "02 May 2026",
    },
  ];

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="px-6 lg:px-8 min-h-screen bg-gray-50">
      {/* Header */}
      <div className="py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">My Jobs</h1>
          <p className="text-gray-500">Manage all your posted jobs</p>
        </div>

        {/* Search */}
        <div className="relative w-full md:w-80">
          <FaSearch className="absolute top-3 left-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search jobs..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white shadow-sm rounded-xl overflow-hidden">
        <table className="w-full text-left">
          {/* Head */}
          <thead className="bg-gray-100 text-gray-600 text-sm">
            <tr>
              <th className="p-3">Job Title</th>
              <th className="p-3">Company</th>
              <th className="p-3">Location</th>
              <th className="p-3">Type</th>
              <th className="p-3">Applicants</th>
              <th className="p-3">Posted</th>
              <th className="p-3">Status</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {filteredJobs.map((job) => (
              <tr key={job.id} className="border-b hover:bg-gray-50">
                {/* Title */}
                <td className="p-3 font-medium text-gray-800">{job.title}</td>

                {/* Company */}
                <td className="p-3 text-gray-600">{job.company}</td>

                {/* Location */}
                <td className="p-3">{job.location}</td>

                {/* Type */}
                <td className="p-3">
                  <span className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-600">
                    {job.type}
                  </span>
                </td>

                {/* Applicants */}
                <td className="p-3 font-medium">{job.applicants}</td>

                {/* Posted */}
                <td className="p-3 text-gray-600">{job.posted}</td>

                {/* Status */}
                <td className="p-3">
                  <span
                    className={`px-3 py-1 text-xs rounded-full font-medium
                    ${
                      job.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : job.status === "Closed"
                          ? "bg-red-100 text-red-600"
                          : "bg-yellow-100 text-yellow-600"
                    }
                  `}
                  >
                    {job.status}
                  </span>
                </td>

                {/* Actions */}
                <td className="p-3">
                  <div className="flex justify-center gap-3 text-gray-600">
                    <button className="hover:text-blue-500">
                      <FaEye />
                    </button>

                    <button className="hover:text-green-500">
                      <FaEdit />
                    </button>

                    <button className="hover:text-red-500">
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {filteredJobs.length === 0 && (
              <tr>
                <td colSpan="8" className="text-center p-6 text-gray-500">
                  No jobs found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyJobs;
