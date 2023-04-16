import React from "react";
import Hero from "./hero/Hero";
import WhatWeDo from "./what-we-do/WhatWeDo";
import HowItWorks from "./how-it-works/HowItWorks";
import WhyUseRentEasy from "./why-use-renteasy/WhyUseRentEasy";
import MakeDifference from "./make-difference/MakeDifference";
import Footbar from "./footbar/Footbar";

const RentEasyHome = () => {
  return (
    <React.Fragment>
      <Hero />
      <WhatWeDo />
      <HowItWorks />
      <WhyUseRentEasy />
      <MakeDifference />
      <Footbar />
    </React.Fragment>
  );
};

export default RentEasyHome;
