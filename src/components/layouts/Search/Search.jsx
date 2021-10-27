import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./search.module.scss";

import { fetchWeatherCard } from "../../../store/actions/actionsCurrentWeather";

import Button from "../../elements/Button/Button";
import Input from "../../elements/Input/Input";

const Search = () => {
  const [search, setSearch] = useState("");
  const loading = useSelector((state) => state.loading.isAddingLoading);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const searchTrimmed = search.trim();
    if (searchTrimmed) {
      dispatch(fetchWeatherCard(searchTrimmed));
      setSearch("");
    }
  };

  return (
    <section className={s.container}>
      <Input value={search} onChange={setSearch} />
      <Button
        loading={loading}
        text="Search"
        width="60px"
        onClick={handleSubmit}
      />
    </section>
  );
};

export default Search;
