import React, { Component } from "react";
import "./App.scss";

import GeneralInfo from "./components/GeneralInfo/GeneralInfo.js";
import Education from "./components/Education/Education.js";

function AnswerObj(answers = [], saved = false) {
  this.answers = answers;
  this.saved = false;
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      generalInfo: new AnswerObj([{ name: "", email: "", phone: "" }]),
      education: new AnswerObj(),
      jobs: new AnswerObj(),
    };

    this.inputChange = this.inputChange.bind(this);
  }

  inputChange(event) {
    this.setState((state) => {
      let stateKey = event.target.closest("form").getAttribute("state");
      let groupOrder = event.target
        .closest(".group-order-indicator")
        .getAttribute("groupOrder");
      let inputKey = event.target.getAttribute("inputkey");

      let newState = state[stateKey];
      newState.answers[groupOrder][inputKey] = event.target.value;

      let returnStateobj = {};
      returnStateobj[stateKey] = newState;

      return returnStateobj;
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
          />
        </div>
      </div>
    );
  }
}

export default App;
