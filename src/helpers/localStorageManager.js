export const setItemLS = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getItemLS = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export const pushToArrayLS = (key, newValue) => {
  const prev = getItemLS(key) || [];
  setItemLS(key, [...prev, newValue]);
};

export const removeElementFromArrayLS = (key, toRemove, byKey) => {
  const storedData = getItemLS(key);

  const updatedData = storedData.filter(item => {
    if (typeof item === "object" && !Array.isArray(item)) {
      return item[byKey] !== toRemove;

    } else if (!Array.isArray(item)) {
      return item !== toRemove

    } else {
      console.warn("removing arrays from arrays in local storage doesnt implemented");
      return true;
    }
  });

  setItemLS(key, updatedData);
};
