import "./Education.scss";
import FormHeading from "../FormHeading/FormHeading.js";
import Button from "../Button/Button.js";

const Education = (props) => {
  console.log(props.data);

  return (
    <form state="education" onSubmit={props.sectionSaveEdit}>
      <FormHeading title="Education" />
      <div className="buttons-container">
        <Button
          buttonText="Add"
          buttonType="button"
          clickFunc={props.newEntry}
        />
      </div>
    </form>
  );
};

export default Education;
