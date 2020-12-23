import React from "react";
import "./FormHeading.scss";

const FormHeading = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <div className="line-break" />
    </div>
  );
};

export default FormHeading;
