import LineBreak from "../LineBreak/LineBreak.js";
import LineInput from "../LineInput/LineInput.js";

const GeneralInfo = (props) => {
  return (
    <div>
      <h2>General Info</h2>
      <LineBreak />
      <LineInput
        label="Name"
        type="text"
        /*
        inputChange={props.inputChange}
        inputQuestion={"name"}
        inputAnswer={props.inputAnswer}
        */
      />
    </div>
  );
};

export default GeneralInfo;
