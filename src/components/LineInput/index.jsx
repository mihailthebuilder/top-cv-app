import React from "react";
import "./LineInput.scss";

const LineInput = ({ label, type, saved, inputValue, inputkey, inputChange }) =>
  /*if input editable, render an input element, otherwise render a span element
  see readme for purpose of inputkey*/
  saved ? (
    <div className="form-question">
      <label className="regular-font-size">{label}</label>
      <span className="regular-font-size">{inputValue}</span>
    </div>
  ) : (
    <div className="form-question">
      <label className="regular-font-size">{label}</label>
      <input
        type={type}
        className="hover-highlight regular-font-size border-radius border-width"
        value={inputValue}
        inputkey={inputkey}
        onChange={inputChange}
        required
      />
    </div>
  );

export default LineInput;
