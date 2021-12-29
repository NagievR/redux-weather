import s from "./updateBtn.module.scss";
import updatingArrows from "../../../assets/icons/update-arrows.svg";
import { useEffect, useState } from "react";

const ANIMATION_DURATION_MS = 300;

const UpdateBtn = ({ isUpdating, onClick }) => {
  /**
   * isAnimatedClass used to remove an animation class with delay
   * to do arrow rotating at least one time 
   */
  const [isAnimatedClass, setIsAnimatedClass] = useState(false);

  useEffect(() => {
    if (!isUpdating) {
      setTimeout(() => {
        isAnimatedClass && setIsAnimatedClass(false);
      }, ANIMATION_DURATION_MS);
    } else {
      setIsAnimatedClass(true);
    }
  }, [isUpdating, isAnimatedClass]);

  const handleClick = () => {
    if (!isAnimatedClass && onClick) {
      onClick();
    }
  };

  const setAnimationIterations = () => ({
    animationIterationCount: isUpdating ? "infinite" : 1,
  });

  return (
    <button
      onClick={handleClick}
      className={`${s.btn} ${isAnimatedClass ? s.rotation : ""}`}
      style={setAnimationIterations()}
    >
      <img src={updatingArrows} alt="loading" />
    </button>
  );
};

export default UpdateBtn;
