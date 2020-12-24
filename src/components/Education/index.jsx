import React from "react";
import FormHeading from "../FormHeading";
import Button from "../Button";
import LineInput from "../LineInput";
import EntryBreak from "../EntryBreak";

const Education = ({
  data,
  inputChange,
  sectionSaveEdit,
  newEntry,
  deleteEntry,
}) => {
  //generates all the entries that need to be rendered in this section
  const entries = data.answers.map((answer, key) => {
    const { school, course, dateFrom, dateTo } = data.answers[key];

    //determines whether line input should be editable
    const savedLineInput =
      data.saved && !(data.newEntry && key + 1 === data.answers.length);

    //see readme for purpose of grouporder and inputkey attributes
    return (
      <div
        className="group-order-indicator"
        grouporder={key}
        key={key.toString() + "-education"}
      >
        {
          // if it's not the first entry, add a separator to the previous entry
          key > 0 && <EntryBreak />
        }
        <LineInput
          label="School name"
          inputkey="school"
          type="text"
          inputChange={inputChange}
          inputValue={school}
          saved={savedLineInput}
        />
        <LineInput
          label="Course name"
          inputkey="course"
          type="text"
          inputChange={inputChange}
          inputValue={course}
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
        {
          /*renders the delete entry button. should only appear when 1) we're not creating a new entry; and 2) the section is in edit mode
           */
          !data.newEntry && !data.saved && (
            <div className="buttons-container">
              <Button
                buttonType="button"
                clickFunc={deleteEntry}
                additionalClass="danger"
              >
                Delete
              </Button>
            </div>
          )
        }
      </div>
    );
  });

  /*container for the buttons at the end of the section. 3 rendering scenarios...
    1. no entries -> only Add button
    2. new entry is being added or the section has been made editable -> only Save button
    3. 1 or several entries in section, all saved -> Edit and Add buttons
  */
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
    <form state="education" onSubmit={sectionSaveEdit}>
      <FormHeading title="Education" />
      {entries}
      {buttonsContainer}
    </form>
  );
};

export default Education;
