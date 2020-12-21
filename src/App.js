import React, { Component } from "react";
import "./App.scss";

import GeneralInfo from "./components/GeneralInfo/GeneralInfo.js";
import Education from "./components/Education/Education.js";

function LineQuestionObj(value = "", saved = false) {
  this.value = value;
  this.saved = saved;
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: new LineQuestionObj(),
      email: new LineQuestionObj(),
      phone: new LineQuestionObj(),
      jobs: [],
      newJobEntry: false,
      education: [],
      newEducationEntry: false,
    };

    this.lineInputChange = this.lineInputChange.bind(this);
    this.lineInputSave = this.lineInputSave.bind(this);
    this.lineInputEdit = this.lineInputEdit.bind(this);
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
          <Education state={this.state.education} />
        </div>
      </div>
    );
  }
}

export default App;
