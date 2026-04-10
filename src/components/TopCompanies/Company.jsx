import React from "react";
import { FaBriefcase } from "react-icons/fa";
import { TiLocation } from "react-icons/ti";

const Company = ({ companie }) => {
  console.log(companie);

  return (
    <div className="p-6 companie-card border border-[#cccccc5d] flex flex-col justify-center items-center rounded-lg group">
      <div className="h-16 lg:h-18 2xl:h-20 w-16 lg:w-18 2xl:w-20 bg-[#cccccc21] border border-[#cccccc5d] flex items-center justify-center rounded-md card-image group-hover:-translate-y-1 duration-500">
        <img
          className="h-14 lg:h-15 2xl:h-16 w-14 lg:w-15 2xl:w-16 rounded-sm"
          src={companie?.logo}
          alt=""
        />
      </div>
      <h4 className="font-medium lg:font-semibold 2xl:font-bold text-[16px] lg:text-[18px] pt-2 lg:pt-3">
        {companie?.name}
      </h4>
      <p className="flex items-center gap-1 lg:gap-2 pb-2 lg:pb-3">
        <TiLocation className="text-[#22c55e] text-[18px] lg:text-[20px]" />
        <span className="text-[#64748b] text-[14px] lg:text-[16px]">
          {companie?.location}
        </span>
      </p>
      <p className="flex items-center gap-1 lg:gap-2 bg-[#2563eb14] px-4 lg:px-5 py-1 rounded-full">
        <FaBriefcase className="text-[#2564eb] text-[14px] lg:text-[16px]" />
        <span className="text-[14px] lg:text-[16px]">
          {companie?.openJobs} Open Jobs
        </span>
      </p>
    </div>
  );
};

export default Company;
