import "./movie-list.css";
import MovieListItem from "../movie-list-item/movie-list-item";
const MovieList = () => {
  return (
    <div className="movie-list">
      <MovieListItem />
      <MovieListItem />
      <MovieListItem />
      <MovieListItem />
    </div>
  );
};

export default MovieList;
