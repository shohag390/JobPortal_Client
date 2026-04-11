import image1 from "./../assets/images/app-screens.png";
import image2 from "./../assets/images/apple-btn.png";
import image3 from "./../assets/images/andriod-btn.png";

const JobsPortalApp = () => {
  return (
    <div className="px-5 md:px-12 lg:px-20 2xl:px-60 pt-8 md:pt-10 lg:pt-12 2xl:pt-18 flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-15">
      <div className="w-full lg:w-1/2">
        <img src={image1} alt="" />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <h4 className="text-[#1d4ed8] text-[16px] md:text-[18px] lg:text-[20px] md:font-medium">
          Step Forword Now
        </h4>
        <h1 className="text-[#000000] text-[20px] md:text-[25px] lg:text-[30px] font-medium lg:font-semibold leading-5 md:leading-8 lg:leading-9">
          The JobsPortal APP
        </h1>
        <h4 className="text-[#000000] text-[20px] md:text-[22px] lg:text-[24px] font-medium lg:font-semibold pb-3 md:pb-4 lg:pb-5">
          A world of oppertunity in your hand
        </h4>
        <p className="text-[14px] md:text-[16px] text-[#64748b] pb-3 md:pb-4 lg:pb-5 text-justify">
          Aliquam vestibulum cursus felis. In iaculis iaculis sapien ac
          condimentum. Vestibulum congue posuere lacus, id tincidunt nisi porta
          sit amet. Suspendisse et sapien varius, pellentesque dui non, semper
          orci. Curabitur blandit, diam ut ornare ultricies.
        </p>
        <div className="flex items-center gap-3 md:gap-4 lg:gap-5 pb-8 md:pb-12 lg:pb-0">
          <img className="h-10 md:h-13 lg:h-15" src={image2} alt="app-image" />
          <img className="h-10 md:h-13 lg:h-15" src={image3} alt="app-image" />
        </div>
      </div>
    </div>
  );
};

export default JobsPortalApp;
