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

const CreateResumes = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
    postalCode: "",
    website: "",
    linkedin: "",
    github: "",
    jobTitle: "",
    summary: "",
    skills: "",
    institute: "",
    degree: "",
    fieldOfStudy: "",
    educationStart: "",
    educationEnd: "",
    companyName: "",
    position: "",
    experienceStart: "",
    experienceEnd: "",
    responsibilities: "",
    projectName: "",
    projectLink: "",
    projectDescription: "",
    languages: "",
    certifications: "",
    referenceName: "",
    referencePosition: "",
    referenceContact: "",
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

    alert("Resume Created Successfully!");
  };

  return (
    <div className="min-h-screen bg-[#f4f5f9] py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* ================= PAGE TITLE ================= */}
        <h1 className="text-4xl font-bold text-[#0f3d2e] mb-8">
          Create Resume
        </h1>

        {/* ================= FORM CONTAINER ================= */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* ================= PERSONAL INFO ================= */}
          <SectionCard title="Personal Information" icon={<FaUser />}>
            <div className="grid md:grid-cols-3 gap-6">
              <InputField
                icon={<FaUser />}
                label="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
              />

              <InputField
                icon={<FaEnvelope />}
                label="Email Address"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />

              <InputField
                icon={<FaPhoneAlt />}
                label="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />

              <InputField
                icon={<FaMapMarkerAlt />}
                label="Address"
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
                icon={<FaGlobe />}
                label="Portfolio Website"
                name="website"
                value={formData.website}
                onChange={handleChange}
              />

              <InputField
                icon={<FaLinkedin />}
                label="LinkedIn Profile"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
              />

              <InputField
                icon={<FaGithub />}
                label="GitHub Profile"
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
                placeholder="HTML, CSS, JavaScript, React..."
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
                label="Field of Study"
                name="fieldOfStudy"
                value={formData.fieldOfStudy}
                onChange={handleChange}
              />

              <InputField
                label="Education Start Date"
                type="date"
                name="educationStart"
                value={formData.educationStart}
                onChange={handleChange}
              />

              <InputField
                label="Education End Date"
                type="date"
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
                label="Project Live Link"
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
          <SectionCard title="Additional Information" icon={<FaCertificate />}>
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

          {/* ================= REFERENCES ================= */}
          <SectionCard title="References" icon={<FaUsers />}>
            <div className="grid md:grid-cols-3 gap-6">
              <InputField
                label="Reference Name"
                name="referenceName"
                value={formData.referenceName}
                onChange={handleChange}
              />

              <InputField
                label="Reference Position"
                name="referencePosition"
                value={formData.referencePosition}
                onChange={handleChange}
              />

              <InputField
                label="Reference Contact"
                name="referenceContact"
                value={formData.referenceContact}
                onChange={handleChange}
              />
            </div>
          </SectionCard>

          {/* ================= BUTTON ================= */}
          <button
            type="submit"
            className="w-full bg-[#0f3d2e] hover:bg-[#0b2e22] text-white py-4 rounded-2xl text-lg font-semibold transition duration-300 shadow-lg"
          >
            Create Resume
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
          onChange={onChange}
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

export default CreateResumes;
