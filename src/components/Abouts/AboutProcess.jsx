import React from "react";
import { FaBriefcase, FaUser } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import SectionHeader from "../../shared/SectionHeader";
import { Link } from "react-router";

const steps = [
  {
    id: 1,
    title: "Create Account",
    description:
      "Sign up quickly with your basic information to access all platform features and start your job search journey.",
    icon: <FaUser />,
  },
  {
    id: 2,
    title: "Build CV",
    description:
      "Create a professional CV by adding your skills, education, and experience to attract employers easily.",
    icon: <IoDocumentText />,
  },
  {
    id: 3,
    title: "Get Job",
    description:
      "Apply to suitable jobs, connect with employers, and secure the right opportunity based on your qualifications.",
    icon: <FaBriefcase />,
  },
];

const AboutProcess = () => {
  return (
    <div className="px-5 md:px-12 lg:px-20 2xl:px-60 py-8 md:py-10 lg:py-12 2xl:py-18 bg-[#ffff]">
      <SectionHeader
        subTitle={"Create Account"}
        title={"Our process is simple"}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-5 2xl:gap-6">
        {steps?.map((item) => (
          <div
            className="p-6 companie-card border border-[#cccccc5d] rounded-2xl hover:-translate-y-1 duration-500 cursor-pointer flex flex-col items-center text-center"
            key={item?.id}
          >
            <div className="h-18 md:h-20 lg:h-25 w-18 md:w-20 lg:w-25 card-image flex items-center justify-center text-[30px] md:text-[35px] lg:text-[40px] bg-[#2564eb] text-[#ffff] rounded-full">
              <span>{item?.icon}</span>
            </div>
            <h2 className="py-2 md:py-2 lg:py-3 text-justify font-medium lg:font-semibold 2xl:font-bold text-[18px] md:text-[20px] lg:text-[22px]">
              {item?.title}
            </h2>
            <p className="text-[14px] md:text-[16px] text-[#64748b] line-clamp-2">
              {item?.description}
            </p>
          </div>
        ))}
      </div>
      <div className="w-full flex items-center justify-center pt-6 md:pt-8 lg:pt-10 2xl:pt-12 ">
        <Link
          className="bg-[#1d4ed8] hover:bg-[#003ad8] duration-500 py-1.5 md:py-2 lg:py-3 px-6 md:px-8 lg:px-10 rounded-full text-[#ffff] text-[14px] md:text-[16px]"
          to={""}
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default AboutProcess;
