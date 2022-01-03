import { useState } from "react";
import { getItemLS, setItemLS } from "../helpers/localStorageManager";

const getItem = (key) => {
  if (!key) {
    return;
  }
  const storedValue = getItemLS(() => getItem(key));
  if (storedValue) {
    return storedValue;
  }
};

const useLocalStorage = (key) => {
  // get value from local storage
  const [value, setValue] = useState(getItem);

  const setValueToStorage = (key, value) => {
    if (!key || !value) {
      return console.error('cant set data to localStorage. "key" or "value" is empty');
    }
    setItemLS(key, value);
    setValue(value);
  };

  return [value, getItem, setValueToStorage];
};

export default useLocalStorage;
