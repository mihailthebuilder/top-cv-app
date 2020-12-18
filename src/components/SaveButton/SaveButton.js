import { ReactComponent as SaveSvg } from "./save.svg";
import "./SaveButton.scss";

const SaveButton = () => {
  return (
    <button type="submit" className="save-button">
      <SaveSvg />
    </button>
  );
};

export default SaveButton;
