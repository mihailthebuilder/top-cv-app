import React, { Component } from "react";

import "./Education.scss";
import FormHeading from "../FormHeading/FormHeading.js";

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newEntry: false,
    };

    this.newEntryButtonPress = this.newEntryButtonPress.bind(this);
  }

  newEntryButtonPress() {
    console.log("button pressed!");
  }

  //NEED TO ADD NEW ENTRY BUTTON HANDLER
  render() {
    return (
      <div>
        <FormHeading title="Education" />
      </div>
    );
  }
}

export default Education;
