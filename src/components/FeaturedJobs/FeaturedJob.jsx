import React from "react";
import { FaBriefcase } from "react-icons/fa";
import { TiLocation } from "react-icons/ti";

const FeaturedJob = ({ featuredJob }) => {
  return (
    <div className="p-6 companie-card border border-[#cccccc5d] rounded-2xl hover:-translate-y-1 duration-500 cursor-pointer">
      <div className="border-b border-[#cccccc5d] pb-2 lg:pb-4">
        <p className="flex items-center gap-1 lg:gap-2 text-[14px] md:text-[16px]">
          <FaBriefcase />
          <span>{featuredJob?.jobType}</span>
        </p>
        <h4 className="font-medium lg:font-semibold 2xl:font-bold text-[16px] lg:text-[18px] py-1">
          {featuredJob?.title}
        </h4>
        <p className="flex items-center gap-1 lg:gap-2 text-[#1d4ed8]">
          <TiLocation className="text-[18px] lg:text-[20px]" />
          <span className="text-[14px] lg:text-[16px]">
            {featuredJob?.location}
          </span>
        </p>
      </div>
      <div className="flex items-center justify-between pt-2 lg:pt-4">
        <div>
          <p className="text-[14px] md:text-[16px] text-[#64748b]">
            {featuredJob?.date}
          </p>
          <h6 className="text-[14px] md:text-[16px] font-medium lg:font-semibold">
            {featuredJob?.company}
          </h6>
        </div>
        <div>
          <div className="card-image h-14 lg:h-16 w-14 lg:w-16 flex items-center justify-center rounded-lg">
            <img
              className="h-12 lg:h-14 w-12 lg:w-14"
              src={featuredJob?.logo}
              alt="company logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJob;
