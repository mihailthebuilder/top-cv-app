import "./LineInput.scss";

const LineInput = (props) => {
  return (
    <form className="line-input">
      <label>{props.label}</label>
      <input type={props.inputType} required />
      <button type="submit" className="line-save-button"></button>
    </form>
  );
};

export default LineInput;
