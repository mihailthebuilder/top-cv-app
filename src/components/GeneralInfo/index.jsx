import React from "react";
import FormHeading from "../FormHeading";
import LineInput from "../LineInput";
import Button from "../Button";

const GeneralInfo = ({ data, sectionSaveEdit, inputChange }) => {
  //only need to get the first entry because you can't add new entries in this section
  const { saved } = data;
  const { name, email, phone } = data.answers[0];

  return (
    //see readme for purpose of state, grouporder and inputkey attributes.
    <form state="generalInfo" onSubmit={sectionSaveEdit}>
      <FormHeading title="General Info" />
      <div className="group-order-indicator" grouporder="0" key="0">
        <LineInput
          label="Name"
          inputkey="name"
          inputValue={name}
          type="text"
          inputChange={inputChange}
          saved={saved}
        />
        <LineInput
          label="Email"
          inputkey="email"
          type="email"
          inputChange={inputChange}
          inputValue={email}
          saved={saved}
        />
        <LineInput
          label="Phone number"
          inputkey="phone"
          type="number"
          inputChange={inputChange}
          inputValue={phone}
          saved={saved}
        />
        <div className="buttons-container">
          <Button buttonType="submit">{saved ? "Edit" : "Save"}</Button>
        </div>
      </div>
    </form>
  );
};

export default GeneralInfo;
