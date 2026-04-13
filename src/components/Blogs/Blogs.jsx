import React, { useEffect, useState } from "react";
import SectionHeader from "../../shared/SectionHeader";
import Blog from "./Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(`/blogs.json`)
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const sliceBlog = blogs?.slice(0, 3);

  return (
    <div className="px-5 md:px-12 lg:px-20 2xl:px-60 py-8 md:py-10 lg:py-12 2xl:py-18">
      <SectionHeader subTitle={"Our Blog"} title={"Latest Blog Posts"} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-5 2xl:gap-6">
        {sliceBlog?.map((blog, index) => (
          <Blog key={index} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
