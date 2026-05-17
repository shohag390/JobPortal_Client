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
import DashboardHeader from "../DashboardHeader";
import { MdReport } from "react-icons/md";

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
    <div className="px-6 lg:px-7 2xl:px-8">
      {/* HEADER */}
      <DashboardHeader
        title={"Employer Dashboard"}
        subTitle={
          "Manage your hiring process, jobs, and applicants in one place."
        }
      />

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-5 2xl:gap-6">
        {stats.map((item, i) => (
          <div
            key={i}
            className="bg-[#ffff] p-4 lg:p-5 2xl:p-6 companie-card border border-[#cccccc5d] rounded-2xl hover:-translate-y-1 duration-500 cursor-pointer"
          >
            <div className="flex items-start justify-between">
              <div>
                <h2 className="font-medium md:font-semibold lg:font-bold">
                  {item.title}
                </h2>
                <h1 className="text-[16px] md:text-[18px] lg:text-[20px] font-medium md:font-semibold lg:font-bold">
                  {item.value}
                </h1>
                <p className="text-[#64748b] text-[14px] md:text-[16px]">
                  {item.desc}
                </p>
              </div>
              <div
                className={`text-[#ffff] flex items-center justify-center text-[20px] h-11 md:h-12 lg:h-12.5 w-11 md:w-12 lg:w-12.5 rounded-full ${item.color}`}
              >
                {item.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* QUICK ACTION + INTERVIEW */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4 lg:gap-5 2xl:gap-6 py-3 md:py-4 lg:py-6">
        {/* Quick Actions */}
        <div className="bg-[#ffff] p-4 lg:p-5 2xl:p-6 companie-card border border-[#cccccc5d] rounded-2xl">
          <h3 className="text-[16px] md:text-[18px] lg:text-[20px] font-semibold pb-2 md:pb-3 lg:pb-4">
            Quick Actions
          </h3>

          <div className="grid grid-cols-2 gap-3">
            <button className="bg-[#1d4ed8] hover:bg-[#003ad8] duration-500 py-1.5 md:py-2 lg:py-3 px-6 md:px-8 lg:px-10 rounded-full text-[#ffff] text-[14px] md:text-[16px] flex items-center justify-center gap-2">
              <FaPlus /> Post Job
            </button>

            <button className="bg-[#00b2e9] hover:bg-[#008fbb] duration-500 py-1.5 md:py-2 lg:py-3 px-6 md:px-8 lg:px-10 rounded-full text-[#ffff] text-[14px] md:text-[16px] flex items-center justify-center gap-2">
              <FaEye /> View Jobs
            </button>

            <button className="bg-[#00b800] hover:bg-[#009700] duration-500 py-1.5 md:py-2 lg:py-3 px-6 md:px-8 lg:px-10 rounded-full text-[#ffff] text-[14px] md:text-[16px] flex items-center justify-center gap-2">
              <FaBriefcase /> Applicants
            </button>

            <button className="bg-[#fd7608] hover:bg-[#d86100] duration-500 py-1.5 md:py-2 lg:py-3 px-6 md:px-8 lg:px-10 rounded-full text-[#ffff] text-[14px] md:text-[16px] flex items-center justify-center gap-2">
              <MdReport /> Reports
            </button>
          </div>
        </div>

        {/* Interviews */}
        <div className="bg-[#ffff] p-4 lg:p-5 2xl:p-6 companie-card border border-[#cccccc5d] rounded-2xl">
          <h3 className="text-[16px] md:text-[18px] lg:text-[20px] font-semibold pb-2 md:pb-3 lg:pb-4 flex items-center gap-2">
            <FaCalendarAlt /> Today Interviews
          </h3>

          <ul className="space-y-3">
            {interviews.map((i, idx) => (
              <li
                key={idx}
                className="flex justify-between bg-gray-50 p-3 rounded-lg"
              >
                <span className="font-medium md:font-semibold lg:font-bold">
                  {i.name}
                </span>
                <span className="text-[14px] md:text-[16px] text-[#64748b]">
                  {i.time} - {i.date}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* JOBS + APPLICANTS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4 lg:gap-5 2xl:gap-6 pb-3 md:pb-4 lg:pb-6">
        {/* Recent Jobs */}
        <div className="bg-[#ffff] p-4 lg:p-5 2xl:p-6 companie-card border border-[#cccccc5d] rounded-2xl">
          <h3 className="text-[16px] md:text-[18px] lg:text-[20px] font-semibold pb-2 md:pb-3 lg:pb-4">
            Recent Job Posts
          </h3>

          <ul className="space-y-3">
            {recentJobs.map((job, i) => (
              <li
                key={i}
                className="flex justify-between items-center bg-gray-50 p-3 rounded-lg"
              >
                <div>
                  <p className="font-medium md:font-semibold lg:font-bold">
                    {job.title}
                  </p>
                  <p className="text-[14px] md:text-[16px] text-[#64748b]">
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
        <div className="bg-[#ffff] p-4 lg:p-5 2xl:p-6 companie-card border border-[#cccccc5d] rounded-2xl">
          <h3 className="text-[16px] md:text-[18px] lg:text-[20px] font-semibold pb-2 md:pb-3 lg:pb-4">
            Recent Applicants
          </h3>

          <ul className="space-y-3">
            {recentApplicants.map((a, i) => (
              <li
                key={i}
                className="flex justify-between items-center bg-gray-50 p-3 rounded-lg"
              >
                <div>
                  <p className="font-medium md:font-semibold lg:font-bold">
                    {a.name}
                  </p>
                  <p className="text-[14px] md:text-[16px] text-[#64748b]">
                    {a.job}
                  </p>
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
