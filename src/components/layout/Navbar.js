import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom"

const Navbar = ({ icon, title }) => {
  return (
    <nav className="bg-primary navbar">
      <h1>
        <i className={icon}></i> {title}
      </h1>
      <ul>
        <li>
          <Link className="" to="/">Home</Link>
        </li>
        <li>
          <Link className="" to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

// sets the default states
Navbar.defaultProps = {
  title: "GitHub Finder",
  icon: "fab fa-github",
};

// sets the type in the console
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
