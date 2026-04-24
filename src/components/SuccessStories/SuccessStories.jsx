import { useEffect, useState } from "react";
import SectionHeader from "../../shared/SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";

const SuccessStories = () => {
  const [successStories, setSuccessStories] = useState([]);

  useEffect(() => {
    fetch(`/success-stories.json`)
      .then((res) => res.json())
      .then((data) => setSuccessStories(data));
  }, []);

  return (
    <div className="px-5 md:px-12 lg:px-20 2xl:px-60 py-8 md:py-10 lg:py-12 2xl:py-18 success-stories">
      <SectionHeader
        subTitle={"Stories from our community"}
        title={"Success Stories"}
      />

      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
          }}
          modules={[Pagination]}
          className="mySwiper h-[34vh]"
        >
          {successStories?.map((user) => (
            <SwiperSlide key={user?.id}>
              <div
                data-aos="flip-left"
                className="bg-[#ffff] p-6 rounded-2xl cursor-pointer"
              >
                <div className="pb-3 md:pb-4 lg:pb-5">
                  <FaQuoteLeft className="text-[25px] md:text-[30px] lg:text-[35px] text-[#1d4ed8]" />
                </div>
                <p className="text-justify line-clamp-3">{user?.review}</p>
                <div className="pt-3 md:pt-4 lg:pt-5 flex items-center gap-2 md:gap-3 lg:gap-4">
                  <img
                    className="h-12 md:h-13 lg:h-14 w-12 md:w-14 lg:w-14 rounded-full"
                    src={user?.image}
                    alt=""
                  />
                  <div>
                    <h6 className="text-[14px] md:text-[16px] font-medium lg:font-semibold">
                      {user?.name}
                    </h6>
                    <p className="text-[14px] md:text-[16px] text-[#64748b]">
                      {user?.role}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SuccessStories;
