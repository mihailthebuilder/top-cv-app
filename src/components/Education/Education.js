import "./Education.scss";
import FormHeading from "../FormHeading/FormHeading.js";
import Button from "../Button/Button.js";

const Education = (props) => {
  return (
    <div>
      <FormHeading title="Education" />
      <div className="buttons-container">
        <Button
          buttonText={props.data.saved ? "Save" : "Add"}
          buttonType="submit"
        />
      </div>
    </div>
  );
};

export default Education;
