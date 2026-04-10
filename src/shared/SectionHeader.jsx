import React from "react";

const SectionHeader = ({ subTitle, title }) => {
  return (
    <div className="text-center pb-6 md:pb-8 lg:pb-10 2xl:pb-12">
      <h4 className="text-[#1d4ed8] text-[16px] md:text-[18px] lg:text-[20px] md:font-medium">
        {subTitle}
      </h4>
      <h1 className="text-[#000000] text-[20px] md:text-[25px] lg:text-[30px] font-medium lg:font-semibold leading-5 md:leading-8 lg:leading-9">
        {title}
      </h1>
    </div>
  );
};

export default SectionHeader;
