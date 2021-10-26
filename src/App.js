import { useDispatch } from "react-redux";
import { fetchCurrentWeather } from "./store/actions/actionsCurrentWeather";

function App() {
  const dispatch = useDispatch();

  const test = () => dispatch(fetchCurrentWeather('lozova'));

  return (
    <div className="App">
      <h1>Redux Weather Simple test</h1>
      <button onClick={test}>test</button>
    </div>
  );
}

export default App;
