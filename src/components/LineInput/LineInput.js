import "./LineInput.scss";
import InputButton from "../InputButton/InputButton.js";

const LineInput = (props) => {
  let labelJsx = <label>{props.label}</label>;

  return props.data.saved ? (
    <div className="form-question">
      {labelJsx}
      <span>{props.data.value}</span>
      <InputButton
        saved={props.data.saved}
        lineInputEdit={props.lineInputEdit}
        state={props.state}
      />
    </div>
  ) : (
    <form className="form-question" onSubmit={props.lineInputSave}>
      {labelJsx}
      <input
        type={props.type}
        className="hover-highlight"
        value={props.data.value}
        state={props.state}
        onChange={props.lineInputChange}
        required
      />
      <InputButton saved={props.data.saved} />
    </form>
  );
};

export default LineInput;
