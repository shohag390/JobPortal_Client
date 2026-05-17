import React, { useState } from "react";
import {
  FaBriefcase,
  FaBuilding,
  FaMapMarkerAlt,
  FaMoneyBill,
  FaClock,
  FaUsers,
  FaGlobe,
  FaCertificate,
  FaTools,
} from "react-icons/fa";
import DashboardHeader from "../DashboardHeader";

const SubmitJobs = () => {
  return (
    <div className="px-6 lg:px-7 2xl:px-8">
      <DashboardHeader
        title={"Add Jobs"}
        subTitle={"Innovative, Collaborative, Growth-Focused Team"}
      />
      {/* Form */}
      <form className="flex flex-col gap-3 md:gap-4 lg:gap-5 2xl:gap-6 pb-6">
        {/* Basic Information */}
        <div className="bg-[#ffff] p-4 lg:p-5 2xl:p-6 companie-card border border-[#cccccc5d] rounded-2xl">
          <div className="border-b border-[#64748b28] pb-2 lg:pb-3">
            <h2 className="text-[16px] md:text-[18px] lg:text-[20px] font-semibold flex items-center gap-3">
              <FaBriefcase /> Basic Information
            </h2>
          </div>
          <div className="pt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-5 2xl:gap-6">
            <div className="flex flex-col gap-2">
              <lable className="text-[14px] lg:text-[16px] font-medium">
                Job Title
              </lable>
              <input
                required
                className="border border-[#cccccc5d] bg-[#cccccc17] py-1.5 md:py-2 lg:py-3 focus:outline-0 px-2 lg:px-3 w-full rounded-lg"
                type="text"
                placeholder="Enter Job Title"
              />
            </div>
            <div className="flex flex-col gap-2">
              <lable className="text-[14px] lg:text-[16px] font-medium">
                Company Name
              </lable>
              <input
                required
                className="border border-[#cccccc5d] bg-[#cccccc17] py-1.5 md:py-2 lg:py-3 focus:outline-0 px-2 lg:px-3 w-full rounded-lg"
                type="text"
                placeholder="Enter Company Name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <lable className="text-[14px] lg:text-[16px] font-medium">
                Category
              </lable>
              <input
                required
                className="border border-[#cccccc5d] bg-[#cccccc17] py-1.5 md:py-2 lg:py-3 focus:outline-0 px-2 lg:px-3 w-full rounded-lg"
                type="text"
                placeholder="Enter Category"
              />
            </div>
            <div className="flex flex-col gap-2">
              <lable className="text-[14px] lg:text-[16px] font-medium">
                Coompany Logo
              </lable>
              <input
                required
                className="border border-[#cccccc5d] bg-[#cccccc17] py-1.5 md:py-2 lg:py-3 focus:outline-0 px-2 lg:px-3 w-full rounded-lg"
                type="text"
                placeholder="Enter Coompany Logo URL"
              />
            </div>
            <div className="flex flex-col gap-2">
              <lable className="text-[14px] lg:text-[16px] font-medium">
                Job Type (Full/Part/Contract)
              </lable>
              <input
                required
                className="border border-[#cccccc5d] bg-[#cccccc17] py-1.5 md:py-2 lg:py-3 focus:outline-0 px-2 lg:px-3 w-full rounded-lg"
                type="text"
                placeholder="Enter Job Type"
              />
            </div>
            <div className="flex flex-col gap-2">
              <lable className="text-[14px] lg:text-[16px] font-medium">
                Experience
              </lable>
              <input
                required
                className="border border-[#cccccc5d] bg-[#cccccc17] py-1.5 md:py-2 lg:py-3 focus:outline-0 px-2 lg:px-3 w-full rounded-lg"
                type="text"
                placeholder="Enter Experience"
              />
            </div>
          </div>
        </div>

        {/* Location Information */}
        <div className="bg-[#ffff] p-4 lg:p-5 2xl:p-6 companie-card border border-[#cccccc5d] rounded-2xl">
          <div className="border-b border-[#64748b28] pb-2 lg:pb-3">
            <h2 className="text-[16px] md:text-[18px] lg:text-[20px] font-semibold flex items-center gap-3">
              <FaMapMarkerAlt /> Location Information
            </h2>
          </div>
          <div className="pt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-5 2xl:gap-6">
            <div className="flex flex-col gap-2">
              <lable className="text-[14px] lg:text-[16px] font-medium">
                Location
              </lable>
              <input
                required
                className="border border-[#cccccc5d] bg-[#cccccc17] py-1.5 md:py-2 lg:py-3 focus:outline-0 px-2 lg:px-3 w-full rounded-lg"
                type="text"
                placeholder="Enter Location"
              />
            </div>
            <div className="flex flex-col gap-2">
              <lable className="text-[14px] lg:text-[16px] font-medium">
                Website
              </lable>
              <input
                required
                className="border border-[#cccccc5d] bg-[#cccccc17] py-1.5 md:py-2 lg:py-3 focus:outline-0 px-2 lg:px-3 w-full rounded-lg"
                type="text"
                placeholder="Enter Website URL"
              />
            </div>
            <div className="flex flex-col gap-2">
              <lable className="text-[14px] lg:text-[16px] font-medium">
                Contact Email
              </lable>
              <input
                required
                className="border border-[#cccccc5d] bg-[#cccccc17] py-1.5 md:py-2 lg:py-3 focus:outline-0 px-2 lg:px-3 w-full rounded-lg"
                type="email"
                placeholder="Enter Email"
              />
            </div>
          </div>
        </div>

        {/* Location Information */}
        <div className="bg-[#ffff] p-4 lg:p-5 2xl:p-6 companie-card border border-[#cccccc5d] rounded-2xl">
          <div className="border-b border-[#64748b28] pb-2 lg:pb-3">
            <h2 className="text-[16px] md:text-[18px] lg:text-[20px] font-semibold flex items-center gap-3">
              <FaUsers /> Job Details
            </h2>
          </div>
          <div className="pt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-5 2xl:gap-6">
            <div className="flex flex-col gap-2">
              <lable className="text-[14px] lg:text-[16px] font-medium">
                Vacancy
              </lable>
              <input
                required
                className="border border-[#cccccc5d] bg-[#cccccc17] py-1.5 md:py-2 lg:py-3 focus:outline-0 px-2 lg:px-3 w-full rounded-lg"
                type="number"
                placeholder="Enter Vacancy"
              />
            </div>
            <div className="flex flex-col gap-2">
              <lable className="text-[14px] lg:text-[16px] font-medium">
                Education
              </lable>
              <input
                required
                className="border border-[#cccccc5d] bg-[#cccccc17] py-1.5 md:py-2 lg:py-3 focus:outline-0 px-2 lg:px-3 w-full rounded-lg"
                type="text"
                placeholder="Enter Education"
              />
            </div>
            <div className="flex flex-col gap-2">
              <lable className="text-[14px] lg:text-[16px] font-medium">
                Working Hours
              </lable>
              <input
                required
                className="border border-[#cccccc5d] bg-[#cccccc17] py-1.5 md:py-2 lg:py-3 focus:outline-0 px-2 lg:px-3 w-full rounded-lg"
                type="text"
                placeholder="Enter Working Hours"
              />
            </div>
          </div>
        </div>

        {/* Salary Information */}
        <div className="bg-[#ffff] p-4 lg:p-5 2xl:p-6 companie-card border border-[#cccccc5d] rounded-2xl">
          <div className="border-b border-[#64748b28] pb-2 lg:pb-3">
            <h2 className="text-[16px] md:text-[18px] lg:text-[20px] font-semibold flex items-center gap-3">
              <FaMoneyBill /> Selary Information
            </h2>
          </div>
          <div className="pt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-5 2xl:gap-6">
            <div className="flex flex-col gap-2">
              <lable className="text-[14px] lg:text-[16px] font-medium">
                Salary Min
              </lable>
              <input
                required
                className="border border-[#cccccc5d] bg-[#cccccc17] py-1.5 md:py-2 lg:py-3 focus:outline-0 px-2 lg:px-3 w-full rounded-lg"
                type="number"
                placeholder="Enter Salary Min"
              />
            </div>
            <div className="flex flex-col gap-2">
              <lable className="text-[14px] lg:text-[16px] font-medium">
                Salary Max
              </lable>
              <input
                required
                className="border border-[#cccccc5d] bg-[#cccccc17] py-1.5 md:py-2 lg:py-3 focus:outline-0 px-2 lg:px-3 w-full rounded-lg"
                type="number"
                placeholder="Enter Salary Max"
              />
            </div>
            <div className="flex flex-col gap-2">
              <lable className="text-[14px] lg:text-[16px] font-medium">
                Salary Type
              </lable>
              <input
                required
                className="border border-[#cccccc5d] bg-[#cccccc17] py-1.5 md:py-2 lg:py-3 focus:outline-0 px-2 lg:px-3 w-full rounded-lg"
                type="text"
                placeholder="Enter Salary Type"
              />
            </div>
          </div>
        </div>
        {/* Important Dates */}
        <div className="bg-[#ffff] p-4 lg:p-5 2xl:p-6 companie-card border border-[#cccccc5d] rounded-2xl">
          <div className="border-b border-[#64748b28] pb-2 lg:pb-3">
            <h2 className="text-[16px] md:text-[18px] lg:text-[20px] font-semibold flex items-center gap-3">
              <FaClock /> Important Dates
            </h2>
          </div>
          <div className="pt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-5 2xl:gap-6">
            <div className="flex flex-col gap-2">
              <lable className="text-[14px] lg:text-[16px] font-medium">
                Application Deadline
              </lable>
              <input
                required
                className="border border-[#cccccc5d] bg-[#cccccc17] py-1.5 md:py-2 lg:py-3 focus:outline-0 px-2 lg:px-3 w-full rounded-lg"
                type="date"
              />
            </div>
          </div>
        </div>
        {/* Job Description */}
        <div className="bg-[#ffff] p-4 lg:p-5 2xl:p-6 companie-card border border-[#cccccc5d] rounded-2xl">
          <div className="border-b border-[#64748b28] pb-2 lg:pb-3">
            <h2 className="text-[16px] md:text-[18px] lg:text-[20px] font-semibold flex items-center gap-3">
              <FaBuilding /> Job Description
            </h2>
          </div>
          <div className="pt-4 grid grid-cols-1 gap-3 md:gap-4 lg:gap-5 2xl:gap-6">
            <div className="flex flex-col gap-2">
              <lable className="text-[14px] lg:text-[16px] font-medium">
                Description
              </lable>
              <textarea
                rows={4}
                required
                className="border border-[#cccccc5d] bg-[#cccccc17] py-1.5 md:py-2 lg:py-3 focus:outline-0 px-2 lg:px-3 w-full rounded-lg"
                placeholder="Enter Description"
                type="date"
              />
            </div>
            <div className="flex flex-col gap-2">
              <lable className="text-[14px] lg:text-[16px] font-medium">
                Responsibilities
              </lable>
              <textarea
                rows={4}
                required
                className="border border-[#cccccc5d] bg-[#cccccc17] py-1.5 md:py-2 lg:py-3 focus:outline-0 px-2 lg:px-3 w-full rounded-lg"
                placeholder="Enter Responsibilities"
                type="date"
              />
            </div>
            <div className="flex flex-col gap-2">
              <lable className="text-[14px] lg:text-[16px] font-medium">
                Requirements
              </lable>
              <textarea
                rows={4}
                required
                className="border border-[#cccccc5d] bg-[#cccccc17] py-1.5 md:py-2 lg:py-3 focus:outline-0 px-2 lg:px-3 w-full rounded-lg"
                placeholder="Enter Requirements"
                type="date"
              />
            </div>
          </div>
        </div>
        {/* Skills & Benefits */}
        <div className="bg-[#ffff] p-4 lg:p-5 2xl:p-6 companie-card border border-[#cccccc5d] rounded-2xl">
          <div className="border-b border-[#64748b28] pb-2 lg:pb-3">
            <h2 className="text-[16px] md:text-[18px] lg:text-[20px] font-semibold flex items-center gap-3">
              <FaTools /> Skills & Benefits
            </h2>
          </div>
          <div className="pt-4 grid grid-cols-1 gap-3 md:gap-4 lg:gap-5 2xl:gap-6">
            <div className="flex flex-col gap-2">
              <lable className="text-[14px] lg:text-[16px] font-medium">
                Skills (React, Node, MongoDB...)
              </lable>
              <textarea
                rows={4}
                required
                className="border border-[#cccccc5d] bg-[#cccccc17] py-1.5 md:py-2 lg:py-3 focus:outline-0 px-2 lg:px-3 w-full rounded-lg"
                placeholder="Enter Skills"
                type="date"
              />
            </div>
            <div className="flex flex-col gap-2">
              <lable className="text-[14px] lg:text-[16px] font-medium">
                Benefits
              </lable>
              <textarea
                rows={4}
                required
                className="border border-[#cccccc5d] bg-[#cccccc17] py-1.5 md:py-2 lg:py-3 focus:outline-0 px-2 lg:px-3 w-full rounded-lg"
                placeholder="Enter Benefits"
                type="date"
              />
            </div>
            <div className="flex flex-col gap-2">
              <lable className="text-[14px] lg:text-[16px] font-medium">
                Languages
              </lable>
              <textarea
                rows={4}
                required
                className="border border-[#cccccc5d] bg-[#cccccc17] py-1.5 md:py-2 lg:py-3 focus:outline-0 px-2 lg:px-3 w-full rounded-lg"
                placeholder="Enter Languages"
                type="date"
              />
            </div>
          </div>
        </div>
        <button className="bg-[#1d4ed8] hover:bg-[#003ad8] duration-500 py-1.5 md:py-2 lg:py-3 px-6 md:px-8 lg:px-10 rounded-lg w-50 text-[#ffff] text-[14px] md:text-[16px]">
          Publish Job
        </button>
      </form>
    </div>
  );
};

export default SubmitJobs;
