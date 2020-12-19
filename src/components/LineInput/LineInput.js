import "./LineInput.scss";
import SaveButton from "../SaveButton/SaveButton.js";

const LineInput = (props) => {
  return (
    <form className="form-question" question={props.question}>
      <label>{props.label}</label>
      <input
        type={props.inputType}
        className="hover-highlight"
        onChange={props.inputChange}
        value={data.length === 0 ? "" : data}
        required
      />
      <SaveButton />
    </form>
  );
};

export default LineInput;
