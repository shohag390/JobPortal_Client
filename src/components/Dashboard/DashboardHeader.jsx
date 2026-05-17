import React from "react";

const DashboardHeader = ({ title, subTitle }) => {
  return (
    <div className="py-3 md:py-4 lg:py-6">
      <h1 className="font-medium lg:font-semibold 2xl:font-bold text-[20px] lg:text-[25px] 2xl:text-[28px]">
        {title}
      </h1>
      <p className="text-[14px] md:text-[16px] text-[#64748b]">{subTitle}</p>
    </div>
  );
};

export default DashboardHeader;
