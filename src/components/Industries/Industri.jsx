import React from "react";

const Industri = ({ industre }) => {
  console.log(industre);

  return (
    <div className="flex items-center gap-1 lg:gap-2 bg-[#2563eb14] duration-500 hover:bg-[#1d4ed8] px-4 lg:px-5 py-2 rounded-full group cursor-pointer">
      <div className="h-8 w-8 rounded-full flex items-center justify-center bg-[#ffff] text-[#1d4ed8]">
        {industre?.icon}
      </div>{" "}
      <span className="text-[14px] lg:text-[16px] font-medium lg:font-semibold text-[#1d4ed8] group-hover:text-[#ffff] duration-500">
        {industre?.name}
      </span>
      <span className="text-[14px] lg:text-[16px] font-medium lg:font-semibold text-[#1d4ed8] group-hover:text-[#ffff] duration-500">
        ({industre?.count})
      </span>
    </div>
  );
};

export default Industri;
