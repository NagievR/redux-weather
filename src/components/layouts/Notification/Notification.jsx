// import s from "./notification.module.scss";
// import closeIcon from "../../../assets/icons/close.svg";
// import { useEffect } from "react";
// import { useNotification } from "../../../hooks/useNotification";

// const Notification = () => {
//   const { hide, isVisible, title, text, type, duration } = useNotification();

//   useEffect(() => {
//     let timerId = null;
//     if (isVisible) {
//       timerId = setTimeout(() => {
//         hide();
//       }, duration); 
//     }
//     return () => clearTimeout(timerId);
//   }, [isVisible, hide, duration]);

//   const getIndicatorStyles = () => ({
//     transitionDuration: isVisible ? `${duration}ms` : "0ms",
//     width: isVisible ? "100%" : 0,
//   });

//   return (
//     <section className={`${s.wrap} ${s[type]} ${isVisible ? s.active : ""}`}>
//       <div className={s.inner}>
//         <div className={s.close} onClick={hide}>
//           <img src={closeIcon} alt="close" />
//         </div>
//         <h2 className={s.title}>{title}</h2>
//         <p className={s.text}>{text}</p>
//       </div>
//       <div className={s.indicator} style={getIndicatorStyles()}></div>
//     </section>
//   );
// };

// export default Notification;
