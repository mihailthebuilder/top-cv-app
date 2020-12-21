import React, { Component } from "react";
import "./App.scss";

import GeneralInfo from "./components/GeneralInfo/GeneralInfo.js";
import Education from "./components/Education/Education.js";

function AnswerObj(values = [], newEntry = false) {
  this.answers = [];
  this.newEntry = false;
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      generalInfo: new AnswerObj(),
      education: new AnswerObj(),
      jobs: new AnswerObj(),
    };

    this.inputChange = this.inputChange.bind(this);
  }

  inputChange(event) {
    let stateKey = event.target.closest("form").getAttribute("state");
    let groupOrder = event.target
      .closest(".group-order-indicator")
      .getAttribute("groupOrder");
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
          />
          <Education
            data={this.state.education}
            newEntry={this.newEntryButtonClick}
          />
        </div>
      </div>
    );
  }
}

export default App;
