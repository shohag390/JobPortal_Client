import React from "react";
import { FaBriefcase } from "react-icons/fa";

const Categori = ({ categore }) => {
  return (
    <div className="p-6 companie-card border bg-[#ffff] border-[#cccccc5d] flex flex-col justify-center items-center rounded-2xl hover:-translate-y-1 duration-500">
      <div className="bg-[#2563eb14] h-18 md:h-20 lg:h-22 w-18 md:w-20 lg:w-22 flex items-center justify-center rounded-md">
        <img
          className="h-14 md:h-16 lg:h-18 w-14 md:w-16 lg:w-18"
          src={categore?.image}
          alt=""
        />
      </div>
      <h4 className="font-medium lg:font-semibold 2xl:font-bold text-[16px] lg:text-[18px] py-2 lg:py-3">
        {categore?.name}
      </h4>
      <p className="flex items-center gap-1 lg:gap-2 bg-[#2563eb14] px-4 lg:px-5 py-1 rounded-full">
        <FaBriefcase className="text-[#2564eb] text-[14px] lg:text-[16px]" />
        <span className="text-[14px] lg:text-[16px]">
          ({categore?.jobs}) Jobs
        </span>
      </p>
    </div>
  );
};

export default Categori;
