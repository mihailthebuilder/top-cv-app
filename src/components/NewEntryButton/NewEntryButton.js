import "./NewEntryButton.scss";

const NewEntryButton = (props) => {
  console.log(props);

  let [buttonText, buttonTrigger] = props.newEntry
    ? ["Save", ""]
    : ["Add", props.newEntryButtonClick];

  return (
    <div className="button-section">
      <button
        onClick={buttonTrigger}
        className="new-entry-button border-radius border-width regular-font-size"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default NewEntryButton;
