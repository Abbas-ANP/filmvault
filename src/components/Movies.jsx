import MovieCard from "./Moviecard";
import Pages from "./Pages";
import { useState, useEffect } from "react";
import axios from "axios";

// eslint-disable-next-line no-unused-vars
const Movies = ({ watchList, setWatchList,  handleAdd, handleRemove }) => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=1152863d5704b220e05d09c811c487fa&language=en-US&page=${page}`
      )
      .then(function (response) {
        setMovies(response.data.results);
      });
  }, [page]);

  return (
    <>
      <h1 className="text-center mt-6 text-xl font-bold">Trending Movies</h1>
      <div className="m-8 flex flex-wrap gap-x-10 justify-around">
        {movies.map((movie) => {
          return <MovieCard movie={movie} key={movie.id} poster={movie.poster_path} title={movie.title} watchList={watchList} handleAdd={handleAdd} handleRemove={handleRemove} />;
        })}
      </div>
      <Pages page={page} setPage={setPage} />
    </>
  );
};

export default Movies;
