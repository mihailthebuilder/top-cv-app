import React, { useState } from "react";
import "./App.scss";
import { AnswerObj, getStateAttr, getEntryOrder, copyFormData } from "./common";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import WorkExp from "./components/WorkExp";

const App = () => {
  //holds the 3 states corresponding to each section. see readme for the rationale behind the AnswerObj object
  const [formData, setFormData] = useState({
    /*
    generalInfo initialised with data because its input html
      elements appear from the start. For the other 2 sections,
      the inputs are created when newEntry is triggered.
    */
    generalInfo: new AnswerObj([{ name: "", email: "", phone: "" }]),
    education: new AnswerObj(),
    jobs: new AnswerObj(),
  });

  //handles any input changes
  const inputChange = (event) => {
    //these 3 values enable the function to figure out which state, entry and input it's being triggered by. See readme for more.
    const stateKey = getStateAttr(event.target);
    const entryOrder = getEntryOrder(event.target);
    const inputKey = event.target.getAttribute("inputkey");

    //deep copy so we can make changes to state object
    const newFormData = copyFormData(formData);

    //update the relevant input in the state
    newFormData[stateKey].answers[entryOrder][inputKey] = event.target.value;

    //this to change
    setFormData(newFormData);
  };

  //allows inputs to become editable and saves the changes
  const sectionSaveEdit = (event) => {
    //the function is triggered by a form submission, so we need to prevent the resulting page refresh
    event.preventDefault();

    //figure out which section/state we need to update
    const stateKey = getStateAttr(event.target);

    const newFormData = copyFormData(formData);

    if (formData[stateKey].newEntry) {
      newFormData[stateKey].newEntry = false;
      newFormData[stateKey].saved = true;
    } else {
      newFormData[stateKey].saved = !newFormData[stateKey].saved;
    }

    setFormData(newFormData);
  };

  //enables a new empty entry to appear
  const newEntry = (event) => {
    const stateKey = getStateAttr(event.target);

    //create a copy of the existing  relevant state
    const newFormData = copyFormData(formData);

    //add an empty entry to the state. only need to consider Education and Work Experience sections as General Info doesn't need new entry to be added.
    const newEntryObj =
      stateKey === "education"
        ? {
            school: "",
            course: "",
            dateFrom: "",
            dateTo: "",
          }
        : {
            employer: "",
            jobTitle: "",
            mainTasks: "",
            dateFrom: "",
            dateTo: "",
          };

    newFormData[stateKey].answers.push(newEntryObj);

    //indicate that the new entry is editable
    newFormData[stateKey].newEntry = true;

    setFormData(newFormData);
  };

  //deletes a specific entry
  const deleteEntry = (event) => {
    //find out the entry
    const stateKey = getStateAttr(event.target);
    const entryOrder = getEntryOrder(event.target);

    const newFormData = copyFormData(formData);
    newFormData[stateKey].answers.splice(entryOrder, 1);

    setFormData(newFormData);
  };

  const { education, generalInfo, jobs } = formData;
  return (
    <div className="form-container">
      <div className="form-heading-container">
        <h1>Job Application Form</h1>
      </div>
      <div className="form-body-container">
        <GeneralInfo
          data={generalInfo}
          inputChange={inputChange}
          sectionSaveEdit={sectionSaveEdit}
        />
        <Education
          data={education}
          inputChange={inputChange}
          sectionSaveEdit={sectionSaveEdit}
          newEntry={newEntry}
          deleteEntry={deleteEntry}
        />
        <WorkExp
          data={jobs}
          inputChange={inputChange}
          sectionSaveEdit={sectionSaveEdit}
          newEntry={newEntry}
          deleteEntry={deleteEntry}
        />
      </div>
    </div>
  );
};

export default App;
