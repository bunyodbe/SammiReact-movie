import AppFilter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import AppSearch from "../app-search/app-search";
import MovieList from "../movie-list/movie-list";
import MoviesAddForm from "../movies-add-form/movies-add-form";
import Counter from "../counter/counter";
import "./app.css";

const App = () => {
  const db = [
    { name: "Empire of Osman", viewers: 900, fovourite: false, id: 1 },
    { name: "Ertugul", viewers: 200, fovourite: false, id: 2 },
    { name: "Osman", viewers: 300, fovourite: true, id: 3 },
  ];
  return (
    <div className="app font-monospace">
      <div className="content">
        <AppInfo />
        <div className="search-box">
          <AppSearch />
          <AppFilter />
        </div>
        <MovieList movies={db} />
        <MoviesAddForm />
      </div>
    </div>
    // <Counter />
  );
};

export default App;
