import React from "react";
import error from "../assets/images/error404.gif";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="h-screen w-full px-5 md:px-12 lg:px-20 2xl:px-60 flex flex-col items-center justify-center text-center">
      <img className="h-80 md:h-100 lg:h-120" src={error} alt="" />
      <div>
        <h1 className="text-[#1d4ed8] font-semibold md:font-bold text-[40px] md:text-[50px] lg:text-[80px] leading-10 md:leading-15 lg:leading-18">
          404
        </h1>
        <h4 className="text-[#000000] text-[20px] md:text-[25px] lg:text-[30px] font-medium lg:font-semibold">
          You found an empty desk.
        </h4>
        <p className="text-[14px] md:text-[16px] text-[#64748b] pb-4 md:pb-5 lg:pb-6">
          The page you're looking for has moved on to a new role. Let's get you
          back to the right opportunity.
        </p>
        <Link
          className="bg-[#1d4ed8] hover:bg-[#003ad8] duration-500 py-1.5 md:py-2 lg:py-3 px-6 md:px-8 lg:px-10 rounded-full text-[#ffff] text-[14px] md:text-[16px]"
          to={"/"}
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
