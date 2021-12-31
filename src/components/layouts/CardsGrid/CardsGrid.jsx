import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import useLocalStorage from "../../../hooks/useLocalStorage";
import { bulkFetchWeatherCard } from "../../../store/actions/actionsCurrentWeather";
import WeatherCard from "../WeatherCard/WeatherCard";

const CardsGrid = () => {
  const [cardsToShow, setCardsToShow] = useState([]);
  const [storedCityNames] = useLocalStorage("cityNames");
  const cards = useSelector((state) => state.currentWeather.cityList);
  const dispatch = useDispatch();

  useEffect(() => {
    // if (!cards) {
      dispatch(bulkFetchWeatherCard(['lozova', 'lviv', 'kiev']));
    // }
  }, []);

  // const isListEmpty = !cards && !storedCityNames;
  
  let content;
  if (cardsToShow.length) {
    content = (
      <ul className="grid">
        {cardsToShow.map((card) => (
          <li key={card.id}>
            <WeatherCard data={card} />
          </li>
        ))}
      </ul>
    );
  } else {
    content = <div>You haven`t added weather cards yet</div>;
  }

  return <section>{content}</section>;
};

export default CardsGrid;
