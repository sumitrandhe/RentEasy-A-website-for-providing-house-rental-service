import { useLayoutEffect } from "react";
import AOS from "aos";
import "./makeDifference.css";

const MakeDifference = () => {
  useLayoutEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section className="make-difference" data-aos="fade-up">
      <h2 className="make-diff-heading">What Changes We Bring</h2>
      <div className="container">
        <div className=" diff-block">Brokerage Eliminated</div>
        <div className=" diff-block">Customer Connected</div>
        <div className=" diff-block">New Listing Daily</div>
      </div>
    </section>
  );
};

export default MakeDifference;
