import React from "react";
import "./LineInput.scss";

const LineInput = (props) => {
  const labelJsx = <label className="regular-font-size">{props.label}</label>;

  /*if input editable, render an input element, otherwise render a span element
  see readme for purpose of inputkey*/
  return props.saved ? (
    <div className="form-question">
      {labelJsx}
      <span className="regular-font-size">{props.inputValue}</span>
    </div>
  ) : (
    <div className="form-question">
      {labelJsx}
      <input
        type={props.type}
        className="hover-highlight regular-font-size border-radius border-width"
        value={props.inputValue}
        inputkey={props.inputkey}
        onChange={props.inputChange}
        required
      />
    </div>
  );
};

export default LineInput;
