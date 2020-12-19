import "./LineInput.scss";
import SaveButton from "../SaveButton/SaveButton.js";

const LineInput = (props) => {
  console.log(props.state, props.data);

  let inputJsx = props.data.saved ? (
    <span>{props.data.value}</span>
  ) : (
    <input
      type={props.type}
      className="hover-highlight"
      value={props.data.value}
      state={props.state}
      onChange={props.lineInputChange}
      required
    />
  );

  return (
    <form className="form-question" onSubmit={props.lineInputSave}>
      <label>{props.label}</label>
      {inputJsx}
      <SaveButton />
    </form>
  );
};

export default LineInput;
