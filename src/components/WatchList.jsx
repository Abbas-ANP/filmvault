import { FaArrowUpLong, FaArrowDownLong, FaTrash } from "react-icons/fa6";
import { useState, useEffect, useContext } from "react";
import { AppContext } from "../App";
import genreArr from "./genres";

const WatchList = () => {
    const { watchList, setWatchList } = useContext(AppContext);

    const [search, setSearch] = useState("");
    const [genreList, setGenreList] = useState(["All Genres"]);
    const [currGenre, setCurrGenre] = useState("All Genres");

    useEffect(() => {
        const genres = watchList.map(
            (movie) =>
                genreArr.find((g) => g.id === movie.genre_ids[0])?.name ||
                "Unknown",
        );

        setGenreList(["All Genres", ...new Set(genres)]);
    }, [watchList]);

    const handleDelete = (movie) => {
        const updated = watchList.filter(
            (currMovie) => currMovie.id !== movie.id,
        );

        localStorage.setItem("moviesApp", JSON.stringify(updated));

        setWatchList(updated);
    };

    const sortAscend = () => {
        setWatchList(
            [...watchList].sort((a, b) => a.vote_average - b.vote_average),
        );
    };

    const sortDescend = () => {
        setWatchList(
            [...watchList].sort((a, b) => b.vote_average - a.vote_average),
        );
    };

    const filteredMovies = watchList
        .filter((movie) => {
            if (currGenre === "All Genres") return true;

            return (
                genreArr.find((g) => g.id === movie.genre_ids[0])?.name ===
                currGenre
            );
        })
        .filter((movie) =>
            movie.title.toLowerCase().includes(search.toLowerCase()),
        );

    return (
        <div
            className="
      min-h-screen
      pb-32
      p-8
      text-white
    "
        >
            {/* Title */}
            <h1
                className="
        mb-10
        text-center
        text-4xl
        font-bold
      "
            >
                My WatchList
            </h1>

            {/* Genres */}
            <div
                className="
        mb-10
        flex
        flex-wrap
        justify-center
        gap-3
      "
            >
                {genreList.map((genre) => (
                    <button
                        key={genre}
                        onClick={() => setCurrGenre(genre)}
                        className={`
              rounded-full
              px-5
              py-2
              font-semibold
              transition-all
              duration-300

              ${
                  currGenre === genre
                      ? "bg-blue-600 scale-105"
                      : "bg-white/20 hover:bg-white/30"
              }
            `}
                    >
                        {genre}
                    </button>
                ))}
            </div>

            {/* Search + Sort */}
            <div
                className="
        mb-8
        flex
        flex-wrap
        items-center
        justify-between
        gap-5
      "
            >
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search movie..."
                    className="
            w-72
            rounded-xl
            bg-white/90
            px-4
            py-3
            text-black
            outline-none
          "
                />

                <div
                    className="
          flex
          items-center
          gap-3
          rounded-xl
          bg-white/10
          p-2
          backdrop-blur-md
        "
                >
                    <button
                        onClick={sortAscend}
                        className="
              rounded-lg
              p-3
              transition
              hover:bg-white/20
            "
                    >
                        <FaArrowUpLong />
                    </button>

                    <span className="font-bold">Rating</span>

                    <button
                        onClick={sortDescend}
                        className="
              rounded-lg
              p-3
              transition
              hover:bg-white/20
            "
                    >
                        <FaArrowDownLong />
                    </button>
                </div>
            </div>

            {/* Movie Container */}
            <div
                className="
        min-h-[50vh]
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-white/10
        backdrop-blur-lg
      "
            >
                {filteredMovies.length === 0 ? (
                    <div
                        className="
              flex
              h-[50vh]
              items-center
              justify-center
              text-2xl
              text-gray-300
            "
                    >
                        Add movies to your WatchList
                    </div>
                ) : (
                    filteredMovies.map((movie) => (
                        <div
                            key={movie.id}
                            className="
                flex
                items-center
                justify-between
                border-b
                border-white/10
                px-6
                py-7
                transition-all
                duration-300
                hover:bg-white/10
                hover:scale-[1.01]
              "
                        >
                            {/* Movie Info */}
                            <div
                                className="
                flex
                w-[65%]
                items-center
                gap-6
              "
                            >
                                <img
                                    className="
                    h-28
                    w-20
                    rounded-lg
                    object-cover
                    shadow-lg
                  "
                                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                                />

                                <div
                                    className="
                  flex
                  flex-col
                  gap-2
                "
                                >
                                    <h2
                                        className="
                    text-xl
                    font-bold
                  "
                                    >
                                        {movie.title}
                                    </h2>

                                    <p
                                        className="
                    text-blue-300
                  "
                                    >
                                        {genreArr.find(
                                            (g) => g.id === movie.genre_ids[0],
                                        )?.name || "Unknown"}
                                    </p>

                                    <p
                                        className="
                    max-w-xl
                    overflow-hidden
                    text-sm
                    leading-relaxed
                    text-gray-300
                  "
                                    >
                                        {movie.overview}
                                    </p>
                                </div>
                            </div>

                            {/* Stats */}
                            <div
                                className="
                flex
                w-[35%]
                items-center
                justify-end
                gap-8
              "
                            >
                                <div
                                    className="
                  min-w-40
                  rounded-full
                  bg-yellow-400
                  px-4
                  py-2
                  text-center
                  font-bold
                  text-black
                "
                                >
                                    Rating: {movie.vote_average.toFixed(1)}
                                </div>

                                <div>
                                    Popularity: {movie.popularity.toFixed(0)}
                                </div>

                                <button
                                    onClick={() => handleDelete(movie)}
                                    className="
                    rounded-full
                    bg-red-500/20
                    p-3
                    text-red-400
                    transition
                    hover:bg-red-500
                    hover:text-white
                  "
                                >
                                    <FaTrash />
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default WatchList;
