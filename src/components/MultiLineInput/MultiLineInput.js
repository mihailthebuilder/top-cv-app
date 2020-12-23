import "./MultiLineInput.scss";

const MultiLineInput = (props) => {
  let labelJsx = <label className="regular-font-size">{props.label}</label>;

  return props.saved ? (
    <div className="textarea-question">
      {labelJsx}
      <span className="regular-font-size">{props.inputValue}</span>
    </div>
  ) : (
    <div className="textarea-question">
      {labelJsx}
      <textarea
        className="hover-highlight regular-font-size border-radius border-width"
        rows="4"
        value={props.inputValue}
        inputkey={props.inputkey}
        onChange={props.inputChange}
        required
      />
    </div>
  );
};

export default MultiLineInput;
