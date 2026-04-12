import React from "react";
import AboutPlatform from "../components/Abouts/AboutPlatform";
import AboutProcess from "../components/Abouts/AboutProcess";
import AboutExpertise from "../components/Abouts/AboutExpertise";
import AboutUs from "../components/Abouts/AboutUs";

const AboutPage = () => {
  return (
    <>
      <AboutExpertise />
      <AboutPlatform />
      <AboutUs />
      <AboutProcess />
    </>
  );
};

export default AboutPage;
