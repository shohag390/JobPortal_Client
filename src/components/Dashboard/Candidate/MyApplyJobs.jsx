import React, { useState } from "react";
import { FaSearch, FaEye, FaTimes } from "react-icons/fa";

const MyApplyJobs = () => {
  const [search, setSearch] = useState("");

  const appliedJobs = [
    {
      id: 1,
      company: "Google",
      logo: "https://cdn-icons-png.flaticon.com/512/300/300221.png",
      position: "Frontend Developer",
      location: "Remote",
      salary: "$2500/month",
      status: "Pending",
      applyDate: "10 May 2026",
    },
    {
      id: 2,
      company: "Microsoft",
      logo: "https://cdn-icons-png.flaticon.com/512/732/732221.png",
      position: "React Developer",
      location: "USA",
      salary: "$3200/month",
      status: "Interview",
      applyDate: "08 May 2026",
    },
    {
      id: 3,
      company: "Netflix",
      logo: "https://cdn-icons-png.flaticon.com/512/5977/5977590.png",
      position: "MERN Stack Developer",
      location: "Canada",
      salary: "$4000/month",
      status: "Rejected",
      applyDate: "05 May 2026",
    },
    {
      id: 4,
      company: "Amazon",
      logo: "https://cdn-icons-png.flaticon.com/512/5968/5968870.png",
      position: "Junior Web Developer",
      location: "Remote",
      salary: "$2000/month",
      status: "Accepted",
      applyDate: "02 May 2026",
    },
  ];

  const filteredJobs = appliedJobs.filter(
    (job) =>
      job.company.toLowerCase().includes(search.toLowerCase()) ||
      job.position.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="px-6 lg:px-8 min-h-screen bg-gray-50">
      {/* Header */}
      <div className="py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">My Applied Jobs</h1>
          <p className="text-gray-500">Track your job applications easily</p>
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
              <th className="p-3">Company</th>
              <th className="p-3">Position</th>
              <th className="p-3">Location</th>
              <th className="p-3">Salary</th>
              <th className="p-3">Apply Date</th>
              <th className="p-3">Status</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {filteredJobs.map((job) => (
              <tr key={job.id} className="border-b hover:bg-gray-50">
                {/* Company */}
                <td className="p-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={job.logo}
                      alt={job.company}
                      className="w-10 h-10 rounded-lg border bg-white p-1"
                    />
                    <span className="font-medium">{job.company}</span>
                  </div>
                </td>

                {/* Position */}
                <td className="p-3 text-gray-700">{job.position}</td>

                {/* Location */}
                <td className="p-3 text-gray-600">{job.location}</td>

                {/* Salary */}
                <td className="p-3">{job.salary}</td>

                {/* Date */}
                <td className="p-3 text-gray-600">{job.applyDate}</td>

                {/* Status */}
                <td className="p-3">
                  <span
                    className={`px-3 py-1 text-xs rounded-full font-medium
                    ${
                      job.status === "Pending" &&
                      "bg-yellow-100 text-yellow-700"
                    }
                    ${job.status === "Interview" && "bg-blue-100 text-blue-700"}
                    ${
                      job.status === "Accepted" && "bg-green-100 text-green-700"
                    }
                    ${job.status === "Rejected" && "bg-red-100 text-red-700"}
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

                    <button className="hover:text-red-500">
                      <FaTimes />
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {filteredJobs.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center p-6 text-gray-500">
                  No applied jobs found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplyJobs;
