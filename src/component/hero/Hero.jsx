import React, { useEffect, useState, useLayoutEffect, useRef } from "react";
import ReactTyped from "react-typed";
import ImgWithFallback from "../common/ImgWithFallback";
import animation from "./hero-animation.js";
import home_3x from "../../images/home-3x.jpg";
import home_2x from "../../images/home-2x.jpg";
import home_1x from "../../images/home-1x.jpg";
import bike_3x from "../../images/bike-3x.jpg";
import bike_2x from "../../images/bike-2x.jpg";
import bike_1x from "../../images/bike-1x.jpg";
import Button from "../button/button";
import "./hero.css";
import { Link } from "react-router-dom";

function Hero() {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const hero_heading = useRef();
  const btn_animation = [];

  useLayoutEffect(() => {
    animation(hero_heading.current, btn_animation);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenSize(window.innerWidth);
    });
    return window.removeEventListener("resize", () => {
      setScreenSize(window.innerWidth);
    });
  });

  return (
    <section className="hero-section">
      <div className="hero">
        <div className="hero-img-block">
          <ImgWithFallback
            src={[bike_1x, bike_2x, bike_3x]}
            media={["", "(min-width : 500px)", "(min-width : 1024px)"]}
            alt="bike image"
          />{" "}
        </div>
        <div className="hero-img-block">
          <ImgWithFallback
            src={[home_1x, home_2x, home_3x]}
            media={["", "(min-width : 500px)", "(min-width : 1024px)"]}
            alt="home image"
          />
        </div>
      </div>
      <div className="hero-content">
        <div className="block">
          <h1>
            <div ref={hero_heading}>RentEasy</div>
          </h1>
          <p>
            This is the place where renting is{" "}
            <span>
              <ReactTyped
                strings={["easy", "safe"]}
                typeSpeed={200}
                backSpeed={150}
                loop
              />
            </span>
          </p>
          <div className="btn-box">
            <div>
              <div ref={(e) => btn_animation.push(e)}>
                <Button
                  size={screenSize < 768 ? "btn" : "btn-large"}
                  color="btn-primary"
                  text="Vehicles"
                />
              </div>
            </div>
            <div>
              <div ref={(e) => btn_animation.push(e)}>
                <Link to="/homes">
                  <Button
                    size={screenSize < 768 ? "btn" : "btn-large"}
                    color="btn-primary"
                    text="Homes"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
