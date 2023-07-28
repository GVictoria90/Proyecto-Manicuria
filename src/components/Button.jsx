import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const Button = ({ children, onClick, className, type }) => {
  const handleClick = () => {
    // Call the onClick function provided by the parent component
    // This way, the parent component can handle the click logic as needed
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className={"iridescent-button " + className}
      type={type}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
