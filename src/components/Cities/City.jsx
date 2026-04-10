import React from "react";
import { FaBriefcase } from "react-icons/fa";

const City = ({ city }) => {
  return (
    <div className="relative h-60 md:h-70 lg:h-80 w-full overflow-hidden rounded-2xl group">
      <img
        className="absolute h-full w-full group-hover:scale-105 duration-500"
        src={city?.image}
        alt="city image"
      />
      <div className="absolute h-full w-full flex flex-col justify-between items-end duration-500 p-6 bg-[#293b6e6b]">
        <h2 className="text-[16px] md:text-[18px] lg:text-[20px] font-medium lg:font-semibold 2xl:font-bold uppercase text-[#ffff]">
          {city?.city}
        </h2>

        <p className="flex items-center gap-2 lg:gap-3 2xl:gap-4 text-[16] md:text-[18px] lg:text-[20px] font-medium lg:font-semibold 2xl:font-bold bg-[#1046db62] py-1 px-5 md:px-6 lg:px-7 rounded-full">
          <FaBriefcase className="text-[#ffffff]" />
          <span className="text-[#ffff] uppercase">{city?.jobs} Jobs</span>
        </p>
      </div>
    </div>
  );
};

export default City;
