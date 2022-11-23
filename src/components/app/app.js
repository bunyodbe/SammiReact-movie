import "./app.css";
import AppFilter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import AppSearch from "../app-search/app-search";
import MovieList from "../movie-list/movie-list";
import MoviesAddForm from "../movies-add-form/movies-add-form";

const App = () => {
  return (
    <div className="app font-monospace">
      <div className="content">
        <AppInfo />
        <div className="search-box">
          <AppSearch />
          <AppFilter />
        </div>
        <MovieList />
        <MoviesAddForm />
      </div>
    </div>
  );
};

export default App;
