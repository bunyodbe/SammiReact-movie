import { Component } from "react";
import AppFilter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import AppSearch from "../app-search/app-search";
import MovieList from "../movie-list/movie-list";
import MoviesAddForm from "../movies-add-form/movies-add-form";
// Id
import { v4 as uuidv4 } from "uuid";
// Styles
import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      db: [
        {
          name: "Empire of Osman",
          viewers: 900,
          fovourite: false,
          like: false,
          id: 1,
        },
        { name: "Ertugul", viewers: 200, fovourite: false, like: false, id: 2 },
        { name: "Omar", viewers: 300, fovourite: false, like: false, id: 3 },
        { name: "Elchi", viewers: 800, fovourite: false, like: false, id: 4 },
      ],
      term: "",
    };
  }

  // Delete item from db

  onDelete = (id) => {
    this.setState(({ db }) => ({ db: db.filter((del) => del.id !== id) }));
  };

  // Add item to db

  onAdd = (item) => {
    this.setState(({ db }) => ({
      db: [...db, { ...item, id: uuidv4(), fovourite: false, like: false }],
    }));
  };

  // add fovourite or like

  onToggleProp = (id, prop) => {
    this.setState(({ db }) => ({
      db: db.map((item) => {
        if (item.id == id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      }),
    }));
  };

  // Search Handler

  searchHandler = (arr, term) => {
    if (term.length === 0) {
      return arr;
    }
    return arr.filter((item) => item.name.toLowerCase().indexOf(term) > -1);
  };

  // Update Term

  updateTermHandler = (term) => {
    this.setState({ term });
  };

  render() {
    const { db, term } = this.state;
    const allMovieCount = db.length;
    const fovouriteMovieCount = db.filter((c) => c.fovourite).length;
    const visableData = this.searchHandler(db, term);
    return (
      <div className="app font-monospace">
        <div className="content">
          <AppInfo
            allMovieCount={allMovieCount}
            fovouriteMovieCount={fovouriteMovieCount}
          />
          <div className="search-box">
            <AppSearch updateTermHandler={this.updateTermHandler} />
            <AppFilter />
          </div>
          <MovieList
            movies={visableData}
            onDelete={this.onDelete}
            onToggleProp={this.onToggleProp}
          />
          <MoviesAddForm onAdd={this.onAdd} />
        </div>
      </div>
    );
  }
}

export default App;
