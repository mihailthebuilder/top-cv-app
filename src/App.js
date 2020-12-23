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

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      generalInfo: new AnswerObj([{ name: "", email: "", phone: "" }]),
      education: new AnswerObj(),
      jobs: new AnswerObj(),
    };

    this.inputChange = this.inputChange.bind(this);
    this.sectionSaveEdit = this.sectionSaveEdit.bind(this);
    this.newEntry = this.newEntry.bind(this);
    this.deleteEntry = this.deleteEntry.bind(this);
  }

  inputChange(event) {
    this.setState((state) => {
      let stateKey = getStateAttr(event.target);
      let entryOrder = getEntryOrder(event.target);
      let inputKey = event.target.getAttribute("inputkey");

      let newState = copyAnswerObj(state[stateKey]);

      newState.answers[entryOrder][inputKey] = event.target.value;

      return returnStateObj(newState, stateKey);
    });
  }

  sectionSaveEdit(event) {
    event.preventDefault();

    this.setState((state) => {
      let stateKey = getStateAttr(event.target);

      let newState = copyAnswerObj(state[stateKey]);

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
        </div>
      </div>
    );
  }
}

export default App;
