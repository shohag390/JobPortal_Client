import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGlobe,
  FaLinkedin,
  FaGithub,
  FaBriefcase,
  FaGraduationCap,
  FaProjectDiagram,
  FaLanguage,
  FaCertificate,
  FaSave,
  FaUpload,
} from "react-icons/fa";

const EditResume = () => {
  const [formData, setFormData] = useState({
    fullName: "Md Shohag Ali",
    email: "shohag@gmail.com",
    phone: "+880123456789",
    address: "Kaliganj, Dhaka",
    city: "Dhaka",
    country: "Bangladesh",
    postalCode: "1720",
    website: "www.shohagportfolio.com",
    linkedin: "linkedin.com/in/shohag",
    github: "github.com/shohag390",

    jobTitle: "Frontend Developer",
    summary:
      "Passionate frontend developer with experience in React, Tailwind CSS and MERN stack projects.",

    skills: "HTML, CSS, JavaScript, React, Tailwind CSS, Firebase",

    institute: "National University",
    degree: "Bachelor Degree",
    fieldOfStudy: "English",
    educationStart: "2021-01-01",
    educationEnd: "2025-01-01",

    companyName: "Freelancer",
    position: "Frontend Developer",
    experienceStart: "2024-01-01",
    experienceEnd: "2025-01-01",

    responsibilities:
      "Developed modern responsive web applications using React and Tailwind CSS.",

    projectName: "Medicine E-Commerce",
    projectLink: "https://medik-classicshops.netlify.app/",
    projectDescription:
      "Multi-vendor medicine e-commerce platform with role-based dashboard.",

    languages: "Bangla, English",
    certifications: "Complete Web Development Course",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Resume Updated Successfully!");
  };

  return (
    <div className="min-h-screen bg-[#f4f5f9] py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* ================= HEADER ================= */}
        <div className="flex flex-col md:flex-row justify-between md:items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-[#0f3d2e]">Edit Resume</h1>

            <p className="text-gray-500 mt-2">
              Update your professional resume information.
            </p>
          </div>

          <button className="mt-4 md:mt-0 bg-[#0f3d2e] hover:bg-[#0b2e22] text-white px-6 py-3 rounded-2xl flex items-center gap-3 transition">
            <FaUpload />
            Upload Resume
          </button>
        </div>

        {/* ================= FORM ================= */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* ================= PERSONAL INFO ================= */}
          <SectionCard title="Personal Information" icon={<FaUser />}>
            <div className="grid md:grid-cols-3 gap-6">
              <InputField
                label="Full Name"
                icon={<FaUser />}
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
              />

              <InputField
                label="Email Address"
                icon={<FaEnvelope />}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />

              <InputField
                label="Phone Number"
                icon={<FaPhoneAlt />}
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />

              <InputField
                label="Address"
                icon={<FaMapMarkerAlt />}
                name="address"
                value={formData.address}
                onChange={handleChange}
              />

              <InputField
                label="City"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />

              <InputField
                label="Country"
                name="country"
                value={formData.country}
                onChange={handleChange}
              />

              <InputField
                label="Postal Code"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
              />

              <InputField
                label="Portfolio Website"
                icon={<FaGlobe />}
                name="website"
                value={formData.website}
                onChange={handleChange}
              />

              <InputField
                label="LinkedIn Profile"
                icon={<FaLinkedin />}
                name="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
              />

              <InputField
                label="GitHub Profile"
                icon={<FaGithub />}
                name="github"
                value={formData.github}
                onChange={handleChange}
              />
            </div>
          </SectionCard>

          {/* ================= CAREER INFO ================= */}
          <SectionCard title="Career Information" icon={<FaBriefcase />}>
            <div className="space-y-6">
              <InputField
                label="Job Title"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
              />

              <TextAreaField
                label="Professional Summary"
                rows="4"
                name="summary"
                value={formData.summary}
                onChange={handleChange}
              />

              <TextAreaField
                label="Skills"
                rows="3"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
              />
            </div>
          </SectionCard>

          {/* ================= EDUCATION ================= */}
          <SectionCard title="Education" icon={<FaGraduationCap />}>
            <div className="grid md:grid-cols-2 gap-6">
              <InputField
                label="Institute Name"
                name="institute"
                value={formData.institute}
                onChange={handleChange}
              />

              <InputField
                label="Degree"
                name="degree"
                value={formData.degree}
                onChange={handleChange}
              />

              <InputField
                label="Field Of Study"
                name="fieldOfStudy"
                value={formData.fieldOfStudy}
                onChange={handleChange}
              />

              <InputField
                type="date"
                label="Start Date"
                name="educationStart"
                value={formData.educationStart}
                onChange={handleChange}
              />

              <InputField
                type="date"
                label="End Date"
                name="educationEnd"
                value={formData.educationEnd}
                onChange={handleChange}
              />
            </div>
          </SectionCard>

          {/* ================= EXPERIENCE ================= */}
          <SectionCard title="Work Experience" icon={<FaBriefcase />}>
            <div className="grid md:grid-cols-2 gap-6">
              <InputField
                label="Company Name"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
              />

              <InputField
                label="Position"
                name="position"
                value={formData.position}
                onChange={handleChange}
              />

              <InputField
                type="date"
                label="Start Date"
                name="experienceStart"
                value={formData.experienceStart}
                onChange={handleChange}
              />

              <InputField
                type="date"
                label="End Date"
                name="experienceEnd"
                value={formData.experienceEnd}
                onChange={handleChange}
              />
            </div>

            <div className="mt-6">
              <TextAreaField
                label="Responsibilities"
                rows="4"
                name="responsibilities"
                value={formData.responsibilities}
                onChange={handleChange}
              />
            </div>
          </SectionCard>

          {/* ================= PROJECTS ================= */}
          <SectionCard title="Projects" icon={<FaProjectDiagram />}>
            <div className="space-y-6">
              <InputField
                label="Project Name"
                name="projectName"
                value={formData.projectName}
                onChange={handleChange}
              />

              <InputField
                label="Project Link"
                name="projectLink"
                value={formData.projectLink}
                onChange={handleChange}
              />

              <TextAreaField
                label="Project Description"
                rows="4"
                name="projectDescription"
                value={formData.projectDescription}
                onChange={handleChange}
              />
            </div>
          </SectionCard>

          {/* ================= EXTRA INFO ================= */}
          <SectionCard title="Additional Information" icon={<FaLanguage />}>
            <div className="space-y-6">
              <TextAreaField
                label="Languages"
                rows="3"
                name="languages"
                value={formData.languages}
                onChange={handleChange}
              />

              <TextAreaField
                label="Certifications"
                rows="4"
                name="certifications"
                value={formData.certifications}
                onChange={handleChange}
              />
            </div>
          </SectionCard>

          {/* ================= SAVE BUTTON ================= */}
          <button
            type="submit"
            className="w-full bg-[#0f3d2e] hover:bg-[#0b2e22] text-white py-4 rounded-2xl text-lg font-semibold flex items-center justify-center gap-3 transition duration-300"
          >
            <FaSave />
            Save Changes
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

        <h2 className="text-3xl font-semibold text-[#0f3d2e]">{title}</h2>
      </div>

      {children}
    </div>
  );
};

/* ================= INPUT FIELD ================= */

const InputField = ({
  label,
  icon,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <div>
      <label className="block text-gray-500 mb-2">{label}</label>

      <div className="relative">
        {icon && (
          <div className="absolute top-1/2 -translate-y-1/2 left-4 text-gray-400">
            {icon}
          </div>
        )}

        <input
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className={`w-full border border-gray-200 rounded-2xl py-4 outline-none focus:ring-2 focus:ring-[#0f3d2e]
            
            ${icon ? "pl-12 pr-4" : "px-4"}
          `}
        />
      </div>
    </div>
  );
};

/* ================= TEXTAREA FIELD ================= */

const TextAreaField = ({ label, rows, name, value, onChange, placeholder }) => {
  return (
    <div>
      <label className="block text-gray-500 mb-2">{label}</label>

      <textarea
        rows={rows}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full border border-gray-200 rounded-2xl px-4 py-4 outline-none focus:ring-2 focus:ring-[#0f3d2e]"
      ></textarea>
    </div>
  );
};

export default EditResume;
