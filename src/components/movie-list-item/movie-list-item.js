import "./movie-list-item.css";

const MovieListItem = (props) => {
  const { name, viewers, onDelete, fovourite, like, onToggleProp } = props;
  return (
    <li
      className={`list-group-item d-flex justify-content-between ${
        fovourite && "fovourite"
      } ${like && "like"}`}
    >
      <span
        onClick={onToggleProp}
        className="list-group-item-label"
        data-toggle="like"
      >
        {name}
      </span>
      <input
        type="number"
        className="list-group-item-input "
        defaultValue={viewers}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          onClick={onToggleProp}
          type="button"
          className="btn-cookie btn-sm"
          data-toggle="fovourite"
        >
          <i className="fas fa-cookie"></i>
        </button>
        <button type="button" className="btn-trash btn-sm">
          <i className="fas fa-trash" onClick={onDelete}></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

export default MovieListItem;
