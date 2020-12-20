import { ReactComponent as SaveSvg } from "./save.svg";
import { ReactComponent as EditSvg } from "./edit.svg";

import "./InputButton.scss";

const InputButton = (props) => {
  return props.saved ? (
    <button
      className="save-button"
      onClick={props.lineInputEdit}
      state={props.state}
    >
      <EditSvg />
    </button>
  ) : (
    <button type="submit" className="save-button">
      <SaveSvg />
    </button>
  );
};

export default InputButton;
