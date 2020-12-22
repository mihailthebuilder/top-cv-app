import "./Education.scss";
import FormHeading from "../FormHeading/FormHeading.js";
import Button from "../Button/Button.js";
import LineInput from "../LineInput/LineInput.js";

const Education = (props) => {
  let entries = props.data.answers.map((answer, key) => {
    let inputObj = props.data.answers[key];
    let savedLineInput =
      props.data.saved &&
      !(props.data.newEntry && key + 1 === props.data.answers.length);

    return (
      <div className="group-order-indicator" grouporder={key} key={key}>
        <LineInput
          label="School name"
          inputkey="school"
          type="text"
          inputChange={props.inputChange}
          inputValue={inputObj.school}
          saved={savedLineInput}
          required
        />
        <LineInput
          label="Course name"
          inputkey="course"
          type="text"
          inputChange={props.inputChange}
          inputValue={inputObj.course}
          saved={savedLineInput}
          required
        />
        <LineInput
          label="Date from"
          inputkey="dateFrom"
          type="date"
          inputChange={props.inputChange}
          inputValue={inputObj.dateFrom}
          saved={savedLineInput}
          required
        />
        <LineInput
          label="Date to"
          inputkey="dateTo"
          type="date"
          inputChange={props.inputChange}
          inputValue={inputObj.dateTo}
          saved={savedLineInput}
          required
        />
      </div>
    );
  });

  return (
    <form state="education" onSubmit={props.sectionSaveEdit}>
      <FormHeading title="Education" />
      {entries}
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
