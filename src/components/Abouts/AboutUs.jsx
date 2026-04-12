import React, { useState } from "react";
import videoThumbnail from "../../assets/images/video-thumbnail.jpg";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaPlay } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const AboutUs = () => {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <div className="relative about-us">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 md:gap-8 lg:gap-20 px-5 md:px-12 lg:px-20 2xl:px-60 py-8 md:py-10 lg:py-12 2xl:py-18">
        <div className="w-full lg:w-1/2">
          <span className="bg-[#1d4ed81f] text-[#047857] uppercase px-5 py-1 rounded-full text-[14px] md:text-[16px]">
            Here You Can See
          </span>

          <h1 className="font-semibold md:font-bold text-[32px] md:text-[45px] lg:text-[50px] leading-10 md:leading-12 lg:leading-14 pt-3 md:pt-4 lg:pt-5">
            Watch Our <span className="text-[#1d4ed8]">Video</span>
          </h1>

          <p className="py-3 md:py-4 lg:py-5 w-full text-[14px] md:text-[16px] text-[#64748b] text-justify">
            Aliquam vestibulum cursus felis. In iaculis iaculis sapien ac
            condimentum. Vestibulum congue posuere lacus, id tincidunt nisi
            porta sit amet. Suspendisse et sapien varius, pellentesque dui non.
          </p>

          <ul className="flex flex-col gap-2 lg:gap-3">
            <li className="flex items-center gap-2 lg:gap-3">
              <IoIosCheckmarkCircle className="text-[#1d4ed8] text-[16px] md:text-[18px]" />
              <span className="text-[#64748b] text-[14px] md:text-[16px]">
                Learn about our platform
              </span>
            </li>
            <li className="flex items-center gap-2 lg:gap-3">
              <IoIosCheckmarkCircle className="text-[#1d4ed8] text-[16px] md:text-[18px]" />
              <span className="text-[#64748b] text-[14px] md:text-[16px]">
                Discover success stories
              </span>
            </li>
            <li className="flex items-center gap-2 lg:gap-3">
              <IoIosCheckmarkCircle className="text-[#1d4ed8] text-[16px] md:text-[18px]" />
              <span className="text-[#64748b] text-[14px] md:text-[16px]">
                See how it works
              </span>
            </li>
          </ul>
        </div>

        <div className="w-full lg:w-1/2 relative group overflow-hidden rounded-2xl">
          <img
            src={videoThumbnail}
            alt="video"
            className="w-full group-hover:scale-105 duration-500"
          />
          <div className="absolute h-full w-full inset-0 flex items-center justify-center bg-[#1d4fd84f]"></div>
          <button
            onClick={() => setVideoOpen(true)}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="bg-[#ffff] p-5 rounded-full shadow-lg hover:rotate-360 duration-500">
              <FaPlay className="text-[#1d4ed8] text-[20px] md:text-[25px] lg:text-[30px]" />
            </div>
          </button>
        </div>
      </div>

      {videoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1d4fd84f]">
          <button
            onClick={() => setVideoOpen(false)}
            className="absolute top-5 right-5 text-white text-3xl"
          >
            <IoClose />
          </button>

          <div className="w-[90%] md:w-175 lg:w-225">
            <iframe
              className="w-full h-55 md:h-100 lg:h-125 rounded-xl"
              src="https://www.youtube.com/embed/s6dd_m0z4F4?autoplay=1"
              title="YouTube video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutUs;
