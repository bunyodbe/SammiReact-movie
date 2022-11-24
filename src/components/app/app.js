import { Component } from "react";
import AppFilter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import AppSearch from "../app-search/app-search";
import MovieList from "../movie-list/movie-list";
import MoviesAddForm from "../movies-add-form/movies-add-form";

import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      db: [
        { name: "Empire of Osman", viewers: 900, fovourite: false, id: 1 },
        { name: "Ertugul", viewers: 200, fovourite: false, id: 2 },
        { name: "Omar", viewers: 300, fovourite: true, id: 3 },
      ],
    };
  }

  // Delete item from db

  onDelete = (id) => {
    this.setState(({ db }) => ({ db: db.filter((del) => del.id !== id) }));
  };

  // Add item to db

  onAdd = (item) => {
    this.setState(({ db }) => ({ db: [...db, item] }));
  };

  render() {
    const { db } = this.state;
    return (
      <div className="app font-monospace">
        <div className="content">
          <AppInfo />
          <div className="search-box">
            <AppSearch />
            <AppFilter />
          </div>
          <MovieList movies={db} onDelete={this.onDelete} />
          <MoviesAddForm onAdd={this.onAdd} />
        </div>
      </div>
    );
  }
}

export default App;
