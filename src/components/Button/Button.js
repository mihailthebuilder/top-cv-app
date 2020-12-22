import "./Button.scss";

const Button = (props) => {
  let buttonClick = props.hasOwnProperty("clickFunc")
    ? props.clickFunc
    : () => {};

  let buttonClass = "btn border-radius border-width regular-font-size ";

  buttonClass += props.hasOwnProperty("additionalClass")
    ? props.additionalClass
    : "normal";

  return (
    <button
      className={buttonClass}
      type={props.buttonType}
      onClick={buttonClick}
    >
      {props.buttonText}
    </button>
  );
};

export default Button;
