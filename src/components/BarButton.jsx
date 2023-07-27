import React, { Children } from "react";
import Button from "./Button"; // Assuming Button.js file path

const BarButton = ({ children, onClick }) => {

  return (
    <Button
      onClick={onClick}
      className={"navbar-toggler no-w100 ml-2"}
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      {children}
    </Button>
  );
};

export default BarButton;
