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

const SubmitJobs = () => {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    category: "",
    subCategory: "",
    location: "",
    jobType: "",
    experience: "",
    vacancy: "",
    salaryMin: "",
    salaryMax: "",
    salaryType: "",
    deadline: "",
    description: "",
    responsibilities: "",
    requirements: "",
    skills: "",
    benefits: "",
    education: "",
    languages: "",
    workingHours: "",
    gender: "",
    website: "",
    contactEmail: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Job Created Successfully!");
  };

  return (
    <div className="min-h-screen bg-[#f4f5f9] py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-[#0f3d2e] mb-8">
          Create Job Post
        </h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* ================= BASIC INFO ================= */}
          <SectionCard title="Basic Information" icon={<FaBriefcase />}>
            <div className="grid md:grid-cols-3 gap-6">
              <InputField
                label="Job Title"
                name="title"
                onChange={handleChange}
              />
              <InputField
                label="Company Name"
                name="company"
                onChange={handleChange}
              />
              <InputField
                label="Category"
                name="category"
                onChange={handleChange}
              />
              <InputField
                label="Sub Category"
                name="subCategory"
                onChange={handleChange}
              />

              <InputField
                label="Job Type (Full/Part/Contract)"
                name="jobType"
                onChange={handleChange}
              />
              <InputField
                label="Experience"
                name="experience"
                onChange={handleChange}
              />
            </div>
          </SectionCard>

          {/* ================= LOCATION ================= */}
          <SectionCard title="Location Information" icon={<FaMapMarkerAlt />}>
            <div className="grid md:grid-cols-3 gap-6">
              <InputField
                label="Location"
                name="location"
                onChange={handleChange}
              />
              <InputField
                label="Website"
                name="website"
                onChange={handleChange}
              />
              <InputField
                label="Contact Email"
                name="contactEmail"
                onChange={handleChange}
              />
            </div>
          </SectionCard>

          {/* ================= JOB DETAILS ================= */}
          <SectionCard title="Job Details" icon={<FaUsers />}>
            <div className="grid md:grid-cols-3 gap-6">
              <InputField
                label="Vacancy"
                name="vacancy"
                onChange={handleChange}
              />
              <InputField
                label="Education"
                name="education"
                onChange={handleChange}
              />
              <InputField
                label="Working Hours"
                name="workingHours"
                onChange={handleChange}
              />
              <InputField
                label="Gender Preference"
                name="gender"
                onChange={handleChange}
              />
            </div>
          </SectionCard>

          {/* ================= SALARY ================= */}
          <SectionCard title="Salary Information" icon={<FaMoneyBill />}>
            <div className="grid md:grid-cols-3 gap-6">
              <InputField
                label="Salary Min"
                name="salaryMin"
                onChange={handleChange}
              />
              <InputField
                label="Salary Max"
                name="salaryMax"
                onChange={handleChange}
              />
              <InputField
                label="Salary Type"
                name="salaryType"
                onChange={handleChange}
              />
            </div>
          </SectionCard>

          {/* ================= DEADLINE ================= */}
          <SectionCard title="Important Dates" icon={<FaClock />}>
            <div className="grid md:grid-cols-3 gap-6">
              <InputField
                label="Application Deadline"
                type="date"
                name="deadline"
                onChange={handleChange}
              />
            </div>
          </SectionCard>

          {/* ================= DESCRIPTION ================= */}
          <SectionCard title="Job Description" icon={<FaBuilding />}>
            <TextAreaField
              label="Description"
              name="description"
              rows={4}
              onChange={handleChange}
            />
            <TextAreaField
              label="Responsibilities"
              name="responsibilities"
              rows={4}
              onChange={handleChange}
            />
            <TextAreaField
              label="Requirements"
              name="requirements"
              rows={4}
              onChange={handleChange}
            />
          </SectionCard>

          {/* ================= SKILLS ================= */}
          <SectionCard title="Skills & Benefits" icon={<FaTools />}>
            <TextAreaField
              label="Skills (React, Node, MongoDB...)"
              name="skills"
              rows={3}
              onChange={handleChange}
            />
            <TextAreaField
              label="Benefits"
              name="benefits"
              rows={3}
              onChange={handleChange}
            />
            <TextAreaField
              label="Languages"
              name="languages"
              rows={3}
              onChange={handleChange}
            />
          </SectionCard>

          {/* ================= SUBMIT ================= */}
          <button
            type="submit"
            className="w-full bg-[#0f3d2e] hover:bg-[#0b2e22] text-white py-4 rounded-2xl text-lg font-semibold"
          >
            Publish Job
          </button>
        </form>
      </div>
    </div>
  );
};

/* ================= SECTION CARD ================= */
const SectionCard = ({ title, icon, children }) => {
  return (
    <div className="bg-white rounded-3xl shadow-sm p-8">
      <div className="flex items-center gap-3 border-b pb-4 mb-6">
        <div className="text-[#0f3d2e] text-xl">{icon}</div>
        <h2 className="text-2xl font-semibold text-[#0f3d2e]">{title}</h2>
      </div>
      {children}
    </div>
  );
};

/* ================= INPUT FIELD ================= */
const InputField = ({ label, name, type = "text", onChange }) => {
  return (
    <div>
      <label className="block text-gray-500 mb-2">{label}</label>
      <input
        type={type}
        name={name}
        onChange={onChange}
        className="w-full border border-gray-200 rounded-2xl p-4 focus:ring-2 focus:ring-[#0f3d2e]"
      />
    </div>
  );
};

/* ================= TEXTAREA FIELD ================= */
const TextAreaField = ({ label, name, rows, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-500 mb-2">{label}</label>
      <textarea
        name={name}
        rows={rows}
        onChange={onChange}
        className="w-full border border-gray-200 rounded-2xl p-4 focus:ring-2 focus:ring-[#0f3d2e]"
      />
    </div>
  );
};

export default SubmitJobs;
