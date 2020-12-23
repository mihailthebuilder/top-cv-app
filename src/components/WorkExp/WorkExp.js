import FormHeading from "../FormHeading/FormHeading.js";
import Button from "../Button/Button.js";
import LineInput from "../LineInput/LineInput.js";
import MultiLineInput from "../MultiLineInput/MultiLineInput.js";
import EntryBreak from "../EntryBreak/EntryBreak.js";

const WorkExp = (props) => {
  let entries = props.data.answers.map((answer, key) => {
    let inputObj = props.data.answers[key];
    let savedLineInput =
      props.data.saved &&
      !(props.data.newEntry && key + 1 === props.data.answers.length);

    return (
      <div
        className="group-order-indicator"
        grouporder={key}
        key={key.toString() + "-job"}
      >
        {key > 0 && <EntryBreak />}
        <LineInput
          label="Company name"
          inputkey="employer"
          type="text"
          inputChange={props.inputChange}
          inputValue={inputObj.employer}
          saved={savedLineInput}
          required
        />
        <LineInput
          label="Job title"
          inputkey="jobTitle"
          type="text"
          inputChange={props.inputChange}
          inputValue={inputObj.jobTitle}
          saved={savedLineInput}
          required
        />
        <MultiLineInput
          label="Main responsibilities"
          inputkey="mainTasks"
          type="text"
          inputChange={props.inputChange}
          inputValue={inputObj.jobTitle}
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
        {!props.data.newEntry && !props.data.saved && (
          <div className="buttons-container">
            <Button
              buttonText="Delete"
              buttonType="button"
              clickFunc={props.deleteEntry}
              additionalClass="danger"
            />
          </div>
        )}
      </div>
    );
  });

  let buttonsContainer =
    props.data.answers.length === 0 ? (
      <div className="buttons-container">
        <Button
          buttonText="Add"
          buttonType="button"
          clickFunc={props.newEntry}
        />
      </div>
    ) : props.data.newEntry || !props.data.saved ? (
      <div className="buttons-container">
        <Button buttonText="Save" buttonType="submit" />
      </div>
    ) : (
      <div className="buttons-container">
        <Button buttonText="Edit" buttonType="submit" />
        <div></div>
        <Button
          buttonText="Add"
          buttonType="button"
          clickFunc={props.newEntry}
        />
      </div>
    );

  return (
    <form state="jobs" onSubmit={props.sectionSaveEdit}>
      <FormHeading title="Work Experience" />
      {entries}
      {buttonsContainer}
    </form>
  );
};

export default WorkExp;
