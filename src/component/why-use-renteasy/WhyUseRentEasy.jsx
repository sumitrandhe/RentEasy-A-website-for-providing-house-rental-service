import AOS from "aos";
import { useLayoutEffect } from "react";
import avoidBroker from "../../images/avoidBroker.jpg";
import listing from "../../images/listing.jpg";
import shortList from "../../images/shortList.jpg";
import "./whyUse.css";
const WhyUseRentEasy = () => {
  useLayoutEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="why-use" data-aos="fade-up">
      <h2 className="why-use-heading">Why Use RentEasy</h2>
      <div className="container">
        <img src={avoidBroker} alt="" className="img avoid-broker" />
        <img src={listing} alt="" className="img" />
        <img src={shortList} alt="" className="img" />
      </div>
    </div>
  );
};

export default WhyUseRentEasy;
