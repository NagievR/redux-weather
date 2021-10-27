import CardsGrid from '../components/layouts/CardsGrid/CardsGrid';
import Search from '../components/layouts/Search/Search';

const MainPage = () => {

  return (
    <div className="container">
      <Search />
      <CardsGrid />
    </div>
  );
}

export default MainPage;
