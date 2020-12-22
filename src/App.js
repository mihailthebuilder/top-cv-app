import React, { Component } from "react";
import "./App.scss";

import {
  AnswerObj,
  copyAnswerObj,
  returnStateObj,
  getStateAttr,
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
  }

  inputChange(event) {
    this.setState((state) => {
      let stateKey = getStateAttr(event.target);
      let groupOrder = parseInt(
        event.target
          .closest(".group-order-indicator")
          .getAttribute("grouporder")
      );
      let inputKey = event.target.getAttribute("inputkey");

      let newState = copyAnswerObj(state[stateKey]);

      newState.answers[groupOrder][inputKey] = event.target.value;

      return returnStateObj(newState, stateKey);
    });
  }

  sectionSaveEdit(event) {
    event.preventDefault();

    this.setState((state) => {
      let stateKey = getStateAttr(event.target);

      let newState = copyAnswerObj(state[stateKey]);
      newState.saved = !newState.saved;
      newState.newEntry = false;

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
          />
        </div>
      </div>
    );
  }
}

export default App;
