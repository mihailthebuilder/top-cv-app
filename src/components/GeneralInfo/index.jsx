import React from "react";
import FormHeading from "../FormHeading";
import LineInput from "../LineInput";
import Button from "../Button";

const GeneralInfo = (props) => {
  //only need to get the first entry because you can't add new entries in this section
  const answerData = props.data.answers[0];

  return (
    //see readme for purpose of state, grouporder and inputkey attributes.
    <form state="generalInfo" onSubmit={props.sectionSaveEdit}>
      <FormHeading title="General Info" />
      <div className="group-order-indicator" grouporder="0" key="0">
        <LineInput
          label="Name"
          inputkey="name"
          inputValue={answerData.name}
          type="text"
          inputChange={props.inputChange}
          saved={props.data.saved}
        />
        <LineInput
          label="Email"
          inputkey="email"
          type="email"
          inputChange={props.inputChange}
          inputValue={answerData.email}
          saved={props.data.saved}
        />
        <LineInput
          label="Phone number"
          inputkey="phone"
          type="number"
          inputChange={props.inputChange}
          inputValue={answerData.phone}
          saved={props.data.saved}
        />
        <div className="buttons-container">
          <Button
            buttonText={props.data.saved ? "Edit" : "Save"}
            buttonType="submit"
          />
        </div>
      </div>
    </form>
  );
};

export default GeneralInfo;
