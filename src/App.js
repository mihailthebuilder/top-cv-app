import React, { Component } from "react";
import "./App.scss";

import GeneralInfo from "./components/GeneralInfo/GeneralInfo.js";

import { InitalizeQuestionList, AnswerObj } from "./common/resources.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      savedAnswers: InitalizeQuestionList(),
      activeQuestion: {},
    };

    //this.inputChange = this.inputChange.bind(this);
  }

  /*
  inputChange(event) {
    this.setState({
      inputQuestion: event.target.getAttribute("question"),
      inputAnswer: event.target.value,
    });
  }

  inputSubmit(event) {
    event.preventDefault();

    //this.setState((state)=>)
  }
  */

  render() {
    return (
      <div className="form-container">
        <div className="form-heading-container">
          <h1>Job Application Form</h1>
        </div>
        <div className="form-body-container">
          <GeneralInfo

          /*
            inputChange={this.inputChange}
            inputAnswer={this.inputAnswer}
            */
          />
        </div>
      </div>
    );
  }
}

export default App;