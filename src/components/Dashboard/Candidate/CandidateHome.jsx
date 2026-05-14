import React from "react";
import {
  FaBriefcase,
  FaFileAlt,
  FaCheckCircle,
  FaClock,
  FaUserTie,
  FaChartLine,
  FaMapMarkerAlt,
} from "react-icons/fa";

const CandidateHome = () => {
  const stats = [
    {
      id: 1,
      title: "Applied Jobs",
      value: 24,
      icon: <FaBriefcase />,
      bg: "bg-blue-100",
      text: "text-blue-600",
    },

    {
      id: 2,
      title: "Interview Schedule",
      value: 8,
      icon: <FaUserTie />,
      bg: "bg-purple-100",
      text: "text-purple-600",
    },

    {
      id: 3,
      title: "Resume Uploaded",
      value: 3,
      icon: <FaFileAlt />,
      bg: "bg-green-100",
      text: "text-green-600",
    },

    {
      id: 4,
      title: "Job Accepted",
      value: 2,
      icon: <FaCheckCircle />,
      bg: "bg-orange-100",
      text: "text-orange-600",
    },
  ];

  const recentApplications = [
    {
      id: 1,
      company: "Google",
      position: "Frontend Developer",
      location: "Remote",
      status: "Pending",
    },

    {
      id: 2,
      company: "Microsoft",
      position: "React Developer",
      location: "USA",
      status: "Interview",
    },

    {
      id: 3,
      company: "Netflix",
      position: "MERN Stack Developer",
      location: "Canada",
      status: "Accepted",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f4f5f9] p-6">
      {/* ================= HEADER ================= */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold text-[#0f3d2e]">
            Candidate Dashboard
          </h1>

          <p className="text-gray-500 mt-2">
            Welcome back 👋 Track your applications and career progress.
          </p>
        </div>

        <button className="mt-4 md:mt-0 bg-[#0f3d2e] hover:bg-[#0b2e22] text-white px-6 py-3 rounded-2xl font-medium transition">
          Apply New Job
        </button>
      </div>

      {/* ================= STATS ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-lg transition duration-300"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">{stat.title}</p>

                <h2 className="text-4xl font-bold mt-3 text-gray-800">
                  {stat.value}
                </h2>
              </div>

              <div
                className={`${stat.bg} ${stat.text} w-16 h-16 rounded-2xl flex items-center justify-center text-3xl`}
              >
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ================= MAIN GRID ================= */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* ================= RECENT APPLICATIONS ================= */}
        <div className="lg:col-span-2 bg-white rounded-3xl shadow-sm p-6">
          <div className="flex justify-between items-center border-b pb-4 mb-6">
            <h2 className="text-2xl font-semibold text-[#0f3d2e]">
              Recent Applications
            </h2>

            <button className="text-[#0f3d2e] font-medium hover:underline">
              View All
            </button>
          </div>

          <div className="space-y-5">
            {recentApplications.map((job) => (
              <div
                key={job.id}
                className="border border-gray-100 rounded-2xl p-5 hover:shadow-md transition duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  {/* Left */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {job.position}
                    </h3>

                    <p className="text-gray-500 mt-1">{job.company}</p>

                    <div className="flex items-center gap-2 mt-3 text-gray-500">
                      <FaMapMarkerAlt />
                      <span>{job.location}</span>
                    </div>
                  </div>

                  {/* Right */}
                  <div>
                    <span
                      className={`px-5 py-2 rounded-full text-sm font-medium
                      
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
                    `}
                    >
                      {job.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= RIGHT SIDEBAR ================= */}
        <div className="space-y-8">
          {/* Profile Card */}
          <div className="bg-white rounded-3xl shadow-sm p-6">
            <div className="flex flex-col items-center text-center">
              <img
                src="https://i.ibb.co/7QpKsCX/avatar.png"
                alt="profile"
                className="w-28 h-28 rounded-full object-cover border-4 border-[#0f3d2e]"
              />

              <h2 className="text-2xl font-bold mt-4 text-[#0f3d2e]">
                Md Shohag Ali
              </h2>

              <p className="text-gray-500 mt-1">Frontend Developer</p>

              <button className="mt-5 bg-[#0f3d2e] hover:bg-[#0b2e22] text-white px-6 py-3 rounded-2xl transition">
                View Profile
              </button>
            </div>
          </div>

          {/* Activity */}
          <div className="bg-white rounded-3xl shadow-sm p-6">
            <div className="flex items-center gap-3 border-b pb-4 mb-6">
              <FaChartLine className="text-[#0f3d2e] text-2xl" />

              <h2 className="text-2xl font-semibold text-[#0f3d2e]">
                Activity
              </h2>
            </div>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 text-green-600 p-3 rounded-xl">
                  <FaCheckCircle />
                </div>

                <div>
                  <h3 className="font-semibold">Resume Uploaded</h3>

                  <p className="text-sm text-gray-500">2 hours ago</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-yellow-100 text-yellow-600 p-3 rounded-xl">
                  <FaClock />
                </div>

                <div>
                  <h3 className="font-semibold">Interview Scheduled</h3>

                  <p className="text-sm text-gray-500">Yesterday</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 text-blue-600 p-3 rounded-xl">
                  <FaBriefcase />
                </div>

                <div>
                  <h3 className="font-semibold">Applied for Google</h3>

                  <p className="text-sm text-gray-500">3 days ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= JOB PROGRESS ================= */}
      <div className="bg-white rounded-3xl shadow-sm p-6 mt-8">
        <div className="flex justify-between items-center border-b pb-4 mb-6">
          <h2 className="text-2xl font-semibold text-[#0f3d2e]">
            Job Application Progress
          </h2>

          <button className="text-[#0f3d2e] hover:underline">
            View Reports
          </button>
        </div>

        <div className="space-y-6">
          {/* Progress Item */}
          <div>
            <div className="flex justify-between mb-2">
              <h3 className="font-medium">Frontend Developer</h3>

              <span className="text-sm text-gray-500">80%</span>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-green-500 h-3 rounded-full w-[80%]"></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <h3 className="font-medium">MERN Stack Developer</h3>

              <span className="text-sm text-gray-500">60%</span>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-blue-500 h-3 rounded-full w-[60%]"></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <h3 className="font-medium">React Developer</h3>

              <span className="text-sm text-gray-500">40%</span>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-yellow-500 h-3 rounded-full w-[40%]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateHome;
