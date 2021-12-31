import { useEffect, useState } from "react";

const useLocalStorage = (key) => {
  const [value, setValue] = useState(() => {
    if (!key) {
      return;
    }
    const storedValue = JSON.parse(localStorage.getItem(key));
    if (storedValue) {
      return storedValue;
    }
  });

  useEffect(() => console.log(value), [value]);

  const setValueToStorage = (key, value) => {
    if (!key || !value) {
      return console.error('cant set data to localStorage. "key" or "value" is empty');
    }
    localStorage.setItem(key, JSON.stringify(value));
    setValue(value);
  };

  return [value, setValueToStorage];
};

export default useLocalStorage;
