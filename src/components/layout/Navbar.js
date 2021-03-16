import React from "react";
import PropTypes from "prop-types";

const Navbar = ({ icon, title }) => {
  return (
    <nav className="bg-primary">
      <h1>
        <i className={icon}></i> {title}
      </h1>
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
