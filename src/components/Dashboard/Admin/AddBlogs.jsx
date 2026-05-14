import React, { useState } from "react";

const AddBlogs = () => {
  const [formData, setFormData] = useState({
    tag: "",
    title: "",
    description: "",
    image: "",
    date: "",
    readTime: "",
    authorName: "",
    authorRole: "",
    authorImage: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Blog Data:", formData);

    // এখানে API/Firebase/MongoDB POST request দিবে
    alert("Blog added successfully!");

    setFormData({
      tag: "",
      title: "",
      description: "",
      image: "",
      date: "",
      readTime: "",
      authorName: "",
      authorRole: "",
      authorImage: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-6">Add New Blog</h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {/* Tag */}
          <input
            type="text"
            name="tag"
            placeholder="Blog Tag (e.g. Leadership)"
            value={formData.tag}
            onChange={handleChange}
            className="border p-3 rounded-lg"
            required
          />

          {/* Date */}
          <input
            type="text"
            name="date"
            placeholder="Date (e.g. 15 Sep)"
            value={formData.date}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />

          {/* Title */}
          <input
            type="text"
            name="title"
            placeholder="Blog Title"
            value={formData.title}
            onChange={handleChange}
            className="border p-3 rounded-lg md:col-span-2"
            required
          />

          {/* Image */}
          <input
            type="text"
            name="image"
            placeholder="Blog Image URL"
            value={formData.image}
            onChange={handleChange}
            className="border p-3 rounded-lg md:col-span-2"
          />

          {/* Read Time */}
          <input
            type="text"
            name="readTime"
            placeholder="Read Time (e.g. 5 min read)"
            value={formData.readTime}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />

          {/* Author Name */}
          <input
            type="text"
            name="authorName"
            placeholder="Author Name"
            value={formData.authorName}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />

          {/* Author Role */}
          <input
            type="text"
            name="authorRole"
            placeholder="Author Role"
            value={formData.authorRole}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />

          {/* Author Image */}
          <input
            type="text"
            name="authorImage"
            placeholder="Author Image URL"
            value={formData.authorImage}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />

          {/* Description */}
          <textarea
            name="description"
            placeholder="Blog Description"
            value={formData.description}
            onChange={handleChange}
            rows="5"
            className="border p-3 rounded-lg md:col-span-2"
            required
          />

          {/* Submit */}
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded-lg md:col-span-2 hover:bg-blue-700 transition"
          >
            Publish Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBlogs;
