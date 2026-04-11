import React from "react";
import { MdEmail } from "react-icons/md";

const Newsletter = () => {
  return (
    <div className="px-5 md:px-12 lg:px-20 2xl:px-60 py-8 md:py-10 lg:py-12 2xl:py-18 newsletter flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-20">
      <div className="w-full lg:w-1/2">
        <span className="bg-[#1d4ed81f] text-[#047857] uppercase px-5 py-1 rounded-full text-[14px] md:text-[16px]">
          Stay in the loop
        </span>
        <h1 className="font-semibold md:font-bold text-[25px] md:text-[30px] lg:text-[35px] leading-8 md:leading-10 lg:leading-12 pt-1 lg:pt-2">
          Subscribe To Our Newsletter
        </h1>
        <p className="pt-1 md:pt-2 text-[14px] md:text-[16px] text-[#64748b]">
          Get the latest jobs, hiring trends, and tips delivered directly to
          your inbox.
        </p>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col gap-2 lg:gap-3">
        <div className="w-full bg-[#ffff] h-12 md:h-14 lg:h-16 flex items-center rounded-full border border-[#d6d4d4]">
          <div className="w-[15%] h-full flex items-center justify-center bg-[#f0f0f0] rounded-l-full">
            <MdEmail className="text-[22px] md:text-[24px] lg:text-[26px] 2xl:text-[28px] text-[#1d4ed8]" />
          </div>
          <input
            className="w-[60%] h-full focus:outline-0 px-4"
            type="email"
            placeholder="Enter your email"
          />
          <button className="w-[25%] h-full bg-[#1d4ed8] hover:bg-[#003ad8] text-[#ffff]  rounded-r-full">
            Subscribe
          </button>
        </div>
        <p className="text-[14px] md:text-[16px] text-[#64748b]">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
};

export default Newsletter;
