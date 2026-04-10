import { FaBriefcase } from "react-icons/fa";
import HeroImage from "../assets/images/hero-image.png";
import { IoMdSearch } from "react-icons/io";
import { Link } from "react-router";

const Hero = () => {
  return (
    <div className="hero px-5 md:px-12 lg:px-20 2xl:px-60 py-10 md:py-20 lg:py-0 h-full lg:h-[91vh] 2xl:h-[90vh] flex lg:flex-row flex-col gap-10 md:gap-15 lg:gap-0 items-center justify-between group">
      <div className="w-full lg:w-1/2">
        <span className="bg-[#1d4ed81f] text-[#047857] uppercase px-5 py-1 rounded-full text-[14px] md:text-[16px]">
          Ready to Find Your Dream Job?
        </span>
        <h1 className="font-semibold md:font-bold text-[32px] md:text-[45px] lg:text-[50px] leading-10 md:leading-12 lg:leading-14 pt-3 md:pt-4 lg:pt-5">
          Take the next step in your career journey.
        </h1>
        <p className="py-3 md:py-4 lg:py-5 w-full md:w-[70%] lg:w-[80%] text-[14px] md:text-[16px] text-[#64748b]">
          Explore opportunities that match your skills and passions, and land
          the job you've always wanted with JobsPortal.
        </p>
        <div className="flex items-center gap-1 md:gap-2 bg-[#ffff] h-12 md:h-15 lg:h-17 w-full lg:w-[80%] p-1 lg:p-2.5 rounded-2xl">
          <div className="bg-gray-50 flex items-center gap-2 lg:gap-3 h-full w-[70%] rounded-md px-4">
            <IoMdSearch className="text-[22px] lg:text-[25px] text-gray-500" />
            <input
              type="text"
              placeholder="Enter skills or job title"
              className="w-full h-full focus:outline-0"
            />
          </div>
          <div className="bg-[#1d4ed8] hover:bg-[#05af44] duration-500 text-[#ffff] h-full flex items-center justify-center w-[30%] rounded-md text-[14px] md:text-[16px]">
            <button>Search</button>
          </div>
        </div>
        <div className="pt-3 md:pt-4 lg:pt-5 flex items-center gap-5 md:gap-6 lg:gap-10">
          <div className="px-5 md:px-6 lg:px-7 py-2 bg-[#ecfeff] rounded-2xl border border-[#0ea4e941]">
            <h1 className="font-medium md:font-semibold lg:font-bold text-[20px] text-[#0ea5e9] leading-5">
              50K+
            </h1>
            <p className="text-[14px] md:text-[16px] text-[#0f172a]">
              Active Jobs
            </p>
          </div>
          <Link className="flex items-center gap-3" to={""}>
            <FaBriefcase className="text-[#1d4ed8]" />
            <span className="text-[#0ea5e9] hover:text-[#038bca] duration-500 text-[14px] md:text-[16px]">
              Post Your Job
            </span>
          </Link>
          <Link
            className="text-[#0ea5e9] hover:text-[#038bca] duration-500 text-[14px] md:text-[16px]"
            to={""}
          >
            Search Jobs
          </Link>
        </div>
      </div>
      <div className="w-full lg:w-1/2 group-hover:-translate-y-2 duration-500">
        <img src={HeroImage} alt="" />
      </div>
    </div>
  );
};

export default Hero;
