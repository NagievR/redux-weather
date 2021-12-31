const pushToLocalStorage = (key, newValue) => {
  const prev = JSON.parse(localStorage.getItem(key)) || [];
  localStorage.setItem(key, JSON.stringify([...prev, newValue]));
};

export default pushToLocalStorage;
