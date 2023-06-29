import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Header = () => {
  const navTextDefault = {
    color: "white",
    textDecoration: "none",
  };

  return (
    <nav>
      <Link style={navTextDefault} to="/">
        <h3>Logo</h3>
      </Link>
      <ul className="nav-links">
        <Link style={navTextDefault} to="/shop">
          <li>Shop</li>
        </Link>
        <Link style={navTextDefault} to="/about">
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Header;
