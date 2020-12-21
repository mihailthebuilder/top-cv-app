import FormHeading from "../FormHeading/FormHeading.js";
import LineInput from "../LineInput/LineInput.js";

const GeneralInfo = (props) => {
  return (
    <div>
      <FormHeading title="General Info" />
      <LineInput
        label="Name"
        state="name"
        data={props.nameData}
        type="text"
        lineInputChange={props.lineInputChange}
        lineInputSave={props.lineInputSave}
        lineInputEdit={props.lineInputEdit}
      />
      <LineInput
        label="Email"
        state="email"
        data={props.emailData}
        type="email"
        lineInputChange={props.lineInputChange}
        lineInputSave={props.lineInputSave}
        lineInputEdit={props.lineInputEdit}
      />
      <LineInput
        label="Phone number"
        state="phone"
        data={props.phoneData}
        type="text"
        lineInputChange={props.lineInputChange}
        lineInputSave={props.lineInputSave}
        lineInputEdit={props.lineInputEdit}
      />
    </div>
  );
};

export default GeneralInfo;
