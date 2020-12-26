import React from "react";
import "./LineInput.scss";

const LineInput = ({
  label,
  type,
  saved,
  inputValue,
  inputkey,
  inputChange,
}) => (
  <div className="form-question">
    <label className="regular-font-size">{label}</label>
    {saved ? (
      <span className="regular-font-size">{inputValue}</span>
    ) : (
      <input
        type={type}
        className="hover-highlight regular-font-size border-radius border-width"
        value={inputValue}
        inputkey={inputkey}
        onChange={inputChange}
        required
      />
    )}
  </div>
);

export default LineInput;
