import React from "react";
import logo from "../images/logo color.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="gradient-background">
      <div className="center-items">
        <div className="logo-background">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <Link to={"/menu"} className="link">
          <h1 className="emphasize">Menu</h1>
        </Link>
        <Link to={"/about"} className="link">
          <h1 className="emphasize">About</h1>
        </Link>
        <Link to={"/terms"} className="link">
          <h1 className="emphasize">Terms & Conditions</h1>
        </Link>
      </div>
    </div>
  );
}

export default Home;
