import React, { useState } from "react";
import { FaSearch, FaTrash, FaEye, FaBan } from "react-icons/fa";

const AllUser = () => {
  const [search, setSearch] = useState("");

  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: "Job Seeker",
      status: "Active",
    },
    {
      id: 2,
      name: "Sarah Khan",
      email: "sarah@example.com",
      role: "Recruiter",
      status: "Active",
    },
    {
      id: 3,
      name: "Rahim Uddin",
      email: "rahim@example.com",
      role: "Job Seeker",
      status: "Blocked",
    },
    {
      id: 4,
      name: "Emily Rose",
      email: "emily@example.com",
      role: "Recruiter",
      status: "Active",
    },
  ];

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="px-6 lg:px-8 min-h-screen bg-gray-50">
      {/* Header */}
      <div className="py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">All Users</h1>
          <p className="text-gray-500">Manage job seekers and recruiters</p>
        </div>

        {/* Search */}
        <div className="relative w-full md:w-80">
          <FaSearch className="absolute top-3 left-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search users..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white shadow-sm rounded-xl overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100 text-gray-600 text-sm">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Role</th>
              <th className="p-3">Status</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id} className="border-b hover:bg-gray-50">
                <td className="p-3 font-medium">{user.name}</td>
                <td className="p-3 text-gray-600">{user.email}</td>

                {/* Role */}
                <td className="p-3">
                  <span className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-600">
                    {user.role}
                  </span>
                </td>

                {/* Status */}
                <td className="p-3">
                  <span
                    className={`px-3 py-1 text-xs rounded-full ${
                      user.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>

                {/* Actions */}
                <td className="p-3">
                  <div className="flex justify-center gap-3 text-gray-600">
                    <button className="hover:text-blue-500">
                      <FaEye />
                    </button>

                    <button className="hover:text-yellow-500">
                      <FaBan />
                    </button>

                    <button className="hover:text-red-500">
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {filteredUsers.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center p-6 text-gray-500">
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
