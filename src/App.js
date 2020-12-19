import React, { Component } from "react";
import "./App.scss";

import LineBreak from "./components/LineBreak/LineBreak.js";
import LineInput from "./components/LineInput/LineInput.js";

class App extends Component {
  constructor(props) {
    super(props);

    //initialise all answers as an array so that you can use 1 input handler function across all
    this.state = {
      name: [],
      email: [],
      phone: [],
      job: [],
      education: [],
    };

    this.inputChange = this.inputChange.bind(this);
  }

  inputChange(event) {
    //CHECK JOPLIN==============================================================
    this.setState((state) => {
      let inputElem = event.target;

      let inputKey = inputElem.getAttribute("key");
      let inputValue = inputElem.value;
      let questionKey = inputElem.closest("form").getAttribute("question");

      let newQuestionsState = state.questions.slice();

      if (state.questions[questionKey].length === 0) {
      }
    });

    /*
    this.setState({
      inputQuestion: event.target.getAttribute("question"),
      inputAnswer: event.target.value,
    });*/
  }

  /*
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
          <div>
            <h2>General Info</h2>
            <LineBreak />
            <LineInput
              label="Name"
              type="text"
              question="name"
              data={this.state.name}
              inputChange={this.inputChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
