import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <button>awe yiss</button>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/info">Info</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default NavBar;
