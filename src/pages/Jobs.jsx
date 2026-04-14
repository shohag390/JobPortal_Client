import React, { useEffect, useState } from "react";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaList } from "react-icons/fa";
import Job from "../components/LatestJobs/Job";
import { IoMdClose, IoMdMenu, IoMdSearch } from "react-icons/io";

const jobType = [
  { type: "Full Time/Permanent", count: 12 },
  { type: "Contract", count: 33 },
  { type: "Part Time", count: 18 },
  { type: "Internship", count: 11 },
  { type: "Freelance", count: 9 },
];

const location = [
  { name: "Fairbanks", count: 8 },
  { name: "Bessemer", count: 6 },
  { name: "Barrington", count: 4 },
  { name: "Durant", count: 3 },
  { name: "Blaine", count: 2 },
];

const industry = [
  { name: "Information Technology", count: 22 },
  { name: "Advertising/PR", count: 15 },
  { name: "Media & Communications", count: 13 },
  { name: "Fashion", count: 9 },
  { name: "Health & Fitness", count: 7 },
];

const salaryRange = [
  { range: "$2k - $4k", count: 12 },
  { range: "$4k - $6k", count: 9 },
  { range: "$6k - $10k", count: 6 },
  { range: "$10k - $15k", count: 4 },
  { range: "$15k+", count: 3 },
];

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [grid, setGrid] = useState("grid");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetch(`/latest-jobs.json`)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div>
      {/* Top Text & Search */}
      <div className="px-5 md:px-12 lg:px-20 2xl:px-60 py-8 md:py-10 lg:py-12 2xl:py-18 contact-banner flex flex-col justify-center items-center">
        <div className="w-full lg:w-[70%]">
          <span className="bg-[#1d4ed81f] text-[#047857] uppercase px-5 py-1 rounded-full text-[14px] md:text-[16px]">
            Browse Opportunities
          </span>
          <h1 className="font-semibold text-[30px] md:text-[42px] lg:text-[45px] leading-10 md:leading-12 lg:leading-14 pt-3 lg:pt-3">
            Find a role that matches your ambition
          </h1>
          <p className="pt-2 md:pt-3 lg:pt-4 pb-5 md:pb-6 lg:pb-7 2xl:pb-8 w-full md:w-[70%] lg:w-[80%] text-[14px] md:text-[16px] text-[#64748b]">
            Search thousands of curated openings across industries, experience
            levels, and locations.
          </p>

          <div className="flex items-center gap-1 md:gap-2 bg-[#ffff] h-12 md:h-15 lg:h-17 w-full lg:w-[80%] p-1 lg:p-2.5 rounded-2xl">
            <div className="bg-gray-50 flex items-center gap-2 lg:gap-3 h-full w-[70%] rounded-md px-4">
              <IoMdSearch className="text-[22px] lg:text-[25px] text-gray-500" />
              <input
                type="text"
                placeholder="Job title, keyword or company"
                className="w-full h-full focus:outline-0"
              />
            </div>
            <div className="bg-[#1d4ed8] hover:bg-[#003ad8] duration-500 text-[#ffff] h-full flex items-center justify-center w-[30%] rounded-md text-[14px] md:text-[16px]">
              <button>Search</button>
            </div>
          </div>
        </div>
      </div>

      {/* Left Site Button */}
      <div className="px-5 md:px-12 lg:px-20 2xl:px-60 py-8 md:py-10 lg:py-12 2xl:py-18 lg:flex lg:items-start lg:gap-8">
        <div className="hidden lg:flex lg:flex-col gap-3 md:gap-4 lg:gap-5 2xl:gap-6 w-[25%]">
          {/* Button Contaner One */}
          <div className="p-6 companie-card border bg-[#ffff] border-[#cccccc5d] rounded-2xl">
            <h4 className="font-medium text-[18px] pb-3">Job Type</h4>
            <ul className="flex flex-col gap-2">
              {jobType?.map((item, index) => (
                <li
                  className="bg-[#3b82f629] hover:bg-[#1d4ed8] hover:text-[#ffff] duration-500 rounded-2xl px-4 py-1"
                  key={index}
                >
                  <button className="w-full flex items-center justify-between">
                    <p className="">{item?.type}</p>
                    <p className="py-0.5 rounded-2xl">{item?.count}</p>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Button Contaner Two */}
          <div className="p-6 companie-card border bg-[#ffff] border-[#cccccc5d] rounded-2xl">
            <h4 className="font-medium text-[18px] pb-3">Location</h4>
            <ul className="flex flex-col gap-2">
              {location?.map((item, index) => (
                <li
                  className="bg-[#3b82f629] hover:bg-[#1d4ed8] hover:text-[#ffff] duration-500 rounded-2xl px-4 py-1"
                  key={index}
                >
                  <button className="w-full flex items-center justify-between">
                    <p className="">{item?.name}</p>
                    <p className="py-0.5 rounded-2xl">{item?.count}</p>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          {/* Button Contaner Three */}
          <div className="p-6 companie-card border bg-[#ffff] border-[#cccccc5d] rounded-2xl">
            <h4 className="font-medium text-[18px] pb-3">Industry</h4>
            <ul className="flex flex-col gap-2">
              {industry?.map((item, index) => (
                <li
                  className="bg-[#3b82f629] hover:bg-[#1d4ed8] hover:text-[#ffff] duration-500 rounded-2xl px-4 py-1"
                  key={index}
                >
                  <button className="w-full flex items-center justify-between">
                    <p className="">{item?.name}</p>
                    <p className="py-0.5 rounded-2xl">{item?.count}</p>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          {/* Button Contaner Four */}
          <div className="p-6 companie-card border bg-[#ffff] border-[#cccccc5d] rounded-2xl">
            <h4 className="font-medium text-[18px] pb-3">Salary Range</h4>
            <ul className="flex flex-col gap-2">
              {salaryRange?.map((item, index) => (
                <li
                  className="bg-[#3b82f629] hover:bg-[#1d4ed8] hover:text-[#ffff] duration-500 rounded-2xl px-4 py-1"
                  key={index}
                >
                  <button className="w-full flex items-center justify-between">
                    <p className="">{item?.range}</p>
                    <p className="py-0.5 rounded-2xl">{item?.count}</p>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Site */}
        <div className="w-full lg:w-[75%]">
          {/* Right Site Top */}
          <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-5 lg:gap-0 pb-4 md:pb-6 lg:pb-8">
            <div>
              <h4 className="font-medium lg:font-semibold 2xl:font-bold text-[18px] md:text-[20px] lg:text-[25px]">
                18 Jobs Found
              </h4>
              <p className="text-[14px] md:text-[16px] text-[#64748b]">
                Showing 1-18 of 18 results
              </p>
            </div>
            <div className="flex items-center gap-4 lg:gap-6">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setGrid("grid")}
                  className={`${grid === "grid" ? "bg-[#1d4ed8] text-[#ffff]" : "bg-[#3b82f629]"} h-8 md:h-9 lg:h-10 w-8 md:w-9 lg:w-10 hover:bg-[#1d4ed8] hover:text-[#ffff] duration-500 flex items-center justify-center rounded-lg`}
                >
                  <BsFillGrid3X3GapFill className="text-[20px]" />
                </button>
                <button
                  onClick={() => setGrid("list")}
                  className={`${grid === "list" ? "bg-[#1d4ed8] text-[#ffff]" : "bg-[#3b82f629]"} h-8 md:h-9 lg:h-10 w-8 md:w-9 lg:w-10 hover:bg-[#1d4ed8] hover:text-[#ffff] duration-500 flex items-center justify-center rounded-lg`}
                >
                  <FaList className="text-[20px]" />
                </button>
              </div>
              <select className="h-8 md:h-9 lg:h-10 border border-[#cccccc5d] focus:outline-0 rounded-lg px-2">
                <option>Most recent</option>
                <option>Most recent</option>
                <option>Salary (High ti Low)</option>
                <option>Salary (Low ti High)</option>
                <option>Featured</option>
              </select>
            </div>
          </div>

          {/* Jobs */}
          <div
            className={`${grid === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"} grid  gap-3 md:gap-4 lg:gap-5 2xl:gap-6`}
          >
            {jobs?.map((job) => (
              <Job key={job?.id} job={job} grid={grid} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
