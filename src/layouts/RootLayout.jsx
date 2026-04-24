import React, { useEffect } from "react";
import Navbar from "../shared/Navbar";
import { Outlet } from "react-router";
import Footer from "../shared/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const RootLayout = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
