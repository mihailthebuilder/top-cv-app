import React, { Component } from "react";
import "./App.scss";

import {
  AnswerObj,
  copyAnswerObj,
  returnStateObj,
  getStateAttr,
  getEntryOrder,
} from "./common/outsourced.js";

import GeneralInfo from "./components/GeneralInfo/GeneralInfo.js";
import Education from "./components/Education/Education.js";
import WorkExp from "./components/WorkExp/WorkExp.js";

class App extends Component {
  constructor(props) {
    super(props);

    //holds the 3 states corresponding to each section. see readme for how AnswerObj is structured
    this.state = {
      //generalInfo initialised with data because its input html elements appear from the start. For the other 2 sections, the inputs are created when newEntry is triggered.
      generalInfo: new AnswerObj([{ name: "", email: "", phone: "" }]),

      education: new AnswerObj(),
      jobs: new AnswerObj(),
    };

    this.inputChange = this.inputChange.bind(this);
    this.sectionSaveEdit = this.sectionSaveEdit.bind(this);
    this.newEntry = this.newEntry.bind(this);
    this.deleteEntry = this.deleteEntry.bind(this);
  }

  //handles any input changes
  inputChange(event) {
    this.setState((state) => {
      //these 3 values enable the function to figure out which state, entry and input it's being triggered by. See readme for more.
      let stateKey = getStateAttr(event.target);
      let entryOrder = getEntryOrder(event.target);
      let inputKey = event.target.getAttribute("inputkey");

      //deep copy so we can make changes to state object
      let newState = copyAnswerObj(state[stateKey]);

      //update the relevant input in the state
      newState.answers[entryOrder][inputKey] = event.target.value;

      return returnStateObj(newState, stateKey);
    });
  }

  //allows inputs to become editable and saves the changes
  sectionSaveEdit(event) {
    //the function is triggered by a form submission, so we need to prevent the resulting page refresh
    event.preventDefault();

    this.setState((state) => {
      //figure out which section/state we need to update
      let stateKey = getStateAttr(event.target);

      let newState = copyAnswerObj(state[stateKey]);

      //if a new entry is being created, save that entry and switch
      if (newState.newEntry) {
        newState.newEntry = false;
        newState.saved = true;
      } else {
        newState.saved = !newState.saved;
      }

      return returnStateObj(newState, stateKey);
    });
  }

  newEntry(event) {
    this.setState((state) => {
      let stateKey = getStateAttr(event.target);

      let newState = copyAnswerObj(state[stateKey]);
      newState.newEntry = true;

      let newEntryObj =
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

      return returnStateObj(newState, stateKey);
    });
  }

  deleteEntry(event) {
    this.setState((state) => {
      let stateKey = getStateAttr(event.target);
      let entryOrder = getEntryOrder(event.target);

      let newState = copyAnswerObj(state[stateKey]);

      newState.answers.splice(entryOrder, 1);

      return returnStateObj(newState, stateKey);
    });
  }

  render() {
    return (
      <div className="form-container">
        <div className="form-heading-container">
          <h1>Job Application Form</h1>
        </div>
        <div className="form-body-container">
          <GeneralInfo
            data={this.state.generalInfo}
            inputChange={this.inputChange}
            sectionSaveEdit={this.sectionSaveEdit}
          />
          <Education
            data={this.state.education}
            inputChange={this.inputChange}
            sectionSaveEdit={this.sectionSaveEdit}
            newEntry={this.newEntry}
            deleteEntry={this.deleteEntry}
          />
          <WorkExp
            data={this.state.jobs}
            inputChange={this.inputChange}
            sectionSaveEdit={this.sectionSaveEdit}
            newEntry={this.newEntry}
            deleteEntry={this.deleteEntry}
          />
        </div>
      </div>
    );
  }
}

export default App;
