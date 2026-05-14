import React, { useState } from "react";
import { FaSearch, FaEye, FaEdit, FaTrash } from "react-icons/fa";

const AllBlogs = () => {
  const [search, setSearch] = useState("");

  const blogs = [
    {
      id: 1,
      title: "How to Crack Frontend Interview",
      author: "Admin",
      category: "Career Tips",
      status: "Published",
      date: "10 May 2026",
    },
    {
      id: 2,
      title: "Top 10 React Interview Questions",
      author: "HR Team",
      category: "React",
      status: "Draft",
      date: "08 May 2026",
    },
    {
      id: 3,
      title: "Best Resume Writing Tips",
      author: "Admin",
      category: "Guides",
      status: "Published",
      date: "05 May 2026",
    },
    {
      id: 4,
      title: "Remote Job Strategies 2026",
      author: "HR Team",
      category: "Remote Jobs",
      status: "Published",
      date: "02 May 2026",
    },
  ];

  const filteredBlogs = blogs.filter(
    (b) =>
      b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.category.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="px-6 lg:px-8 min-h-screen bg-gray-50">
      {/* Header */}
      <div className="py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">All Blogs</h1>
          <p className="text-gray-500">Manage blog posts for job portal</p>
        </div>

        {/* Search */}
        <div className="relative w-full md:w-80">
          <FaSearch className="absolute top-3 left-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search blogs..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white shadow-sm rounded-xl overflow-y-auto">
        <table className="w-full text-left">
          {/* Head */}
          <thead className="bg-gray-100 text-gray-600 text-sm">
            <tr>
              <th className="p-3">Title</th>
              <th className="p-3">Author</th>
              <th className="p-3">Date</th>
              <th className="p-3">Status</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {filteredBlogs.map((blog) => (
              <tr key={blog.id} className="border-b hover:bg-gray-50">
                {/* Title */}
                <td className="p-3 font-medium text-gray-800">{blog.title}</td>

                {/* Author */}
                <td className="p-3 text-gray-600">{blog.author}</td>

                {/* Date */}
                <td className="p-3 text-gray-600">{blog.date}</td>

                {/* Status */}
                <td className="p-3">
                  <span
                    className={`px-3 py-1 text-xs rounded-full font-medium
                    ${
                      blog.status === "Published"
                        ? "bg-green-100 text-green-600"
                        : "bg-yellow-100 text-yellow-600"
                    }
                  `}
                  >
                    {blog.status}
                  </span>
                </td>

                {/* Actions */}
                <td className="p-3">
                  <div className="flex justify-center gap-3 text-gray-600">
                    <button className="hover:text-blue-500">
                      <FaEye />
                    </button>

                    <button className="hover:text-green-500">
                      <FaEdit />
                    </button>

                    <button className="hover:text-red-500">
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {filteredBlogs.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center p-6 text-gray-500">
                  No blogs found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBlogs;
