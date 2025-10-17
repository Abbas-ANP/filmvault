import { FaArrowUpLong, FaArrowDownLong } from "react-icons/fa6";
import { useState, useEffect, useContext } from "react";
import { AppContext } from "../App";
import genreArr from "./genres";

const WatchList = () => {
  const { watchList, setWatchList } = useContext(AppContext);

  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState(["All Genres"]);
  const [currGenre, setCurrGenre] = useState("All Genres");

  const handleCurrGenre = (genre) => {
    setCurrGenre(genre);
  };

  useEffect(() => {
    let genres = watchList.map((movie) => {
      return (
        genreArr.find((g) => g.id === movie.genre_ids[0])?.name || "Unknown"
      );
    });
    genres = new Set(genres);
    setGenreList(["All Genres", ...genres]);
  }, [watchList]);

  let handleSearch = (e) => {
    setSearch(e.target.value);
  };

  // Remember to always copy array before sorting
  const sortAscend = () => {
    let sortedAscend = [...watchList].sort((current, next) => {
      return current.vote_average - next.vote_average;
    });

    setWatchList([...sortedAscend]);
  };

  const sortDescend = () => {
    let sortedDescend = [...watchList].sort((current, next) => {
      return next.vote_average - current.vote_average;
    });

    setWatchList([...sortedDescend]);
  };

  let handleDelete = (movie) => {
    let deletedWatchList = watchList.filter((currMovie) => {
      return movie.id !== currMovie.id;
    });
    localStorage.setItem("moviesApp", JSON.stringify(deletedWatchList));
    setWatchList([...deletedWatchList]);
  };

  return (
    <>
      <div className="flex justify-center flex-wrap m-6">
        {genreList.map((genre) => {
          return (
            <div
              key={genre}
              onClick={() => handleCurrGenre(genre)}
              className={
                currGenre == genre
                  ? "flex items-center justify-center bg-blue-400 w-[120px] h-[40px] font-bold text-white rounded-xl mx-2 cursor-pointer"
                  : "flex items-center justify-center bg-gray-400/50 w-[120px] h-[40px] font-bold text-white rounded-xl mx-2 cursor-pointer"
              }
            >
              {genre}
            </div>
          );
        })}
      </div>

      <div className="flex flex-col items-center m-6">
        <input
          onChange={handleSearch}
          value={search}
          className="w-60 h-10 bg-zinc p-3 mb-5 text-black outline-none"
          style={{ backgroundColor: "rgba(223, 223, 223, 1)" }}
          placeholder="Search Movie"
        />
      </div>

      <div className="border rounded-lg overflow-hidden m-4">
        <table className="border w-full">
          <thead className="bg-gray-100/70 h-10">
            <tr>
              <th className="w-1/2">Movie</th>
              <th className="flex flex-row justify-center items-center">
                <div className="p-2 cursor-pointer" onClick={sortAscend}>
                  <FaArrowUpLong />
                </div>
                <div className="p-2">Ratings</div>
                <div className="p-2 cursor-pointer" onClick={sortDescend}>
                  <FaArrowDownLong />
                </div>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
              <th></th>
            </tr>
          </thead>

          <tbody className="border">
            {watchList
              .filter((movie) => {
                if (currGenre === "All Genres") return true;
                return (
                  genreArr.find((g) => g.id === movie.genre_ids[0])?.name ===
                  currGenre
                );
              })
              .filter((movie) => {
                return movie.title
                  .toLowerCase()
                  .includes(search.toLocaleLowerCase());
              })
              .map((movie) => {
                return (
                  <tr key={movie.id} className="text-center border">
                    <td>
                      <div className="flex items-center ">
                        <img
                          className="w-15 h-20 m-5"
                          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                        />
                        <div>{movie.title}</div>
                      </div>
                    </td>
                    <td>{Math.round(movie.vote_average * 10) / 10}</td>
                    <td>{Math.round(movie.popularity * 100) / 100}</td>
                    <td>
                      {genreArr.find((genre) => genre.id === movie.genre_ids[0])
                        ?.name || "Unknown"}
                    </td>

                    <td className="text-red-700">
                      <span
                        onClick={() => handleDelete(movie)}
                        className="cursor-pointer"
                      >
                        Delete
                      </span>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        
      </div>

      {watchList.length === 0 && (
                <div className="text-center mt-40 text-2xl">Add movies to Watch List</div>
      )}
    </>
  );
};

export default WatchList;
