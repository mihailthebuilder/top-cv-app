import "./Button.scss";

const Button = (props) => {
  return (
    <button
      onClick={props.buttonTrigger}
      className="btn border-radius border-width regular-font-size"
    >
      {props.buttonText}
    </button>
  );
};

export default Button;
