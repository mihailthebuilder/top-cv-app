import React from "react";
//pretty much a copy of ./src/LineInput/LineInput.js, with exception of textarea element replacing input. Used for main responsibilities section.
import "./MultiLineInput.scss";

const MultiLineInput = ({ label, saved, inputValue, inputkey, inputChange }) =>
  saved ? (
    <div className="textarea-question">
      <label className="regular-font-size">{label}</label>
      <span className="regular-font-size">{inputValue}</span>
    </div>
  ) : (
    <div className="textarea-question">
      <label className="regular-font-size">{label}</label>
      <textarea
        className="hover-highlight regular-font-size border-radius border-width"
        rows="4"
        value={inputValue}
        inputkey={inputkey}
        onChange={inputChange}
        required
      />
    </div>
  );

export default MultiLineInput;
