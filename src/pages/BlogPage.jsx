import React, { useEffect, useState } from "react";
import Blog from "../components/Blogs/Blog";
import { FaRegClock } from "react-icons/fa";
import { SiTrendmicro } from "react-icons/si";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(`/blogs.json`)
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div>
      <div className="blog-hero px-5 md:px-12 lg:px-20 2xl:px-60 py-8 md:py-10 lg:py-12 2xl:py-18 flex flex-col lg:flex-row justify-between items-center gap-10 md:gap-15 lg:gap-16">
        <div className="w-full lg:w-[60%]">
          <p
            data-aos="zoom-in-down"
            className="bg-[#1d4ed81f] inline-block text-[#047857] uppercase px-5 py-1 rounded-full text-[14px] md:text-[16px]"
          >
            Playbook
          </p>
          <h1
            data-aos="zoom-in-down"
            className="font-semibold text-[30px] md:text-[42px] lg:text-[45px] leading-10 md:leading-12 lg:leading-14 pt-3 lg:pt-3"
          >
            Full-width stories built for strategy deep dives.
          </h1>
          <p
            data-aos="zoom-in-down"
            className="pt-3 md:pt-4 lg:pt-5 w-full md:w-[70%] lg:w-[80%] text-[14px] md:text-[16px] text-[#64748b]"
          >
            Quarterly research, interviews, and frameworks from operators
            scaling people-first companies.
          </p>
        </div>
        <div className="w-full lg:w-[40%]">
          <div className="p-6 w-full bg-[#0f172a] rounded-2xl">
            <h2
              data-aos="zoom-in-down"
              className="text-[14px] md:text-[17px] lg:text-[18px] font-medium uppercase text-[#ffffffa2]"
            >
              Latest drop
            </h2>
            <h2
              data-aos="zoom-in-down"
              className="text-[#ffff] text-[22px] md:text-[25px] lg:text-[28px] leading-7 md:leading-8 lg:leading-9 py-2 lg:py-3"
            >
              The 90 day culture reset: rituals that stick with hybrid teams
            </h2>
            <div className="flex items-center gap-4 md:gap-5 lg:gap-6">
              <p
                data-aos="zoom-in-down"
                className="flex items-center gap-1 lg:gap-2 text-[14px] md:text-[16px] text-[#ffffffa2]"
              >
                <FaRegClock />
                <span>11 min read</span>
              </p>
              <p
                data-aos="zoom-in-down"
                className="flex items-center gap-1 lg:gap-2 text-[14px] md:text-[16px] text-[#ffffffa2]"
              >
                <SiTrendmicro />
                <span>trending</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-5 md:px-12 lg:px-20 2xl:px-60 py-8 md:py-10 lg:py-12 2xl:py-18 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-5 2xl:gap-6">
        {blogs?.map((blog, index) => (
          <Blog key={index} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
