import "./movie-list.css";
import MovieListItem from "../movie-list-item/movie-list-item";
const MovieList = ({ movies, onDelete, onToggleProp }) => {
  return (
    <ul className="movie-list">
      {movies.map((item) => (
        <MovieListItem
          key={item.id}
          name={item.name}
          viewers={item.viewers}
          fovourite={item.fovourite}
          like={item.like}
          onDelete={() => {
            onDelete(item.id);
          }}
          onToggleProp={(e) => {
            onToggleProp(item.id, e.currentTarget.getAttribute("data-toggle"));
          }}
        />
      ))}
    </ul>
  );
};

export default MovieList;
