import React from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import "./navigation.styles.scss";

function Navigation() {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <div>{CrownLogo}</div>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/sign-in">
            SIGN IN
          </Link>
        </div>
        <h1>I am the navigation bar</h1>
      </div>
      <Outlet />
    </>
  );
}

export default Navigation;
