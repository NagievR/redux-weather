import s from "./notification.module.scss";
import closeIcon from "../../../assets/icons/close.svg";
import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideNotification } from "../../../store/actions/actionNotification";

const Notification = () => {
  const dispatch = useDispatch();
  const { isVisible, title, text, type, duration } = useSelector(
    (state) => state.notification
  );

  const hide = useCallback(() => dispatch(hideNotification()), [dispatch]);

  useEffect(() => {
    let timerId = null;
    if (isVisible) {
      timerId = setTimeout(hide, duration);
    }
    return () => clearTimeout(timerId);
  }, [isVisible, duration, hide]);

  const getIndicatorStyles = () => ({
    transitionDuration: isVisible ? `${duration}ms` : "0ms",
    width: isVisible ? "100%" : 0,
  });

  return (
    <section className={`${s.wrap} ${s[type]} ${isVisible ? s.active : ""}`}>
      <div className={s.inner}>
        <div className={s.close} onClick={hide}>
          <img src={closeIcon} alt="close" />
        </div>
        <h2 className={s.title}>{title}</h2>
        <p className={s.text}>{text}</p>
      </div>
      <div className={s.indicator} style={getIndicatorStyles()}></div>
    </section>
  );
};

export default Notification;
