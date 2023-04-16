import AOS from "aos";
import { useLayoutEffect } from "react";
import Block from "../common/Block";
import whatYouNeed from "../../images/selectWhatYouNeed.jpg";
import getDetails from "../../images/getOwnerDetails.jpg";
import getKeys from "../../images/getKeys.jpg";
import BuildingBlock from "./BuildingBlock";

import "./howItWorks.css";

const HowItWorks = () => {
  useLayoutEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section className="how-it-works" data-aos="fade-up">
      <h1 className="how-work-heading">How It Wroks</h1>
      <div className="container">
        <BuildingBlock
          className="first-step"
          reverseOrder={false}
          number={1}
          img={whatYouNeed}
          heading="Select What You Need"
          content="All the homes and bikes will be shown according to the city
                        that you selected"
        />
        <BuildingBlock
          className="docs"
          aos="flip-left"
          reverseOrder={true}
          number="2"
          img={getDetails}
          heading="Get the Dealer Contact Details"
          content="No broker in between, you will contact the dealer directly "
        />
        <BuildingBlock
          className="hooray"
          reverseOrder={false}
          number="3"
          img={getKeys}
          heading="Collect your key"
          content="Fix the meeting with the dealer and get you key. 😍"
        />
      </div>
    </section>
  );
};

export default HowItWorks;
