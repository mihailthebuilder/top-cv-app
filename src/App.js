import React, { Component } from "react";
import "./App.scss";

import GeneralInfo from "./components/GeneralInfo/GeneralInfo.js";
import Education from "./components/Education/Education.js";

function AnswerObj(answers = [], saved = false) {
  this.answers = answers;
  this.saved = saved;
}

const copyAnswerObj = (obj) => {
  let newObj = {};
  newObj.saved = obj.saved;
  newObj.answers = obj.answers.map((a) => Object.assign({}, a));
  return newObj;
};

function getStateAttr(elem) {
  return elem.closest("form").getAttribute("state");
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
    this.sectionSaveEdit = this.sectionSaveEdit.bind(this);
  }

  inputChange(event) {
    this.setState((state) => {
      let stateKey = getStateAttr(event.target);
      let groupOrder = event.target
        .closest(".group-order-indicator")
        .getAttribute("groupOrder");
      let inputKey = event.target.getAttribute("inputkey");

      let newState = copyAnswerObj(state[stateKey]);
      newState.answers[groupOrder][inputKey] = event.target.value;

      let returnStateobj = {};
      returnStateobj[stateKey] = newState;

      return returnStateobj;
    });
  }

  sectionSaveEdit(event) {
    event.preventDefault();

    this.setState((state) => {
      let stateKey = getStateAttr(event.target);

      let newState = copyAnswerObj(state[stateKey]);
      newState.saved = !newState.saved;

      let returnStateObj = {};
      returnStateObj[stateKey] = newState;

      return returnStateObj;
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
        </div>
      </div>
    );
  }
}

export default App;
