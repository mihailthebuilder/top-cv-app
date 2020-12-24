import React, { Component } from "react";
import "./App.scss";
import {
  AnswerObj,
  copyAnswerObj,
  returnStateObj,
  getStateAttr,
  getEntryOrder,
} from "./common";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import WorkExp from "./components/WorkExp";

class App extends Component {
  constructor(props) {
    super(props);

    //holds the 3 states corresponding to each section. see readme for the rationale behind the AnswerObj object
    this.state = {
      //generalInfo initialised with data because its input html elements appear from the start. For the other 2 sections, the inputs are created when newEntry is triggered.
      generalInfo: new AnswerObj([{ name: "", email: "", phone: "" }]),
      education: new AnswerObj(),
      jobs: new AnswerObj(),
    };
  }

  //handles any input changes
  inputChange = (event) => {
    this.setState((state) => {
      //these 3 values enable the function to figure out which state, entry and input it's being triggered by. See readme for more.
      const stateKey = getStateAttr(event.target);
      const entryOrder = getEntryOrder(event.target);
      const inputKey = event.target.getAttribute("inputkey");

      //deep copy so we can make changes to state object
      const newState = copyAnswerObj(state[stateKey]);

      //update the relevant input in the state
      newState.answers[entryOrder][inputKey] = event.target.value;

      return returnStateObj(newState, stateKey);
    });
  };

  //allows inputs to become editable and saves the changes
  sectionSaveEdit = (event) => {
    //the function is triggered by a form submission, so we need to prevent the resulting page refresh
    event.preventDefault();

    this.setState((state) => {
      //figure out which section/state we need to update
      const stateKey = getStateAttr(event.target);

      const newState = copyAnswerObj(state[stateKey]);

      //if a new entry is being created, save that entry and switch
      if (newState.newEntry) {
        newState.newEntry = false;
        newState.saved = true;
      } else {
        newState.saved = !newState.saved;
      }

      return returnStateObj(newState, stateKey);
    });
  };

  //enables a new empty entry to appear
  newEntry = (event) => {
    this.setState((state) => {
      const stateKey = getStateAttr(event.target);

      //create a copy of the existing  relevant state
      const newState = copyAnswerObj(state[stateKey]);

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

      newState.answers.push(newEntryObj);

      //indicate that the new entry is editable
      newState.newEntry = true;

      return returnStateObj(newState, stateKey);
    });
  };

  //deletes a specific entry
  deleteEntry = (event) => {
    this.setState((state) => {
      //find out the entry
      const stateKey = getStateAttr(event.target);
      const entryOrder = getEntryOrder(event.target);

      //remove the entry in the deep copy of the state
      const newState = copyAnswerObj(state[stateKey]);
      newState.answers.splice(entryOrder, 1);

      return returnStateObj(newState, stateKey);
    });
  };

  render() {
    const { education, generalInfo, jobs } = this.state;
    const { inputChange, sectionSaveEdit, newEntry, deleteEntry } = this;
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
  }
}

export default App;
