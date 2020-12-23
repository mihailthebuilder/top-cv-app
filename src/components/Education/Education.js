import FormHeading from "../FormHeading/FormHeading.js";
import Button from "../Button/Button.js";
import LineInput from "../LineInput/LineInput.js";
import EntryBreak from "../EntryBreak/EntryBreak.js";

const Education = (props) => {
  //generates all the entries that need to be rendered in this section
  let entries = props.data.answers.map((answer, key) => {
    let inputObj = props.data.answers[key];

    //determines whether line input should be editable
    let savedLineInput =
      props.data.saved &&
      !(props.data.newEntry && key + 1 === props.data.answers.length);

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
          inputChange={props.inputChange}
          inputValue={inputObj.school}
          saved={savedLineInput}
        />
        <LineInput
          label="Course name"
          inputkey="course"
          type="text"
          inputChange={props.inputChange}
          inputValue={inputObj.course}
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
        {
          /*renders the delete entry button. should only appear when 1) we're not creating a new entry; and 2) the section is in edit mode
           */
          !props.data.newEntry && !props.data.saved && (
            <div className="buttons-container">
              <Button
                buttonText="Delete"
                buttonType="button"
                clickFunc={props.deleteEntry}
                additionalClass="danger"
              />
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
    <form state="education" onSubmit={props.sectionSaveEdit}>
      <FormHeading title="Education" />
      {entries}
      {buttonsContainer}
    </form>
  );
};

export default Education;
