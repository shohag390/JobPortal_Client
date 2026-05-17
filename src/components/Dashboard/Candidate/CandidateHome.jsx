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
import DashboardHeader from "../DashboardHeader";
import { Link } from "react-router";

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
    <div className="px-6 lg:px-7 2xl:px-8">
      {/* HEADER */}
      <DashboardHeader
        title={"Candidate Dashboard"}
        subTitle={"Welcome back Track your applications and career progress."}
      />

      {/*  STATS  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-5 2xl:gap-6 pb-3 md:pb-4 lg:pb-5 2xl:pb-6">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="bg-[#ffff] p-4 lg:p-5 2xl:p-6 companie-card border border-[#cccccc5d] rounded-2xl hover:-translate-y-1 duration-500 cursor-pointer"
          >
            <div className="flex items-start justify-between">
              <div>
                <h2 className="font-medium md:font-semibold lg:font-bold">
                  {stat.title}
                </h2>

                <h1 className="text-[16px] md:text-[18px] lg:text-[20px] font-medium md:font-semibold lg:font-bold">
                  {stat.value}
                </h1>
              </div>

              <div
                className={`${stat.bg} ${stat.text} text-[#ffff] flex items-center justify-center text-[20px] h-11 md:h-12 lg:h-12.5 w-11 md:w-12 lg:w-12.5 rounded-full`}
              >
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MAIN GRID */}
      <div className="grid lg:grid-cols-3 gap-3 md:gap-4 lg:gap-5 2xl:gap-6 pb-3 md:pb-4 lg:pb-5 2xl:pb-6">
        {/*  RECENT APPLICATIONS */}
        <div className="lg:col-span-2 bg-[#ffff] p-4 lg:p-5 2xl:p-6 companie-card border border-[#cccccc5d] rounded-2xl">
          <div className="border-b border-[#cccccc5d]">
            <h2 className="text-[16px] md:text-[18px] lg:text-[20px] font-semibold pb-2 md:pb-3 lg:pb-4">
              Recent Applications
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-3 md:gap-4 lg:gap-5 2xl:gap-6 pt-6">
            {recentApplications.map((job) => (
              <div
                key={job.id}
                className="p-4 lg:p-5 2xl:p-6 border border-[#cccccc5d] rounded-2xl"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  {/* Left */}
                  <div>
                    <h3 className="font-medium md:font-semibold lg:font-bold">
                      {job.position}
                    </h3>

                    <p className="text-[#64748b] text-[14px] md:text-[16px] pt-2">
                      {job.company}
                    </p>

                    <div className="flex items-center gap-2 mt-3 text-[#64748b] text-[14px] md:text-[16px]">
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

        {/* RIGHT SIDEBAR  */}
        <div className="">
          {/* Profile Card */}
          <div className="bg-[#ffff] p-4 lg:p-5 2xl:p-6 companie-card border border-[#cccccc5d] rounded-2xl">
            <div className="flex flex-col items-center text-center">
              <img
                src="https://i.ibb.co.com/Jw5qDrk5/user2.jpg"
                alt="profile"
                className="w-28 h-28 rounded-full object-cover border-4 border-[#cccccc5d]"
              />

              <h2 className="text-[16px] md:text-[18px] lg:text-[20px] font-medium md:font-semibold lg:font-bold">
                Md Shohag Ali
              </h2>

              <p className="text-[#64748b] text-[14px] md:text-[16px] pb-4">
                Frontend Developer
              </p>

              <button className="bg-[#1d4fd841] hover:bg-[#003ad8] duration-500 py-1.5 lg:py-2 px-5 lg:px-6 rounded-full text-[#003ad8] hover:text-[#ffff] text-[14px] md:text-[16px]">
                View Profile
              </button>
            </div>
          </div>

          {/*  JOB PROGRESS  */}
          <div className="bg-[#ffff] p-4 lg:p-5 2xl:p-6 companie-card border border-[#cccccc5d] rounded-2xl mt-3 md:mt-4 lg:mt-5 2xl:mt-6 pt-6">
            <div className="border-b border-[#cccccc5d] pb-4 mb-6">
              <h2 className="text-[16px] md:text-[18px] lg:text-[20px] font-semibold">
                Job Application Progress
              </h2>
            </div>

            <div className="space-y-6">
              {/* Progress Item */}
              <div>
                <div className="flex justify-between mb-2">
                  <h3 className="font-medium md:font-semibold lg:font-bold">
                    Frontend Developer
                  </h3>

                  <span className="text-[#64748b] text-[14px] md:text-[16px]">
                    80%
                  </span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-[#bc92ff] h-3 rounded-full w-[80%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <h3 className="font-medium md:font-semibold lg:font-bold">
                    MERN Stack Developer
                  </h3>

                  <span className="text-[#64748b] text-[14px] md:text-[16px]">
                    60%
                  </span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-[#0098a3] h-3 rounded-full w-[60%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <h3 className="font-medium md:font-semibold lg:font-bold">
                    React Developer
                  </h3>

                  <span className="text-[#64748b] text-[14px] md:text-[16px]">
                    40%
                  </span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-[#f3a600] h-3 rounded-full w-[40%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateHome;
