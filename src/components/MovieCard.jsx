import React, { useContext, useState } from "react";
import { AppContext } from "../App";
import Description from "./Description";

const MovieCard = ({ movie, poster, title }) => {
  const { watchList, handleAdd, handleRemove } = useContext(AppContext);
  const [showDesc, setShowDesc] = useState(false);

  const contains = (movie) => watchList.some((m) => m.id === movie.id);

  const toggleDesc = () => setShowDesc(true);
  const closeDesc = () => setShowDesc(false);

  return (
    <>
      <div
        onClick={toggleDesc}
        className="h-[40vh] w-40 mb-8 bg-cover bg-center items-end rounded-xl hover:scale-110 duration-200 hover:cursor-pointer flex flex-col justify-end relative"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster})`,
        }}
      >
        {contains(movie) ? (
          <div
            onClick={(e) => {
              e.stopPropagation(); // watchlist adder and remover will not popup description
              handleRemove(movie);
            }}
            className="bg-black bg-opacity-60 p-1 rounded-xl absolute top-2 right-2"
          >
            &#10060;
          </div>
        ) : (
          <div
            onClick={(e) => {
              e.stopPropagation();
              handleAdd(movie);
            }}
            className="bg-black bg-opacity-60 p-1 rounded-xl absolute top-2 right-2"
          >
            &#128525;
          </div>
        )}

        <div className="text-white text-center bg-black bg-opacity-80 w-full rounded-b-xl font-serif p-2">
          {title}
        </div>
      </div>

      {showDesc && <Description movie={movie} title={movie.title} details={movie.overview} onClose={closeDesc} />}
    </>
  );
};

export default MovieCard;
