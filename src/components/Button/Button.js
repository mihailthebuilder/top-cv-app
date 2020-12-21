import "./Button.scss";

const Button = (props) => {
  return (
    <button
      className="btn border-radius border-width regular-font-size"
      type={props.buttonType}
    >
      {props.buttonText}
    </button>
  );
};

export default Button;
