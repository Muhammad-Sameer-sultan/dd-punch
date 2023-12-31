import Banner from "@/components/Banner";
import Porfolio from "@/components/Porfolio";
import Pricing from "@/components/Pricing";
import Services from "@/components/Services";
import Subcribe from "@/components/Subcribe";
import React from "react";

const PricingPage = () => {
  return (
    <>
      <Banner title="Pricing" path="pricing" />
      <Pricing  />
      <Porfolio />
      <Subcribe />
    </>
  );
};

export default PricingPage;
