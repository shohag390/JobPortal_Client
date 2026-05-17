import React, { useState } from "react";
import { FaSearch, FaEye, FaCheck, FaTimes } from "react-icons/fa";
import DashboardHeader from "../DashboardHeader";

const JobApplicants = () => {
  const [search, setSearch] = useState("");

  const applicants = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      jobTitle: "Frontend Developer",
      experience: "2 Years",
      status: "Pending",
      appliedDate: "10 May 2026",
    },
    {
      id: 2,
      name: "Sarah Khan",
      email: "sarah@example.com",
      jobTitle: "React Developer",
      experience: "3 Years",
      status: "Interview",
      appliedDate: "08 May 2026",
    },
    {
      id: 3,
      name: "Rahim Uddin",
      email: "rahim@example.com",
      jobTitle: "Backend Developer",
      experience: "4 Years",
      status: "Rejected",
      appliedDate: "05 May 2026",
    },
    {
      id: 4,
      name: "Emily Rose",
      email: "emily@example.com",
      jobTitle: "UI/UX Designer",
      experience: "1 Year",
      status: "Hired",
      appliedDate: "02 May 2026",
    },
  ];

  const filteredApplicants = applicants.filter(
    (a) =>
      a.name.toLowerCase().includes(search.toLowerCase()) ||
      a.jobTitle.toLowerCase().includes(search.toLowerCase()) ||
      a.email.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="px-6 lg:px-7 2xl:px-8 pb-7">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 lg:gap-0">
        <DashboardHeader
          title={"Job Applicants"}
          subTitle={"Manage all applicants for your job posts"}
        />

        {/* Search */}
        <div className="relative w-full md:w-80">
          <FaSearch className="absolute top-3 left-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search applicants..."
            className="w-full pl-10 pr-4 py-2 border border-[#cccccc5d] bg-[#cccccc17] focus:outline-0  rounded-lg"
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
              <th className="py-6 px-4">Name</th>
              <th className="py-6 px-4">Email</th>
              <th className="py-6 px-4">Job Title</th>
              <th className="py-6 px-4">Applied Date</th>
              <th className="py-6 px-4">Status</th>
              <th className="py-6 px-4 text-center">Actions</th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {filteredApplicants.map((a) => (
              <tr
                key={a.id}
                className="border-b border-[#cccccc5d] hover:bg-gray-50"
              >
                {/* Name */}
                <td className="py-5 px-4 font-medium">{a.name}</td>

                {/* Email */}
                <td className="py-5 px-4 text-[#64748b]">{a.email}</td>

                {/* Job Title */}
                <td className="py-5 px-4 text-[#64748b]">{a.jobTitle}</td>

                {/* Date */}
                <td className="py-5 px-4 text-[#64748b]">{a.appliedDate}</td>

                {/* Status */}
                <td className="py-5 px-4">
                  <span
                    className={`px-3 py-1 text-xs rounded-full font-medium
                    ${a.status === "Pending" && "bg-yellow-100 text-yellow-700"}
                    ${a.status === "Interview" && "bg-blue-100 text-blue-700"}
                    ${a.status === "Rejected" && "bg-red-100 text-red-700"}
                    ${a.status === "Hired" && "bg-green-100 text-green-700"}
                  `}
                  >
                    {a.status}
                  </span>
                </td>

                {/* Actions */}
                <td className="p-3">
                  <div className="flex justify-center gap-3 text-gray-600">
                    <button className="hover:text-blue-500">
                      <FaEye />
                    </button>

                    <button className="hover:text-green-500">
                      <FaCheck />
                    </button>

                    <button className="hover:text-red-500">
                      <FaTimes />
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {filteredApplicants.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center p-6 text-gray-500">
                  No applicants found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobApplicants;
