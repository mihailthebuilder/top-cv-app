import "./LineInput.scss";
import SaveButton from "../SaveButton/SaveButton.js";

const LineInput = (props) => {
  return (
    <form className="form-question">
      <label>{props.label}</label>
      <input
        type={props.type}
        className="hover-highlight"
        value={props.value}
        state={props.state}
        onChange={props.lineInputChange}
        required
      />
      <SaveButton />
    </form>
  );
};

export default LineInput;
