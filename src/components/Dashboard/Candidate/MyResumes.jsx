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
} from "react-icons/fa";

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

      {
        name: "Job Portal Website",
        description:
          "Responsive job portal with Firebase authentication and role-based dashboard.",
        link: "https://job-portal-by-shohag.netlify.app/",
      },
    ],

    languages: ["Bangla", "English"],

    certifications: [
      "Complete Web Development Course",
      "React & Firebase Certification",
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden">
        {/* ================= HEADER ================= */}
        <div className="bg-black text-white p-10">
          <h1 className="text-4xl md:text-5xl font-bold">{resume.fullName}</h1>

          <p className="text-xl text-gray-300 mt-2">{resume.jobTitle}</p>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-4 mt-8 text-sm">
            <div className="flex items-center gap-3">
              <FaEnvelope />
              <span>{resume.email}</span>
            </div>

            <div className="flex items-center gap-3">
              <FaPhoneAlt />
              <span>{resume.phone}</span>
            </div>

            <div className="flex items-center gap-3">
              <FaMapMarkerAlt />
              <span>{resume.address}</span>
            </div>

            <div className="flex items-center gap-3">
              <FaLinkedin />
              <span>{resume.linkedin}</span>
            </div>

            <div className="flex items-center gap-3">
              <FaGithub />
              <span>{resume.github}</span>
            </div>

            <div className="flex items-center gap-3">
              <FaGlobe />
              <span>{resume.website}</span>
            </div>
          </div>
        </div>

        {/* ================= BODY ================= */}
        <div className="grid lg:grid-cols-3">
          {/* LEFT SIDE */}
          <div className="bg-gray-50 p-8 border-r">
            {/* Skills */}
            <section className="mb-10">
              <h2 className="flex items-center gap-3 text-2xl font-bold mb-5">
                <FaCode />
                Skills
              </h2>

              <div className="flex flex-wrap gap-3">
                {resume.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-black text-white px-4 py-2 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Languages */}
            <section className="mb-10">
              <h2 className="flex items-center gap-3 text-2xl font-bold mb-5">
                <FaLanguage />
                Languages
              </h2>

              <div className="space-y-3">
                {resume.languages.map((language, index) => (
                  <div
                    key={index}
                    className="bg-white shadow rounded-xl px-4 py-3"
                  >
                    {language}
                  </div>
                ))}
              </div>
            </section>

            {/* Certifications */}
            <section>
              <h2 className="flex items-center gap-3 text-2xl font-bold mb-5">
                <FaCertificate />
                Certifications
              </h2>

              <div className="space-y-3">
                {resume.certifications.map((certificate, index) => (
                  <div
                    key={index}
                    className="bg-white shadow rounded-xl px-4 py-3"
                  >
                    {certificate}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-2 p-8">
            {/* Summary */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-5">Profile Summary</h2>

              <p className="text-gray-700 leading-8">{resume.summary}</p>
            </section>

            {/* Experience */}
            <section className="mb-12">
              <h2 className="flex items-center gap-3 text-3xl font-bold mb-6">
                <FaBriefcase />
                Experience
              </h2>

              <div className="border-l-4 border-black pl-6">
                <h3 className="text-2xl font-semibold">
                  {resume.experience.position}
                </h3>

                <p className="text-gray-500 mt-1">
                  {resume.experience.company} | {resume.experience.duration}
                </p>

                <p className="mt-4 text-gray-700 leading-7">
                  {resume.experience.responsibilities}
                </p>
              </div>
            </section>

            {/* Education */}
            <section className="mb-12">
              <h2 className="flex items-center gap-3 text-3xl font-bold mb-6">
                <FaGraduationCap />
                Education
              </h2>

              <div className="border-l-4 border-black pl-6">
                <h3 className="text-2xl font-semibold">
                  {resume.education.degree}
                </h3>

                <p className="text-gray-500 mt-1">
                  {resume.education.institute}
                </p>

                <p className="mt-2 text-gray-700">{resume.education.field}</p>

                <p className="text-sm text-gray-500 mt-2">
                  {resume.education.duration}
                </p>
              </div>
            </section>

            {/* Projects */}
            <section>
              <h2 className="text-3xl font-bold mb-6">Projects</h2>

              <div className="grid md:grid-cols-2 gap-6">
                {resume.projects.map((project, index) => (
                  <div
                    key={index}
                    className="border rounded-2xl p-6 hover:shadow-xl transition duration-300"
                  >
                    <h3 className="text-2xl font-semibold mb-3">
                      {project.name}
                    </h3>

                    <p className="text-gray-600 leading-7">
                      {project.description}
                    </p>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block mt-5 bg-black text-white px-5 py-2 rounded-lg"
                    >
                      Live Project
                    </a>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyResumes;
