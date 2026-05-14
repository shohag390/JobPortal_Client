import React from "react";

const MyApplyJobs = () => {
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

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <h1 className="text-4xl font-bold text-gray-800">My Applied Jobs</h1>

        <p className="text-gray-500 mt-2">
          Manage and track your applied jobs.
        </p>
      </div>

      {/* Table */}
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            {/* Table Head */}
            <thead className="bg-black text-white">
              <tr>
                <th className="px-6 py-5">No</th>
                <th className="px-6 py-5">Company</th>
                <th className="px-6 py-5">Position</th>
                <th className="px-6 py-5">Location</th>
                <th className="px-6 py-5">Salary</th>
                <th className="px-6 py-5">Apply Date</th>
                <th className="px-6 py-5">Status</th>
                <th className="px-6 py-5 text-center">Action</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {appliedJobs.map((job, index) => (
                <tr
                  key={job.id}
                  className="border-b hover:bg-gray-50 transition duration-300"
                >
                  {/* No */}
                  <td className="px-6 py-5 font-medium">{index + 1}</td>

                  {/* Company with Logo */}
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-4">
                      <img
                        src={job.logo}
                        alt={job.company}
                        className="w-12 h-12 rounded-xl object-cover border p-2 bg-white"
                      />

                      <div>
                        <h2 className="font-semibold text-lg">{job.company}</h2>
                      </div>
                    </div>
                  </td>

                  {/* Position */}
                  <td className="px-6 py-5 font-medium">{job.position}</td>

                  {/* Location */}
                  <td className="px-6 py-5">{job.location}</td>

                  {/* Salary */}
                  <td className="px-6 py-5">{job.salary}</td>

                  {/* Apply Date */}
                  <td className="px-6 py-5">{job.applyDate}</td>

                  {/* Status */}
                  <td className="px-6 py-5">
                    <span
                      className={`px-4 py-2 rounded-full text-sm font-semibold
                      
                      ${
                        job.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : ""
                      }

                      ${
                        job.status === "Interview"
                          ? "bg-blue-100 text-blue-700"
                          : ""
                      }

                      ${
                        job.status === "Accepted"
                          ? "bg-green-100 text-green-700"
                          : ""
                      }

                      ${
                        job.status === "Rejected"
                          ? "bg-red-100 text-red-700"
                          : ""
                      }
                    `}
                    >
                      {job.status}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-5">
                    <div className="flex justify-center gap-3">
                      <button className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-xl transition">
                        Details
                      </button>

                      <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl transition">
                        Cancel
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {appliedJobs.length === 0 && (
          <div className="py-20 text-center">
            <h2 className="text-2xl font-bold text-gray-700">
              No Applied Jobs Found
            </h2>

            <p className="text-gray-500 mt-3">
              You haven't applied to any jobs yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyApplyJobs;
