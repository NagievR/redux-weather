import { useSelector } from "react-redux";
import WeatherCard from "../WeatherCard/WeatherCard";

const CardsGrid = () => {
  const cardList = useSelector((state) => state.currentWeather.cityList);

  return (
    <section>
      <ul className="grid">
        {cardList.map((card) => (
          <li key={card.id}>
            <WeatherCard data={card} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CardsGrid;
