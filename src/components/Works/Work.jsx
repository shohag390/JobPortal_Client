import React from "react";

const Work = ({ step }) => {
  return (
    <div className="bg-[#ffff] p-6 companie-card border border-[#cccccc5d] flex flex-col justify-center items-center rounded-2xl hover:-translate-y-1 duration-500">
      <div className="h-18 md:h-20 lg:h-25 w-18 md:w-20 lg:w-25 shadow-xl shadow-[#cccccc5d] flex items-center justify-center text-[30px] md:text-[35px] lg:text-[40px] text-[#2564eb] rounded-full">
        <span>{step?.icon}</span>
      </div>
      <h4 className="font-medium lg:font-semibold 2xl:font-bold text-[18px] lg:text-[20px] pt-2 lg:pt-3 pb-1">
        {step?.title}
      </h4>
      <p className="text-center text-[#64748b] text-[14px] lg:text-[16px] line-clamp-3">
        {step?.description}
      </p>
    </div>
  );
};

export default Work;
