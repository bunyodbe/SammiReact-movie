import "./movie-list.css";
import MovieListItem from "../movie-list-item/movie-list-item";
const MovieList = ({ movies }) => {
  return (
    <ul className="movie-list">
      {movies.map((item) => (
        <MovieListItem
          key={item.id}
          name={item.name}
          viewers={item.viewers}
          fovourite={item.fovourite}
        />
      ))}
    </ul>
  );
};

export default MovieList;
