import React from "react";

const Button = ({ action, type = "button", className }) => {
  return (
    <button type={type} className={className}>
      {action}
    </button>
  );
};

export default Button;
