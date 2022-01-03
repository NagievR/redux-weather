import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getItemLS } from "../../../helpers/localStorageManager";
import { bulkFetchWeatherCard } from "../../../store/actions/actionsCurrentWeather";
import useNotification from "../../../hooks/useNotification";
import WeatherCard from "../WeatherCard/WeatherCard";

const CardsGrid = () => {
  const [cardsToShow, setCardsToShow] = useState([]);
  const cards = useSelector((state) => state.currentWeather.cityList);
  const dispatch = useDispatch();
  const notif = useNotification();

  useEffect(() => {
    const storedNameCards = getItemLS('cityNames');

    if (cards.length) {
      setCardsToShow(cards);

    } else if (storedNameCards.length) {
      dispatch(bulkFetchWeatherCard(storedNameCards));
      setCardsToShow(storedNameCards);

    } else if (cardsToShow.length) {
      setCardsToShow([]);
    }
  }, [cards, dispatch]);
  
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
