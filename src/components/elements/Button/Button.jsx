import s from "./button.module.scss";

const Button = ({
  disabled,
  loading,
  extraStyles,
  width,
  onClick,
  text = "Submit",
}) => {
  const handleClick = () => {
    onClick && onClick();
  };

  const isDisabled = loading ? true : disabled;

  return (
    <button
      onClick={handleClick}
      style={{ width, ...extraStyles }}
      className={`${s.btn} ${isDisabled ? s.disabled : ""}`}
      disabled={isDisabled}
    >
      {loading ? <div className="preloader" /> : text}
    </button>
  );
};

export default Button;
