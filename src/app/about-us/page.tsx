import About from "@/components/About";
import Banner from "@/components/Banner";
import OurMission from "@/components/OurMission";
import Porfolio from "@/components/Porfolio";
import Pricing from "@/components/Pricing";
import Subcribe from "@/components/Subcribe";
import React from "react";

const Aboutpage = () => {
  return (
    <>
      <Banner title="about us" path="about us" />
      <About />
      <OurMission />
      <Pricing />
      <Porfolio />
      <Subcribe />
    </>
  );
};

export default Aboutpage;
