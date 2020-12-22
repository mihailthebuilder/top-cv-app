import "./Button.scss";

const Button = (props) => {
  let buttonClick = props.hasOwnProperty("clickFunc")
    ? props.clickFunc
    : () => {};

  return (
    <button
      className="btn border-radius border-width regular-font-size"
      type={props.buttonType}
      onClick={buttonClick}
    >
      {props.buttonText}
    </button>
  );
};

export default Button;
