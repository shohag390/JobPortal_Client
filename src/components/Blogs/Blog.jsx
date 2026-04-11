import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router";

const Blog = ({ blog }) => {
  return (
    <div className="companie-card border bg-[#ffff] border-[#cccccc5d] rounded-2xl hover:-translate-y-1 duration-500 cursor-pointer">
      <div>
        <img src={blog?.image} alt="blog-img" />
        <span>{blog?.category}</span>
      </div>
      <div className="p-6">
        <p>
          {blog?.date} . {blog?.read_time}
        </p>
        <h2>{blog?.title}</h2>
        <p>{blog?.description}</p>
        <div>
          <div>
            <img src={blog?.author?.user} alt="" />
            <div>
              <h6 className="text-[14px] md:text-[16px] font-medium lg:font-semibold">
                {blog?.author?.name}
              </h6>
              <p className="text-[14px] md:text-[16px] text-[#64748b]">
                {blog?.author?.role}
              </p>
            </div>
          </div>
          <div>
            <Link to={""}>
              <span>Read Article</span>
              <IoIosArrowRoundForward />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
