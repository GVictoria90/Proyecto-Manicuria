import React from "react";
import Button from "./Button";
import {useNavigate} from 'react-router-dom';

const NavButton = ({ route, children }) => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate(route);
  };


  return (
    <Button type={"button"} onClick={handleNavigation} className={""}>
      {children}
    </Button>
  );
};

export default NavButton;
