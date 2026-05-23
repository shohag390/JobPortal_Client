import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaGlobe,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaLanguage,
  FaCertificate,
  FaArrowRight,
} from "react-icons/fa";
import DashboardHeader from "../DashboardHeader";

const MyResumes = () => {
  const resume = {
    fullName: "Md Shohag Ali",
    jobTitle: "Frontend Web Developer",
    email: "shohag@gmail.com",
    phone: "+880 1234-567890",
    address: "Kaliganj, Dhaka, Bangladesh",
    website: "www.shohagportfolio.com",
    linkedin: "linkedin.com/in/shohag",
    github: "github.com/shohag390",

    summary:
      "Passionate Frontend Developer with experience in React, Tailwind CSS, Firebase, and MERN Stack development. Skilled in building responsive and modern web applications.",

    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Firebase",
      "Node.js",
      "MongoDB",
      "Express.js",
    ],

    education: {
      institute: "National University",
      degree: "Bachelor of Arts",
      field: "English",
      duration: "2021 - 2025",
    },

    experience: {
      company: "Freelance",
      position: "Frontend Developer",
      duration: "2024 - Present",
      responsibilities:
        "Developed responsive websites and MERN stack projects with authentication, dashboards, and API integration.",
    },

    projects: [
      {
        name: "Medicine E-Commerce Website",
        description:
          "A multi-vendor medicine selling platform with admin, seller, and user dashboard.",
        link: "https://medik-classicshops.netlify.app/",
      },
    ],

    languages: ["Bangla", "English"],

    certifications: [
      "Complete Web Development Course",
      "React & Firebase Certification",
    ],
  };

  return (
    <div className="px-6 lg:px-7 2xl:px-8 pb-3 md:pb-4 lg:pb-6">
      <DashboardHeader
        title={"My Resume"}
        subTitle={"Innovative, Collaborative, Growth-Focused Team"}
      />

      <div className="grid grid-cols-1 gap-3 md:gap-4 lg:gap-5 2xl:gap-6">
        {/* Resume Header */}
        <div className="bg-[#ffff] p-4 lg:p-5 2xl:p-6 companie-card border border-[#cccccc5d] rounded-2xl flex flex-col lg:flex-row lg:justify-between gap-4 lg:gap-0">
          <div>
            <h1 className="md:font-medium lg:font-semibold 2xl:font-bold text-[18px] md:text-[20px] lg:text-[22px] 2xl:text-[25px] uppercase">
              {resume.fullName}
            </h1>
            <p className="font-medium text-[#64748b] pb-2">{resume.jobTitle}</p>
            <div className="flex items-center gap-2">
              <a href="#">Linkedin</a>
              <span>|</span>
              <a href="#">Portfolio</a>
              <span>|</span>
              <a href="#">GitHub</a>
            </div>
          </div>
          <div>
            <p className="text-[14px] md:text-[16px] text-[#64748b] flex items-center gap-2">
              <FaPhoneAlt />
              {resume.phone}
            </p>
            <p className="text-[14px] md:text-[16px] text-[#64748b] flex items-center gap-2">
              <FaEnvelope />
              {resume.email}
            </p>
            <p className="text-[14px] md:text-[16px] text-[#64748b] flex items-center gap-2">
              <FaMapMarkerAlt />
              {resume.address}
            </p>
          </div>
        </div>

        {/* Career Objctive */}
        <div className="bg-[#ffff] p-4 lg:p-5 2xl:p-6 companie-card border border-[#cccccc5d] rounded-2xl">
          <h4 className="text-[16px] md:text-[18px] lg:text-[20px] font-semibold pb-3">
            Career Objctive
          </h4>
          <p className="text-[14px] md:text-[16px] text-[#64748b]">
            {resume.summary}
          </p>
        </div>

        {/* My Skills */}
        <div className="bg-[#ffff] p-4 lg:p-5 2xl:p-6 companie-card border border-[#cccccc5d] rounded-2xl">
          <h4 className="text-[16px] md:text-[18px] lg:text-[20px] font-semibold pb-3">
            My Skills
          </h4>
          <div className="text-[14px] md:text-[16px] text-[#64748b] flex items-center flex-wrap gap-2 md:gap-3 lg:gap-4">
            {resume.skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-[#1d4fd841] text-[#003ad8] rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* PROJECTS */}
        <div className="bg-[#ffff] p-4 lg:p-5 2xl:p-6 companie-card border border-[#cccccc5d] rounded-2xl">
          <h2 className="text-[16px] md:text-[18px] lg:text-[20px] font-semibold pb-3">
            Projects
          </h2>

          <div className="">
            {resume.projects.map((project, index) => (
              <div key={index} className="">
                <h3 className="text-[14px] md:text-[16px] font-medium">
                  {project.name}
                </h3>

                <p className="text-[14px] md:text-[16px] text-[#64748b] pb-2">
                  {project.description}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#1d4fd841] hover:bg-[#003ad8] w-40 h-10 rounded-full text-[#003ad8] hover:text-[#ffff] text-[14px] md:text-[16px] flex items-center justify-center gap-2 duration-500"
                >
                  Live Project
                  <FaArrowRight />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* EXPERIENCE */}
        <div className="bg-[#ffff] p-4 lg:p-5 2xl:p-6 companie-card border border-[#cccccc5d] rounded-2xl">
          <h2 className="text-[16px] md:text-[18px] lg:text-[20px] font-semibold pb-3">
            Experience
          </h2>
          <div className="">
            <h3 className="text-[14px] md:text-[16px] font-medium">
              {resume.experience.position}
            </h3>

            <p className="">
              {resume.experience.company} | {resume.experience.duration}
            </p>
            <p className="text-[14px] md:text-[16px] text-[#64748b] pt-2">
              {resume.experience.responsibilities}
            </p>
          </div>
        </div>

        {/* CERTIFICATIONS */}
        <div className="bg-[#ffff] p-4 lg:p-5 2xl:p-6 companie-card border border-[#cccccc5d] rounded-2xl">
          <h2 className="text-[16px] md:text-[18px] lg:text-[20px] font-semibold pb-3">
            Certifications
          </h2>

          <div className="text-[14px] md:text-[16px] text-[#64748b] flex items-center flex-wrap gap-2 md:gap-3 lg:gap-4">
            {resume.certifications.map((certificate, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-[#1d4fd841] text-[#003ad8] rounded-full"
              >
                {certificate}
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="bg-[#ffff] p-4 lg:p-5 2xl:p-6 companie-card border border-[#cccccc5d] rounded-2xl">
          <h2 className="text-[16px] md:text-[18px] lg:text-[20px] font-semibold pb-3">
            languages
          </h2>

          <div className="text-[14px] md:text-[16px] text-[#64748b] flex items-center flex-wrap gap-2 md:gap-3 lg:gap-4">
            {resume.languages.map((language, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-[#1d4fd841] text-[#003ad8] rounded-full"
              >
                {language}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyResumes;
