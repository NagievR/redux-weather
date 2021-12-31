import s from "./weatherCard.module.scss";
import { useDispatch } from "react-redux";
import {
  updateWeatherCard,
  removeCard,
} from "../../../store/actions/actionsCurrentWeather";
import { useSelector } from "react-redux";
import UpdateBtn from "../../elements/UpdateBtn/UpdateBtn";
import usePassedTimeCount from "../../../hooks/usePassedTimeCount";

const isUpdatingCheck = (state, id) => {
  return state.loading.updatingCardsIds.includes(id);
};

const WeatherCard = ({ data }) => {
  const isUpdating = useSelector((state) => isUpdatingCheck(state, data.id));
  const dispatch = useDispatch();
  const passedTime = usePassedTimeCount(data.updatedAt);

  const update = () => {
    dispatch(updateWeatherCard(data.name, data.id));
  };

  const remove = () => {
    dispatch(removeCard(data.id));
  }

  return (
    <article className={s.card}>
      <UpdateBtn isUpdating={isUpdating} onClick={update} />
      <div>last update: {passedTime}</div>
      <button onClick={remove}>Remove</button>
      <div>city: {data.name}</div>
      <div>Weather: {data.weather[0].main}</div>
      <div>temperature: {data.main.temp}</div>
    </article>
  );
};

export default WeatherCard;
