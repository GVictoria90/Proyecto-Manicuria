import React from "react";
import "./Link.css";
import { useNavigate } from "react-router-dom";

const Link = ({ children, route, className }) => {
    const navigate = useNavigate();
    const handleNavigation = () => {
      navigate(route);
    };

  return (
    <a onClick={handleNavigation} className={"vg-link nav-link px-2 text-muted " + className}>
      {children}
    </a>
  );
};

export default Link;
