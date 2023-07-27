import PropTypes from "prop-types";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./NavLinkLogo.css";

const NavLinkLogo = ({ children, className, route }) => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate(route);
  };

  return (
    <a className={"nav-link-logo " + className} onClick={handleNavigation}>
      {children}
    </a>
  );
};

NavLinkLogo.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default NavLinkLogo;
