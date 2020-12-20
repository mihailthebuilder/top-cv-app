import React, { Component } from "react";
import "./App.scss";

import LineBreak from "./components/LineBreak/LineBreak.js";
import LineInput from "./components/LineInput/LineInput.js";

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
      education: [],
      savedAnswers: [],
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
          <div>
            <h2>General Info</h2>
            <LineBreak />
            <LineInput
              label="Name"
              state="name"
              data={this.state.name}
              type="text"
              lineInputChange={this.lineInputChange}
              lineInputSave={this.lineInputSave}
              lineInputEdit={this.lineInputEdit}
            />
            <LineInput
              label="Email"
              state="email"
              data={this.state.email}
              type="email"
              lineInputChange={this.lineInputChange}
              lineInputSave={this.lineInputSave}
              lineInputEdit={this.lineInputEdit}
            />
            <LineInput
              label="Phone number"
              state="phone"
              data={this.state.phone}
              type="text"
              lineInputChange={this.lineInputChange}
              lineInputSave={this.lineInputSave}
              lineInputEdit={this.lineInputEdit}
            />
          </div>
          <div>
            <h2>Education</h2>
            <LineBreak />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
