import "./LineInput.scss";
import SaveButton from "../SaveButton/SaveButton.js";

const LineInput = (props) => {
  console.log(props.state, props.data);

  let labelJsx = <label>{props.label}</label>;

  return props.data.saved ? (
    <div className="form-question">
      {labelJsx}
      <span>{props.data.value}</span>
    </div>
  ) : (
    <form className="form-question" onSubmit={props.lineInputSave}>
      <label>{props.label}</label>
      <input
        type={props.type}
        className="hover-highlight"
        value={props.data.value}
        state={props.state}
        onChange={props.lineInputChange}
        required
      />
      <SaveButton />
    </form>
  );
};

export default LineInput;
