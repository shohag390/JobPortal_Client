import React from "react";
import { FaBriefcase } from "react-icons/fa";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";
import { TiLocation } from "react-icons/ti";
import { Link } from "react-router";

const LatestJob = ({ latestJob }) => {
  return (
    <div className="p-6 companie-card border bg-[#ffff] border-[#cccccc5d] rounded-2xl hover:-translate-y-1 duration-500 cursor-pointer">
      <div className="border-b border-[#cccccc5d] pb-2 lg:pb-4">
        <p className="flex items-center gap-1 lg:gap-2 text-[14px] md:text-[16px]">
          <FaBriefcase />
          <span>{latestJob?.type}</span>
        </p>
        <h4 className="font-medium lg:font-semibold 2xl:font-bold text-[16px] lg:text-[18px] py-1">
          {latestJob?.title}
        </h4>
        <div className="pt-2 lg:pt-3">
          <p className="flex items-center gap-1 lg:gap-2 text-[#1d4ed8]">
            <HiMiniBuildingOffice2 className="text-[18px] lg:text-[20px]" />
            <span className="text-[14px] lg:text-[16px]">
              {latestJob?.company}
            </span>
          </p>
          <p className="flex items-center gap-1 lg:gap-2 text-[#1d4ed8]">
            <TiLocation className="text-[18px] lg:text-[20px]" />
            <span className="text-[14px] lg:text-[16px]">
              {latestJob?.location}
            </span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between pt-2 lg:pt-4">
        <div className="flex items-center gap-2 lg:gap-3">
          <div className="card-image h-14 lg:h-16 w-14 lg:w-16 flex items-center justify-center rounded-lg">
            <img
              className="h-12 lg:h-14 w-12 lg:w-14"
              src={latestJob?.logo}
              alt="company logo"
            />
          </div>
          <div>
            <p className="text-[14px] md:text-[16px] text-[#64748b]">
              Posted on
            </p>
            <h6 className="text-[14px] md:text-[16px] font-medium lg:font-semibold">
              {latestJob?.posted_date}
            </h6>
          </div>
        </div>
        <div>
          <Link
            className="border border-[#1d4ed8] text-[#1d4ed8] hover:text-[#ffff] hover:bg-[#1d4ed8] duration-500 py-1 md:py-1.5 lg:py-2 px-4 md:px-5 lg:px-6 rounded-full text-[14px] md:text-[16px]"
            to={""}
          >
            Job Detail
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LatestJob;
