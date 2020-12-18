import "./LineInput.scss";
import SaveButton from "../SaveButton/SaveButton.js";

const LineInput = (props) => {
  return (
    <form className="form-question">
      <label>{props.label}</label>
      <input type={props.inputType} className="hover-highlight" required />
      <SaveButton />
    </form>
  );
};

export default LineInput;
