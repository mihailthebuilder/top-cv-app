import React from "react";
import "./Button.scss";

const Button = ({ clickFunc, additionalClass, buttonType, children }) => {
  return (
    <button
      className={`btn border-radius border-width regular-font-size ${
        additionalClass ? additionalClass : "normal"
      }`}
      type={buttonType}
      onClick={(e) => (clickFunc ? clickFunc(e) : () => {})}
    >
      {children}
    </button>
  );
};

export default Button;
