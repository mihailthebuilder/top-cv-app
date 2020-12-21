import React, { Component } from "react";
import "./App.scss";

import GeneralInfo from "./components/GeneralInfo/GeneralInfo.js";
import Education from "./components/Education/Education.js";

function LineQuestionObj(value = "", saved = false) {
  this.value = value;
  this.saved = saved;
}

function MultiAnswerObj(values = [], newEntry = false) {
  this.answers = [];
  this.newEntry = false;
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: new LineQuestionObj(),
      email: new LineQuestionObj(),
      phone: new LineQuestionObj(),
      education: new MultiAnswerObj(),
      jobs: new MultiAnswerObj(),
    };

    this.lineInputChange = this.lineInputChange.bind(this);
    this.lineInputSave = this.lineInputSave.bind(this);
    this.lineInputEdit = this.lineInputEdit.bind(this);
    this.newEntryButtonClick = this.newEntryButtonClick.bind(this);
  }

  lineInputChange(event) {
    let stateKey = event.target.getAttribute("state");

    let updatedState = {};
    updatedState[stateKey] = new LineQuestionObj(event.target.value);

    this.setState(updatedState);
  }

  lineInputSave(event) {
    event.preventDefault();

    this.setState((state) => {
      let stateKey = event.target.querySelector("input").getAttribute("state");
      let updatedState = {};
      updatedState[stateKey] = new LineQuestionObj(state[stateKey].value, true);

      return updatedState;
    });
  }

  lineInputEdit(event) {
    this.setState((state) => {
      let stateKey = event.target.closest("button").getAttribute("state");

      let updatedState = {};
      updatedState[stateKey] = new LineQuestionObj(
        state[stateKey].value,
        false
      );

      return updatedState;
    });
  }

  newEntryButtonClick(event) {
    console.log("newEntryButtonClick triggered");

    this.setState((state) => {
      let stateKey = event.target.getAttribute("state");

      let updatedState = {};
      updatedState[stateKey] = new MultiAnswerObj(
        state[stateKey].answers,
        true
      );

      return updatedState;
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
            nameData={this.state.name}
            emailData={this.state.email}
            phoneData={this.state.phone}
            lineInputChange={this.lineInputChange}
            lineInputSave={this.lineInputSave}
            lineInputEdit={this.lineInputEdit}
          />
          <Education
            educationData={this.state.education}
            newEntry={this.newEntryButtonClick}
          />
        </div>
      </div>
    );
  }
}

export default App;
