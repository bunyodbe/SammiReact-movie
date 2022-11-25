import { Component } from "react";

// Styles
import "./movies-add-form.css";
class MoviesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      viewers: "",
    };
  }

  // Change Input Value

  onInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // Send Input Values

  onSubmitEvent = (e) => {
    e.preventDefault();
    this.props.onAdd({
      name: this.state.name,
      viewers: this.state.viewers,
    });
    this.setState({ name: "", viewers: "" });
  };

  render() {
    const { name, viewers } = this.state;
    return (
      <div className="movie-add-form">
        <h3>Yangi kino qo'shish</h3>
        <form
          onSubmit={(e) => {
            this.onSubmitEvent(e);
          }}
          className="d-flex add-form"
        >
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
