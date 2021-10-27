import React, { useEffect, useState } from "react";

const Input = ({
  value = "",
  onChange,
  extraStyles,
  width,
  inputType = "text",
}) => {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(value);
  }, [value])

  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    onChange && onChange(value);
  };

  return (
    <input
      onChange={handleChange}
      value={inputValue}
      type={inputType}
      style={{ width, ...extraStyles }}
    />
  );
};

export default Input;
