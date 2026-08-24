import React, { useContext, useState } from "react";
import { AppContext } from "../App";
import Description from "./Description";
import { BsBookmarkPlus, BsBookmarkDash } from "react-icons/bs";

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
                className="
          relative
          h-[40vh]
          w-43
          rounded-xl
          bg-cover
          bg-center
          flex
          flex-col
          justify-end
          cursor-pointer
          duration-200
          hover:scale-105
        "
                style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster})`,
                }}
            >
                {contains(movie) ? (
                    <div
                        onClick={(e) => {
                            e.stopPropagation();
                            handleRemove(movie);
                        }}
                        className="
              absolute
              top-2
              right-2
              rounded-2xl
              bg-black/60
              text-white
              text-2xl
              p-1
            "
                    >
                        <BsBookmarkDash />
                    </div>
                ) : (
                    <div
                        onClick={(e) => {
                            e.stopPropagation();
                            handleAdd(movie);
                        }}
                        className="
              absolute
              top-2
              right-2
              rounded-2xl
              bg-black/60
              text-white
              text-2xl
              p-1
            "
                    >
                        <BsBookmarkPlus />
                    </div>
                )}

                <div
                    className="
            w-full
            rounded-b-xl
            bg-black/80
            p-2
            text-center
            text-white
          "
                >
                    {title}
                </div>
            </div>

            {showDesc && (
                <Description
                    movie={movie}
                    title={movie.title}
                    details={movie.overview}
                    onClose={closeDesc}
                />
            )}
        </>
    );
};

export default MovieCard;
