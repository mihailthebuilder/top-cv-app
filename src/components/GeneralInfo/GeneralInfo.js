import FormHeading from "../FormHeading/FormHeading.js";
import LineInput from "../LineInput/LineInput.js";
import Button from "../Button/Button.js";

const GeneralInfo = (props) => {
  return (
    <div>
      <FormHeading title="General Info" />
      <LineInput label="Name" state="name" data={props.nameData} type="text" />
      <LineInput
        label="Email"
        state="email"
        data={props.emailData}
        type="email"
      />
      <LineInput
        label="Phone number"
        state="phone"
        data={props.phoneData}
        type="text"
      />
      <div className="buttons-container">
        <Button buttonText="Save" />
      </div>
    </div>
  );
};

export default GeneralInfo;
