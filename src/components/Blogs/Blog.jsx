import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router";

const Blog = ({ blog }) => {
  return (
    <div
      style={{
        transition: ".5s",
      }}
      data-aos="fade-up"
      className="companie-card border bg-[#ffff] border-[#cccccc5d] rounded-2xl hover:-translate-y-1  cursor-pointer overflow-hidden"
    >
      <div className="h-55 md:h-60 lg:h-70 w-full relative">
        <img
          className="h-full w-full absolute"
          src={blog?.image}
          alt="blog-img"
        />
        <div className="h-full w-full absolute p-6">
          <span className="bg-[#1046db] text-[#ffff] py-1 px-5 md:px-6 lg:px-7 rounded-full">
            {blog?.category}
          </span>
        </div>
      </div>
      <div className="px-6 pb-6 pt-4">
        <p className="text-[14px] md:text-[16px] text-[#64748b]">
          {blog?.date} . {blog?.read_time}
        </p>
        <h2 className="pt-1 text-justify font-medium lg:font-semibold 2xl:font-bold text-[16px] lg:text-[18px] line-clamp-2">
          {blog?.title}
        </h2>
        <p className="text-[14px] md:text-[16px] text-[#64748b] text-justify py-2 md:py-3 lg:py-4">
          {blog?.description}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 lg:gap-3">
            <img
              className="h-14 lg:h-16 w-14 lg:w-16 flex items-center justify-center rounded-full"
              src={blog?.author?.user}
              alt=""
            />
            <div>
              <h6 className="text-[14px] md:text-[16px] font-medium lg:font-semibold">
                {blog?.author?.name}
              </h6>
              <p className="text-[14px] md:text-[16px] text-[#64748b]">
                {blog?.author?.role}
              </p>
            </div>
          </div>
          <div className="">
            <Link
              className="flex items-center gap-1 text-[#1d4ed8] group"
              to={""}
            >
              <span>Read Article</span>
              <IoIosArrowRoundForward className="group-hover:translate-x-1 duration-500" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
