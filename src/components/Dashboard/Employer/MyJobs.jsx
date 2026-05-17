import React, { useState } from "react";
import { FaSearch, FaEye, FaEdit, FaTrash } from "react-icons/fa";
import DashboardHeader from "../DashboardHeader";

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
    <div className="px-6 lg:px-7 2xl:px-8 pb-7">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 lg:gap-0">
        <DashboardHeader
          title={"My Jobs"}
          subTitle={"Manage all your posted jobs"}
        />

        {/* Search */}
        <div className="relative w-full md:w-80">
          <FaSearch className="absolute top-3 left-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search jobs..."
            className="w-full pl-10 pr-4 py-2 border border-[#cccccc5d] bg-[#cccccc17] focus:outline-0 rounded-lg"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-[#ffff] companie-card border border-[#cccccc5d] rounded-2xl overflow-auto">
        <table className="w-full text-left">
          {/* Head */}
          <thead className="bg-gray-100 text-[15px] lg:text-[16px]">
            <tr>
              <th className="py-6 px-4">Job Title</th>
              <th className="py-6 px-4">Location</th>
              <th className="py-6 px-4">Applicants</th>
              <th className="py-6 px-4">Posted</th>
              <th className="py-6 px-4">Status</th>
              <th className="py-6 px-4 text-center">Actions</th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {filteredJobs.map((job) => (
              <tr
                key={job.id}
                className="border-b border-[#cccccc5d] hover:bg-gray-50"
              >
                {/* Title */}
                <td className="py-5 px-4 font-medium">{job.title}</td>

                {/* Location */}
                <td className="py-5 px-4 text-[#64748b]">{job.location}</td>

                {/* Applicants */}
                <td className="py-5 px-4 text-[#64748b] font-medium">
                  {job.applicants}
                </td>

                {/* Posted */}
                <td className="py-5 px-4 text-gray-600">{job.posted}</td>

                {/* Status */}
                <td className="py-5 px-4">
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
                  <div className="flex justify-center gap-3">
                    <button className="hover:text-blue-500 duration-500">
                      <FaEye />
                    </button>

                    <button className="hover:text-green-500 duration-500">
                      <FaEdit />
                    </button>

                    <button className="hover:text-red-500 duration-500">
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
