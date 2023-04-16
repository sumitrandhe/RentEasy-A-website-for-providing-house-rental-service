import logo from "../../images/logo.jpg";
import { Link } from "react-router-dom";
import "./myNavbar.css";
import animation from "./animation";
import React, { useEffect, useLayoutEffect, useRef } from "react";

/* to make a few changes I used myNavbarCss */
const Navbar = ({ user }) => {
  const logo_animation = useRef();
  const nav_animation = useRef();

  useLayoutEffect(() => {
    animation(nav_animation.current);
  });

  // falsy = "", 0 false undefined null
  // {} 1 true " " " asdb "

  return (
    <nav
      ref={nav_animation}
      className="navbar navbar-expand-md  fixed-top navbar-light  px-4 shadow-lg pb-3 bg-light "
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <div ref={logo_animation}>
            <img src={logo} alt="logo" />
          </div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 " id="options">
            {!user && (
              <React.Fragment>
                <li className="nav-item block">
                  <Link className="nav-link" to="/login">
                    <button className="btn btn-sm btn-secondary fs-5">
                      Post Your Home
                    </button>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    <button className="btn btn-sm btn-secondary fs-5">
                      Login
                    </button>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">
                    <button className="btn btn-sm btn-secondary fs-5">
                      Sign Up
                    </button>
                  </Link>
                </li>
              </React.Fragment>
            )}
            {user && (
              <React.Fragment>
                <li className="nav-item">
                  <Link className="nav-link" to="/profile">
                    <button className="btn btn-md btn-light">
                      {user.name}
                    </button>
                  </Link>
                </li>
                <li className="nav-item block">
                  <Link className="nav-link" to="/postYourHome">
                    <button className="btn btn-sm btn-secondary fs-5">
                      Post Your Home
                    </button>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/logout">
                    <button className="btn btn-sm btn-secondary fs-5">
                      Logout
                    </button>
                  </Link>
                </li>
              </React.Fragment>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
