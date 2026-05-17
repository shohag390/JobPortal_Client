import React, { useState } from "react";
import { FaSearch, FaEye, FaTimes } from "react-icons/fa";
import DashboardHeader from "../DashboardHeader";

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
    <div className="px-6 lg:px-7 2xl:px-8 pb-7">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 lg:gap-0">
        <DashboardHeader
          title={"My Applied Jobs"}
          subTitle={"Track your job applications easily"}
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
              <th className="py-6 px-4">Position</th>
              <th className="py-6 px-4">Location</th>
              <th className="py-6 px-4">Salary</th>
              <th className="py-6 px-4">Apply Date</th>
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
                {/* Position */}
                <td className="py-5 px-4 font-medium">{job.position}</td>

                {/* Location */}
                <td className="py-5 px-4 text-[#64748b]">{job.location}</td>

                {/* Salary */}
                <td className="py-5 px-4 text-[#64748b] font-medium">
                  {job.salary}
                </td>

                {/* Date */}
                <td className="py-5 px-4 text-gray-600">{job.applyDate}</td>

                {/* Status */}
                <td className="py-5 px-4">
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
                  <div className="flex justify-center gap-3">
                    <button className="hover:text-blue-500 duration-500">
                      <FaEye />
                    </button>

                    <button className="hover:text-red-500 duration-500">
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
