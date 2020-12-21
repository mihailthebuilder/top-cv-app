import FormHeading from "../FormHeading/FormHeading.js";
import LineInput from "../LineInput/LineInput.js";
import Button from "../Button/Button.js";

const GeneralInfo = (props) => {
  return (
    <form state="generalInfo">
      <FormHeading title="General Info" />
      <div className="group-order-indicator" groupOrder="0">
        <LineInput
          label="Name"
          inputKey="name"
          data={props.data[0].name}
          type="text"
          inputChange={props.inputChange}
        />
        <LineInput
          label="Email"
          inputKey="email"
          data={props.data}
          type="email"
          inputChange={props.inputChange}
        />
        <LineInput
          label="Phone number"
          inputKey="phone"
          data={props.data}
          type="text"
          inputChange={props.inputChange}
        />
        <div className="buttons-container">
          <Button buttonText="Save" buttonType="submit" />
        </div>
      </div>
    </form>
  );
};

export default GeneralInfo;
