import { useState } from "react";
import AppFilter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import AppSearch from "../app-search/app-search";
import MovieList from "../movie-list/movie-list";
import MoviesAddForm from "../movies-add-form/movies-add-form";
// Id
import { v4 as uuidv4 } from "uuid";
// Styles
import "./app.css";

const App = () => {
  const [data, setData] = useState(arr);
  const [term, setTerm] = useState("");
  const [filter, setFilter] = useState("all");

  const onDelete = (id) => setData(data.filter((del) => del.id !== id));
  const onAdd = (item) =>
    setData([
      ...data,
      { ...item, id: uuidv4(), fovourite: false, like: false },
    ]);

  const onToggleProp = (id, prop) =>
    data.map((item) => {
      if (item.id == id) {
        return { ...item, [prop]: !item[prop] };
      }
      return item;
    });

  const searchHandler = (arr, term) => {
    if (term.length === 0) {
      return arr;
    }
    return arr.filter((item) => item.name.toLowerCase().indexOf(term) > -1);
  };

  const filterHandler = (arr, filter) => {
    switch (filter) {
      case "popular":
        return arr.filter((item) => item.viewers > 400);
      case "like":
        return arr.filter((item) => item.like);
      default:
        return arr;
    }
  };

  const updateTermHandler = (term) => setTerm(term);
  const updateFilterHandler = (filter) => setFilter(filter);

  return (
    <div className="app font-monospace">
      <div className="content">
        <AppInfo
          allMovieCount={data.le}
          fovouriteMovieCount={data.filter((c) => c.fovourite).length}
        />
        <div className="search-box">
          <AppSearch updateTermHandler={updateTermHandler} />
          <AppFilter
            filter={filter}
            updateFilterHandler={updateFilterHandler}
          />
        </div>
        <MovieList
          movies={filterHandler(searchHandler(data, term), filter)}
          onDelete={onDelete}
          onToggleProp={onToggleProp}
        />
        <MoviesAddForm onAdd={onAdd} />
      </div>
    </div>
  );
};

const arr = [
  {
    name: "Empire of Osman",
    viewers: 900,
    fovourite: false,
    like: false,
    id: 1,
  },
  { name: "Ertugul", viewers: 200, fovourite: false, like: false, id: 2 },
  { name: "Omar", viewers: 300, fovourite: false, like: false, id: 3 },
  { name: "Elchi", viewers: 800, fovourite: false, like: true, id: 4 },
];

export default App;
