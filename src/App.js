import React, { Component } from "react";
import "./App.scss";

import GeneralInfo from "./components/GeneralInfo/GeneralInfo.js";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="form-container">
        <div className="form-heading-container">
          <h1>Online Application Form</h1>
        </div>
        <div className="form-body-container">
          <GeneralInfo />
        </div>
      </div>
    );
  }
}

export default App;
