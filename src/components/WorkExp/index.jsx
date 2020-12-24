/*almost all a copy of ./src/components/Education.js, with exception of <MultiLineInput /> which is needed to handle main responsibilities question using a textarea
 */
import React from "react";
import FormHeading from "../FormHeading";
import Button from "../Button";
import LineInput from "../LineInput";
import MultiLineInput from "../MultiLineInput";
import EntryBreak from "../EntryBreak";

const WorkExp = ({
  data,
  inputChange,
  deleteEntry,
  newEntry,
  sectionSaveEdit,
}) => {
  const entries = data.answers.map((answer, key) => {
    const { employer, jobTitle, mainTasks, dateFrom, dateTo } = data.answers[
      key
    ];
    const savedLineInput =
      data.saved && !(data.newEntry && key + 1 === data.answers.length);

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
          inputChange={inputChange}
          inputValue={employer}
          saved={savedLineInput}
        />
        <LineInput
          label="Job title"
          inputkey="jobTitle"
          type="text"
          inputChange={inputChange}
          inputValue={jobTitle}
          saved={savedLineInput}
        />
        <MultiLineInput
          label="Main responsibilities"
          inputkey="mainTasks"
          inputChange={inputChange}
          inputValue={mainTasks}
          saved={savedLineInput}
        />
        <LineInput
          label="Date from"
          inputkey="dateFrom"
          type="date"
          inputChange={inputChange}
          inputValue={dateFrom}
          saved={savedLineInput}
        />
        <LineInput
          label="Date to"
          inputkey="dateTo"
          type="date"
          inputChange={inputChange}
          inputValue={dateTo}
          saved={savedLineInput}
        />
        {!data.newEntry && !data.saved && (
          <div className="buttons-container">
            <Button
              buttonType="button"
              clickFunc={deleteEntry}
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
    data.answers.length === 0 ? (
      <div className="buttons-container">
        <Button buttonType="button" clickFunc={newEntry}>
          Add
        </Button>
      </div>
    ) : data.newEntry || !data.saved ? (
      <div className="buttons-container">
        <Button buttonType="submit">Save</Button>
      </div>
    ) : (
      <div className="buttons-container">
        <Button buttonType="submit">Edit</Button>
        <div />
        <Button buttonType="button" clickFunc={newEntry}>
          Add
        </Button>
      </div>
    );

  return (
    <form state="jobs" onSubmit={sectionSaveEdit}>
      <FormHeading title="Work Experience" />
      {entries}
      {buttonsContainer}
    </form>
  );
};

export default WorkExp;
