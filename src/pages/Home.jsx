import React from "react";
import Hero from "../components/Hero";
import OptionBtn from "../components/OptionBtn";
import TopCompanies from "../components/TopCompanies/TopCompanies";
import Categories from "../components/Categories/Categories";
import Industries from "../components/Industries/Industries";
import Works from "../components/Works/Works";
import FeaturedJobs from "../components/FeaturedJobs/FeaturedJobs";
import AboutUs from "../components/Abouts/AboutUs";
import LatestJobs from "../components/LatestJobs/LatestJobs";
import Cities from "../components/Cities/Cities";
import SuccessStories from "../components/SuccessStories/SuccessStories";
import JobsPortalApp from "../components/JobsPortalApp";
import Newsletter from "../components/Newsletter";
import Blogs from "../components/Blogs/Blogs";

const Home = () => {
  return (
    <>
      <Hero />
      <OptionBtn />
      <TopCompanies />
      <Categories />
      <Industries />
      <Works />
      <FeaturedJobs />
      <AboutUs />
      <LatestJobs />
      <Cities />
      <SuccessStories />
      <JobsPortalApp />
      <Newsletter />
      <Blogs />
    </>
  );
};

export default Home;
