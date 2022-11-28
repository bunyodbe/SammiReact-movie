import { useState } from "react";
// Styles
import "./movies-add-form.css";

const MoviesAddForm = ({ onAdd }) => {
  const [state, setState] = useState({ name: "", viewers: "" });
  const onInputChange = (e) =>
    setState({ ...state, [e.target.name]: e.target.value.trim() });
  const onSubmitEvent = (e) => {
    e.preventDefault();
    if (state.name === "" || state.viewers === "") return;
    onAdd({
      name: state.name,
      viewers: state.viewers,
    });
    setState({ name: "", viewers: "" });
  };

  return (
    <div className="movie-add-form">
      <h3>Yangi kino qo'shish</h3>
      <form onSubmit={(e) => onSubmitEvent(e)} className="d-flex add-form">
        <input
          type="text"
          className="form-control new-post-label"
          placeholder="Qanday kino?"
          value={state.name}
          name="name"
          onChange={onInputChange}
        />
        <input
          type="number"
          className="form-control new-post-label"
          placeholder="Nechi marotaba ko'rilgan?"
          value={state.viewers}
          name="viewers"
          onChange={onInputChange}
        />
        <button type="submit" className="btn btn-outline-dark">
          Qo'shish
        </button>
      </form>
    </div>
  );
};

export default MoviesAddForm;
