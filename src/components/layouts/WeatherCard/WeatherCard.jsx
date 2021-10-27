import s from "./weatherCard.module.scss";

const WeatherCard = ({ data }) => {
  return (
    <article className={s.card}>
      <div>city: {data.name}</div>
      <div>Weather: {data.weather[0].main}</div>
      <div>temperature: {data.main.temp}</div>
    </article>
  );
};

export default WeatherCard;
