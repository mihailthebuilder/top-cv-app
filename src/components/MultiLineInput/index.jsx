import React from "react";
import "./MultiLineInput.scss";

const MultiLineInput = ({
  label,
  saved,
  inputValue,
  inputkey,
  inputChange,
}) => (
  <div className="textarea-question">
    <label className="regular-font-size">{label}</label>
    {saved ? (
      <span className="regular-font-size">{inputValue}</span>
    ) : (
      <textarea
        className="hover-highlight regular-font-size border-radius border-width"
        rows="4"
        value={inputValue}
        inputkey={inputkey}
        onChange={inputChange}
        required
      />
    )}
  </div>
);

export default MultiLineInput;
