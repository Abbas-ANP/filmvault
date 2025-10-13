import MovieCard from "./Moviecard";
import Pages from "./Pages";
import { useState, useEffect } from "react";
import axios from "axios";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  let [watchList, setWatchList] = useState([]);

  let handleWatchList = (movie) => {
    let newWatchList = [...watchList, movie];
    setWatchList(newWatchList);
    console.log(newWatchList);
  };

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
          return <MovieCard movie={movie} key={movie.id} poster={movie.poster_path} title={movie.title} handleWatchList={handleWatchList} />;
        })}
      </div>
      <Pages page={page} setPage={setPage} />
    </>
  );
};

export default Movies;
