import { useEffect, useState } from "react";

const defineHowMuchTimeHasPassed = (timestamp) => {
  const curr = Date.now();
  const diff = curr - timestamp;
  const diffMins = Math.round(diff / 1000 / 60);

  if (diffMins === 0) {
    return "now";
  } else if (diffMins < 5 && diffMins >= 1) {
    return "more than 1m ago";
  } else if (diffMins < 10 && diffMins >= 5) {
    return "more than 5m ago";
  } else if (diffMins < 30 && diffMins >= 10) {
    return "more than 10m ago";
  } else if (diffMins < 60 && diffMins <= 30) {
    return "about 30m ago";
  } else if (diffMins <= 60) {
    return "about 1h ago";
  } else {
    return "long ago";
  }
};

const usePassedTime = (timestamp) => {
  const [passed, setPassed] = useState();

  useEffect(() => {
    const setPassedTime = () => {
      setPassed(defineHowMuchTimeHasPassed(timestamp));
    };
    setPassedTime();
    const timerId = setInterval(setPassedTime, 50000);
    return () => clearInterval(timerId);
  }, [timestamp]);

  return passed;
};

export default usePassedTime;
