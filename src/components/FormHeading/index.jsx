import React from "react";
import "./FormHeading.scss";

const FormHeading = (props) => (
  <div>
    <h2>{props.title}</h2>
    <div className="line-break" />
  </div>
);

export default FormHeading;
