import s from "./weatherCard.module.scss";
import { useDispatch } from "react-redux";
import { updateWeatherCard } from "../../../store/actions/actionsCurrentWeather";
import { useSelector } from "react-redux";
import UpdateBtn from "../../elements/UpdateBtn/UpdateBtn";

const isUpdatingCheck = (state, id) => {
  return state.loading.updatingCardsIds.includes(id);
};

const WeatherCard = ({ data }) => {
  const isUpdating = useSelector((state) => isUpdatingCheck(state, data.id));
  const dispatch = useDispatch();

  const update = () => {
    dispatch(updateWeatherCard(data.name, data.id));
  };

  return (
    <article className={s.card}>
      <UpdateBtn isUpdating={isUpdating} onClick={update} />
      <div>city: {data.name}</div>
      <div>Weather: {data.weather[0].main}</div>
      <div>temperature: {data.main.temp}</div>
      {/* <button className={true ? "rotate" : ""} onClick={update}>
        <img src={updatingArrows} alt="loading" />
      </button> */}
    </article>
  );
};

export default WeatherCard;
