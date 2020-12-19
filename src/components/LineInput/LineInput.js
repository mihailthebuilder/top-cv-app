import "./LineInput.scss";
import SaveButton from "../SaveButton/SaveButton.js";

//NEEDS CHANGED
const LineInput = (props) => {
  return (
    <form className="form-question">
      <label>{props.label}</label>
      <input
        type={props.inputType}
        className="hover-highlight"
        onChange={props.inputChange}
        value={props.inputValue}
        question={props.inputQuestion}
        required
      />
      <SaveButton />
    </form>
  );
};

export default LineInput;
