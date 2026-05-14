import React, { useState } from "react";

const AddHeroImage = () => {
  const [formData, setFormData] = useState({
    subtitle: "",
    title: "",
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Hero Image Submitted Successfully!");
  };

  return (
    <div className="px-6 lg:px-8 min-h-screen bg-gray-50">
      {/* Header */}
      <div className="py-6">
        <h1 className="text-2xl font-bold text-gray-800">Add Hero Section</h1>
        <p className="text-gray-500 mt-1">
          Upload hero content for your job portal homepage
        </p>
      </div>

      {/* Form */}
      <div className="bg-white max-w-3xl mx-auto p-6 rounded-xl shadow-sm">
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Subtitle */}
          <div>
            <label className="block text-gray-600 mb-1">Subtitle</label>
            <input
              type="text"
              name="subtitle"
              value={formData.subtitle}
              onChange={handleChange}
              placeholder="Enter subtitle..."
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Title */}
          <div>
            <label className="block text-gray-600 mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter title..."
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-600 mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter description..."
              rows="4"
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            ></textarea>
          </div>

          {/* Image */}
          <div>
            <label className="block text-gray-600 mb-1">Hero Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full border p-2 rounded-lg bg-white"
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg transition"
          >
            Save Hero Section
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddHeroImage;
