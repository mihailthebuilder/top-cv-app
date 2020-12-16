import LineBreak from "../LineBreak/LineBreak.js";
import LineInput from "../LineInput/LineInput.js";

const GeneralInfo = (props) => {
  return (
    <div>
      <h2>General Info</h2>
      <LineBreak />
      <LineInput label="Name" type="text" />
    </div>
  );
};

export default GeneralInfo;
