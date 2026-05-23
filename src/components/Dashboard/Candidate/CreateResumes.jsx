import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGlobe,
  FaLinkedin,
  FaGithub,
  FaGraduationCap,
  FaBriefcase,
  FaProjectDiagram,
  FaLanguage,
  FaCertificate,
  FaUsers,
} from "react-icons/fa";
import DashboardHeader from "../DashboardHeader";

const CreateResumes = () => {
  return (
    <div className="px-6 lg:px-7 2xl:px-8">
      <DashboardHeader
        title={"Create Resume"}
        subTitle={"Innovative, Collaborative, Growth-Focused Team"}
      />

      {/* Form */}
      <form className="flex flex-col gap-3 md:gap-4 lg:gap-5 2xl:gap-6 pb-6">
        {/* Basic Information */}
        <div className="bg-[#ffff] p-4 lg:p-5 2xl:p-6 companie-card border border-[#cccccc5d] rounded-2xl">
          <div className="border-b border-[#64748b28] pb-2 lg:pb-3">
            <h2 className="text-[16px] md:text-[18px] lg:text-[20px] font-semibold flex items-center gap-3">
              <FaUser /> Personal Information
            </h2>
          </div>
          <div className="pt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-5 2xl:gap-6">
            {/* Full Name */}
            <div className="flex flex-col gap-2">
              <lable className="text-[14px] lg:text-[16px] font-medium">
                Full Name
              </lable>
              <input
                required
                className="border border-[#cccccc5d] bg-[#cccccc17] py-1.5 md:py-2 lg:py-3 focus:outline-0 px-2 lg:px-3 w-full rounded-lg"
                type="text"
                placeholder="Enter Your Full Name"
              />
            </div>
            {/* Email Address */}
            <div className="flex flex-col gap-2">
              <lable className="text-[14px] lg:text-[16px] font-medium">
                Email Address
              </lable>
              <input
                required
                className="border border-[#cccccc5d] bg-[#cccccc17] py-1.5 md:py-2 lg:py-3 focus:outline-0 px-2 lg:px-3 w-full rounded-lg"
                type="email"
                placeholder="Enter Your Email"
              />
            </div>
            {/* Phone Number */}
            <div className="flex flex-col gap-2">
              <lable className="text-[14px] lg:text-[16px] font-medium">
                Phone Number
              </lable>
              <input
                required
                className="border border-[#cccccc5d] bg-[#cccccc17] py-1.5 md:py-2 lg:py-3 focus:outline-0 px-2 lg:px-3 w-full rounded-lg"
                type="number"
                placeholder="Enter Your Phone"
              />
            </div>
            {/* Address */}
            <div className="flex flex-col gap-2">
              <lable className="text-[14px] lg:text-[16px] font-medium">
                Address
              </lable>
              <input
                required
                className="border border-[#cccccc5d] bg-[#cccccc17] py-1.5 md:py-2 lg:py-3 focus:outline-0 px-2 lg:px-3 w-full rounded-lg"
                type="text"
                placeholder="Enter Your Address"
              />
            </div>
            {/* City */}
            <div className="flex flex-col gap-2">
              <lable className="text-[14px] lg:text-[16px] font-medium">
                City
              </lable>
              <input
                required
                className="border border-[#cccccc5d] bg-[#cccccc17] py-1.5 md:py-2 lg:py-3 focus:outline-0 px-2 lg:px-3 w-full rounded-lg"
                type="text"
                placeholder="Enter Your City"
              />
            </div>
            {/* Country */}
            <div className="flex flex-col gap-2">
              <lable className="text-[14px] lg:text-[16px] font-medium">
                Country
              </lable>
              <input
                required
                className="border border-[#cccccc5d] bg-[#cccccc17] py-1.5 md:py-2 lg:py-3 focus:outline-0 px-2 lg:px-3 w-full rounded-lg"
                type="text"
                placeholder="Enter Your Country"
              />
            </div>
            {/* Postal Code */}
            <div className="flex flex-col gap-2">
              <lable className="text-[14px] lg:text-[16px] font-medium">
                Postal Code
              </lable>
              <input
                required
                className="border border-[#cccccc5d] bg-[#cccccc17] py-1.5 md:py-2 lg:py-3 focus:outline-0 px-2 lg:px-3 w-full rounded-lg"
                type="number"
                placeholder="Enter Your Postal Code"
              />
            </div>
            {/* Portfolio Website */}
            <div className="flex flex-col gap-2">
              <lable className="text-[14px] lg:text-[16px] font-medium">
                Portfolio Website
              </lable>
              <input
                required
                className="border border-[#cccccc5d] bg-[#cccccc17] py-1.5 md:py-2 lg:py-3 focus:outline-0 px-2 lg:px-3 w-full rounded-lg"
                type="text"
                placeholder="Enter Your Portfolio Website"
              />
            </div>
            {/* Linkedin Profile */}
            <div className="flex flex-col gap-2">
              <lable className="text-[14px] lg:text-[16px] font-medium">
                Linkedin Profile
              </lable>
              <input
                required
                className="border border-[#cccccc5d] bg-[#cccccc17] py-1.5 md:py-2 lg:py-3 focus:outline-0 px-2 lg:px-3 w-full rounded-lg"
                type="text"
                placeholder="Enter Your Linkedin Profile"
              />
            </div>
            {/* GitHub Profile */}
            <div className="flex flex-col gap-2">
              <lable className="text-[14px] lg:text-[16px] font-medium">
                GitHub Profile
              </lable>
              <input
                required
                className="border border-[#cccccc5d] bg-[#cccccc17] py-1.5 md:py-2 lg:py-3 focus:outline-0 px-2 lg:px-3 w-full rounded-lg"
                type="text"
                placeholder="Enter Your GitHub Profile"
              />
            </div>
          </div>
        </div>

        {/* Career Information */}
        <div className="bg-[#ffff] p-4 lg:p-5 2xl:p-6 companie-card border border-[#cccccc5d] rounded-2xl">
          <div className="border-b border-[#64748b28] pb-2 lg:pb-3">
            <h2 className="text-[16px] md:text-[18px] lg:text-[20px] font-semibold flex items-center gap-3">
              <FaBriefcase /> Career Information
            </h2>
          </div>
          <div className="pt-4 grid grid-cols-1 gap-3 md:gap-4 lg:gap-5 2xl:gap-6">
            {/* Job Title */}
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
            {/* Professional Summary */}
            <div className="flex flex-col gap-2">
              <lable className="text-[14px] lg:text-[16px] font-medium">
                Website
              </lable>
              <textarea
                rows={4}
                required
                className="border border-[#cccccc5d] bg-[#cccccc17] py-1.5 md:py-2 lg:py-3 focus:outline-0 px-2 lg:px-3 w-full rounded-lg"
                placeholder="Enter Professional Summary"
              />
            </div>
            {/* Skills */}
            <div className="flex flex-col gap-2">
              <lable className="text-[14px] lg:text-[16px] font-medium">
                Skills
              </lable>
              <textarea
                rows={4}
                required
                className="border border-[#cccccc5d] bg-[#cccccc17] py-1.5 md:py-2 lg:py-3 focus:outline-0 px-2 lg:px-3 w-full rounded-lg"
                type="email"
                placeholder="HTML, CSS, JavaScript, React..."
              />
            </div>
          </div>
        </div>

        {/* Education Information */}
        <div className="bg-[#ffff] p-4 lg:p-5 2xl:p-6 companie-card border border-[#cccccc5d] rounded-2xl">
          <div className="border-b border-[#64748b28] pb-2 lg:pb-3">
            <h2 className="text-[16px] md:text-[18px] lg:text-[20px] font-semibold flex items-center gap-3">
              <FaGraduationCap /> Education
            </h2>
          </div>
          <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 lg:gap-5 2xl:gap-6">
            {/* Institute Name */}
            <div className="flex flex-col gap-2">
              <lable className="text-[14px] lg:text-[16px] font-medium">
                Institute Name
              </lable>
              <input
                required
                className="border border-[#cccccc5d] bg-[#cccccc17] py-1.5 md:py-2 lg:py-3 focus:outline-0 px-2 lg:px-3 w-full rounded-lg"
                type="number"
                placeholder="Enter Your Institute Name"
              />
            </div>
            {/* Degree */}
            <div className="flex flex-col gap-2">
              <lable className="text-[14px] lg:text-[16px] font-medium">
                Degree
              </lable>
              <input
                required
                className="border border-[#cccccc5d] bg-[#cccccc17] py-1.5 md:py-2 lg:py-3 focus:outline-0 px-2 lg:px-3 w-full rounded-lg"
                type="text"
                placeholder="Your Degree"
              />
            </div>
            {/* Field of Study */}
            <div className="flex flex-col gap-2">
              <lable className="text-[14px] lg:text-[16px] font-medium">
                Field of Study
              </lable>
              <input
                required
                className="border border-[#cccccc5d] bg-[#cccccc17] py-1.5 md:py-2 lg:py-3 focus:outline-0 px-2 lg:px-3 w-full rounded-lg"
                type="text"
                placeholder="Field of Study"
              />
            </div>
            {/* Education Start Date */}
            <div className="flex flex-col gap-2">
              <lable className="text-[14px] lg:text-[16px] font-medium">
                Education Start Date
              </lable>
              <input
                required
                className="border border-[#cccccc5d] bg-[#cccccc17] py-1.5 md:py-2 lg:py-3 focus:outline-0 px-2 lg:px-3 w-full rounded-lg"
                type="date"
              />
            </div>
            {/* Education End Date */}
            <div className="flex flex-col gap-2">
              <lable className="text-[14px] lg:text-[16px] font-medium">
                Education End Date
              </lable>
              <input
                required
                className="border border-[#cccccc5d] bg-[#cccccc17] py-1.5 md:py-2 lg:py-3 focus:outline-0 px-2 lg:px-3 w-full rounded-lg"
                type="date"
              />
            </div>
          </div>
        </div>

        {/* Work Exprience */}
        <div className="bg-[#ffff] p-4 lg:p-5 2xl:p-6 companie-card border border-[#cccccc5d] rounded-2xl">
          <div className="border-b border-[#64748b28] pb-2 lg:pb-3">
            <h2 className="text-[16px] md:text-[18px] lg:text-[20px] font-semibold flex items-center gap-3">
              <FaBriefcase /> Work Experience
            </h2>
          </div>
          <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 lg:gap-5 2xl:gap-6">
            {/* Company Name */}
            <div className="flex flex-col gap-2">
              <lable className="text-[14px] lg:text-[16px] font-medium">
                Company Name
              </lable>
              <input
                required
                className="border border-[#cccccc5d] bg-[#cccccc17] py-1.5 md:py-2 lg:py-3 focus:outline-0 px-2 lg:px-3 w-full rounded-lg"
                type="text"
                placeholder="Company Name"
              />
            </div>
            {/* Position */}
            <div className="flex flex-col gap-2">
              <lable className="text-[14px] lg:text-[16px] font-medium">
                Position
              </lable>
              <input
                required
                className="border border-[#cccccc5d] bg-[#cccccc17] py-1.5 md:py-2 lg:py-3 focus:outline-0 px-2 lg:px-3 w-full rounded-lg"
                type="text"
                placeholder="Position"
              />
            </div>
            {/* Start Date */}
            <div className="flex flex-col gap-2">
              <lable className="text-[14px] lg:text-[16px] font-medium">
                Start Date
              </lable>
              <input
                required
                className="border border-[#cccccc5d] bg-[#cccccc17] py-1.5 md:py-2 lg:py-3 focus:outline-0 px-2 lg:px-3 w-full rounded-lg"
                type="date"
              />
            </div>
            {/* End Date */}
            <div className="flex flex-col gap-2">
              <lable className="text-[14px] lg:text-[16px] font-medium">
                End Date
              </lable>
              <input
                required
                className="border border-[#cccccc5d] bg-[#cccccc17] py-1.5 md:py-2 lg:py-3 focus:outline-0 px-2 lg:px-3 w-full rounded-lg"
                type="date"
              />
            </div>
            {/* Responsibilities */}
            <div className="flex flex-col gap-2 col-span-2">
              <lable className="text-[14px] lg:text-[16px] font-medium">
                Responsibilities
              </lable>
              <textarea
                rows={4}
                required
                className="border border-[#cccccc5d] bg-[#cccccc17] py-1.5 md:py-2 lg:py-3 focus:outline-0 px-2 lg:px-3 w-full rounded-lg"
                placeholder="Responsibilities"
              />
            </div>
          </div>
        </div>

        {/* Project */}
        <div className="bg-[#ffff] p-4 lg:p-5 2xl:p-6 companie-card border border-[#cccccc5d] rounded-2xl">
          <div className="border-b border-[#64748b28] pb-2 lg:pb-3">
            <h2 className="text-[16px] md:text-[18px] lg:text-[20px] font-semibold flex items-center gap-3">
              <FaProjectDiagram /> Projects
            </h2>
          </div>
          <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 lg:gap-5 2xl:gap-6">
            {/* Project Name */}
            <div className="flex flex-col gap-2">
              <lable className="text-[14px] lg:text-[16px] font-medium">
                Project Name
              </lable>
              <input
                required
                className="border border-[#cccccc5d] bg-[#cccccc17] py-1.5 md:py-2 lg:py-3 focus:outline-0 px-2 lg:px-3 w-full rounded-lg"
                type="text"
                placeholder="Project Name"
              />
            </div>
            {/* Project Live Link */}
            <div className="flex flex-col gap-2">
              <lable className="text-[14px] lg:text-[16px] font-medium">
                Project Live Link
              </lable>
              <input
                required
                className="border border-[#cccccc5d] bg-[#cccccc17] py-1.5 md:py-2 lg:py-3 focus:outline-0 px-2 lg:px-3 w-full rounded-lg"
                type="text"
                placeholder="Project Live Link"
              />
            </div>
            {/* Project Description */}
            <div className="flex flex-col gap-2 col-span-2">
              <lable className="text-[14px] lg:text-[16px] font-medium">
                Responsibilities
              </lable>
              <textarea
                rows={4}
                required
                className="border border-[#cccccc5d] bg-[#cccccc17] py-1.5 md:py-2 lg:py-3 focus:outline-0 px-2 lg:px-3 w-full rounded-lg"
                placeholder="Project Description"
              />
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="bg-[#ffff] p-4 lg:p-5 2xl:p-6 companie-card border border-[#cccccc5d] rounded-2xl">
          <div className="border-b border-[#64748b28] pb-2 lg:pb-3">
            <h2 className="text-[16px] md:text-[18px] lg:text-[20px] font-semibold flex items-center gap-3">
              <FaCertificate /> Additional Information
            </h2>
          </div>
          <div className="pt-4 grid grid-cols-1 gap-3 md:gap-4 lg:gap-5 2xl:gap-6">
            {/* Languages */}
            <div className="flex flex-col gap-2 col-span-2">
              <lable className="text-[14px] lg:text-[16px] font-medium">
                Languages
              </lable>
              <textarea
                rows={4}
                required
                className="border border-[#cccccc5d] bg-[#cccccc17] py-1.5 md:py-2 lg:py-3 focus:outline-0 px-2 lg:px-3 w-full rounded-lg"
                placeholder="Languages"
              />
            </div>
            {/* Certifications */}
            <div className="flex flex-col gap-2 col-span-2">
              <lable className="text-[14px] lg:text-[16px] font-medium">
                Certifications
              </lable>
              <textarea
                rows={4}
                required
                className="border border-[#cccccc5d] bg-[#cccccc17] py-1.5 md:py-2 lg:py-3 focus:outline-0 px-2 lg:px-3 w-full rounded-lg"
                placeholder="Certifications"
              />
            </div>
          </div>
        </div>

        {/* Basic Information */}
        <div className="bg-[#ffff] p-4 lg:p-5 2xl:p-6 companie-card border border-[#cccccc5d] rounded-2xl">
          <div className="border-b border-[#64748b28] pb-2 lg:pb-3">
            <h2 className="text-[16px] md:text-[18px] lg:text-[20px] font-semibold flex items-center gap-3">
              <FaUsers /> References
            </h2>
          </div>
          <div className="pt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-5 2xl:gap-6">
            {/* References Name */}
            <div className="flex flex-col gap-2">
              <lable className="text-[14px] lg:text-[16px] font-medium">
                References Name
              </lable>
              <input
                required
                className="border border-[#cccccc5d] bg-[#cccccc17] py-1.5 md:py-2 lg:py-3 focus:outline-0 px-2 lg:px-3 w-full rounded-lg"
                type="text"
                placeholder="References Name"
              />
            </div>
            {/* References Position */}
            <div className="flex flex-col gap-2">
              <lable className="text-[14px] lg:text-[16px] font-medium">
                References Position
              </lable>
              <input
                required
                className="border border-[#cccccc5d] bg-[#cccccc17] py-1.5 md:py-2 lg:py-3 focus:outline-0 px-2 lg:px-3 w-full rounded-lg"
                type="email"
                placeholder="References Position"
              />
            </div>
            {/* References Contact */}
            <div className="flex flex-col gap-2">
              <lable className="text-[14px] lg:text-[16px] font-medium">
                References Contact
              </lable>
              <input
                required
                className="border border-[#cccccc5d] bg-[#cccccc17] py-1.5 md:py-2 lg:py-3 focus:outline-0 px-2 lg:px-3 w-full rounded-lg"
                type="number"
                placeholder="References Contact"
              />
            </div>
          </div>
        </div>

        <button className="bg-[#1d4ed8] hover:bg-[#003ad8] duration-500 py-1.5 md:py-2 lg:py-3 px-6 md:px-8 lg:px-10 rounded-lg w-50 text-[#ffff] text-[14px] md:text-[16px]">
          Create Resume
        </button>
      </form>
    </div>
  );
};

export default CreateResumes;
