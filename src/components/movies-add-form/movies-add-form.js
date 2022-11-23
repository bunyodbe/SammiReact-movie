import { Component } from "react";
import "./movies-add-form.css";

class MoviesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      viewers: "",
    };
  }

  onInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name, viewers } = this.state;
    return (
      <div className="movie-add-form">
        <h3>Yangi kino qo'shish</h3>
        <form className="d-flex add-form">
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Qanday kino?"
            value={name}
            name="name"
            onChange={this.onInputChange}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="Nechi marotaba ko'rilgan?"
            value={viewers}
            name="viewers"
            onChange={this.onInputChange}
          />
          <button type="submit" className="btn btn-outline-dark">
            Qo'shish
          </button>
        </form>
      </div>
    );
  }
}

export default MoviesAddForm;
