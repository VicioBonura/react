import Header from "./components/Header/Header";
import List from "./components/List/List";
import Pagination from "./components/Pagination/Pagination";
import usePokeApi from "./hooks/usePokeApi"
import "./App.css";

const App = () => {
  const LIMIT = 20
  const {pokemon, page, totalPages, hasNextPage, hasPreviousPage, goToPrevPage, goToNextPage, onLimitChange} = usePokeApi(LIMIT)

  return (
    <div className="app--container">
      <Header />

      <List pokemon={pokemon} />

      <Pagination
        goToPrevPage={goToPrevPage}
        goToNextPage={goToNextPage}
        hasPreviousPage={hasPreviousPage}
        hasNextPage={hasNextPage}
        page={page}
        totalPages={totalPages}
        onLimitChange={onLimitChange}
      />

    </div>
  );
};

export default App;