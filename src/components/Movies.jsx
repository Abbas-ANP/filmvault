import MovieCard from "./MovieCard";
import Banner from "./Banner";
import Pages from "./Pages";
import { useState, useEffect } from "react";
import axios from "axios";

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        axios
            .get(
                `https://api.themoviedb.org/3/movie/popular?api_key=1152863d5704b220e05d09c811c487fa&language=en-US&page=${page}`,
            )
            .then((response) => {
                setMovies(response.data.results);
            });
    }, [page]);

    return (
        <div className="bg-solid rounded-xl animate-[fadeIn_.5s_ease]">
            <Banner movies={movies} />

            <div className="mx-8 mt-12 flex items-center gap-4">
                <div className="h-[1px] flex-1 bg-white/20" />
                <h1 className="text-3xl font-bold">Trending Movies</h1>
                <div className="h-[1px] flex-1 bg-white/20" />
            </div>

            <div className="mx-8 mt-10 grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {movies.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        movie={movie}
                        poster={movie.poster_path}
                        title={movie.title}
                    />
                ))}
            </div>

            <Pages page={page} setPage={setPage} />
        </div>
    );
};

export default Movies;
