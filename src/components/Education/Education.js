import "./Education.scss";
import FormHeading from "../FormHeading/FormHeading.js";
import NewEntryButton from "../NewEntryButton/NewEntryButton.js";

const Education = (props) => {
  /*
  let buttonsContainer = props.newEntry? (
    <div>
      <NewEntryButton buttonText={"Save"} />
    </div>
  ): (
    <div>
      <NewEntryButton buttonText={"Add"} />
    </div>
  )

  let [buttonText, buttonTrigger] = props.newEntry?
*/

  return (
    <div>
      <FormHeading title="Education" />
    </div>
  );
};

export default Education;
