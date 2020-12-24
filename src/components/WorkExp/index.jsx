/*almost all a copy of ./src/components/Education.js, with exception of <MultiLineInput /> which is needed to handle main responsibilities question using a textarea
 */
import React from "react";
import FormHeading from "../FormHeading";
import Button from "../Button";
import LineInput from "../LineInput";
import MultiLineInput from "../MultiLineInput";
import EntryBreak from "../EntryBreak";

const WorkExp = (props) => {
  const entries = props.data.answers.map((answer, key) => {
    const inputObj = props.data.answers[key];
    const savedLineInput =
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
        />
        <LineInput
          label="Job title"
          inputkey="jobTitle"
          type="text"
          inputChange={props.inputChange}
          inputValue={inputObj.jobTitle}
          saved={savedLineInput}
        />
        <MultiLineInput
          label="Main responsibilities"
          inputkey="mainTasks"
          inputChange={props.inputChange}
          inputValue={inputObj.mainTasks}
          saved={savedLineInput}
        />
        <LineInput
          label="Date from"
          inputkey="dateFrom"
          type="date"
          inputChange={props.inputChange}
          inputValue={inputObj.dateFrom}
          saved={savedLineInput}
        />
        <LineInput
          label="Date to"
          inputkey="dateTo"
          type="date"
          inputChange={props.inputChange}
          inputValue={inputObj.dateTo}
          saved={savedLineInput}
        />
        {!props.data.newEntry && !props.data.saved && (
          <div className="buttons-container">
            <Button
              buttonType="button"
              clickFunc={props.deleteEntry}
              additionalClass="danger"
            >
              Delete
            </Button>
          </div>
        )}
      </div>
    );
  });

  const buttonsContainer =
    props.data.answers.length === 0 ? (
      <div className="buttons-container">
        <Button buttonType="button" clickFunc={props.newEntry}>
          Add
        </Button>
      </div>
    ) : props.data.newEntry || !props.data.saved ? (
      <div className="buttons-container">
        <Button buttonType="submit">Save</Button>
      </div>
    ) : (
      <div className="buttons-container">
        <Button buttonType="submit">Edit</Button>
        <div />
        <Button buttonType="button" clickFunc={props.newEntry}>
          Add
        </Button>
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
