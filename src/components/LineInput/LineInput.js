import "./LineInput.scss";

const LineInput = (props) => {
  let labelJsx = <label className="regular-font-size">{props.label}</label>;

  return props.data.saved ? (
    <div className="form-question">
      {labelJsx}
      <span className="regular-font-size">{props.data.value}</span>
    </div>
  ) : (
    <form className="form-question" onSubmit={props.lineInputSave}>
      {labelJsx}
      <input
        type={props.type}
        className="hover-highlight regular-font-size border-radius border-width"
        value={props.data.value}
        state={props.state}
        onChange={props.lineInputChange}
        required
      />
    </form>
  );
};

export default LineInput;
