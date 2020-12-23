import "./Button.scss";

const Button = (props) => {
  //sometimes function may be passed which should be triggered on click
  let buttonClick = props.hasOwnProperty("clickFunc")
    ? props.clickFunc
    : () => {};

  let buttonClass = "btn border-radius border-width regular-font-size ";

  //sometimes additional styling class passed
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
