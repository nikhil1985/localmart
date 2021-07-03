import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="navbar-link" to="/">Home</Link>
      <Link className="navbar-link" to="/home">Home2</Link>
    </div>
  );
};

export default Navbar;
