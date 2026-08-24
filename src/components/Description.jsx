import genreArr from "./genres";
import { RxCross1 } from "react-icons/rx";
import { IoIosStarOutline } from "react-icons/io";
import { BiCameraMovie } from "react-icons/bi";

const Description = ({ movie, title, details, onClose }) => {
    const genre =
        genreArr.find((g) => g.id === movie.genre_ids[0])?.name || "Unknown";

    return (
        <div
            className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/80
        p-5
        backdrop-blur-sm
      "
        >
            <div
                className="
          relative
          flex
          max-h-[80vh]
          w-[800px]
          overflow-hidden
          rounded-2xl
          border
          border-white/10
          bg-[#151522]
          text-white
          shadow-2xl
        "
            >
                {/* backdrop tint */}
                <img
                    src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                    className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            opacity-10
          "
                />

                {/* content */}
                <div
                    className="
          relative
          flex
          gap-6
          p-6
        "
                >
                    <img
                        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                        className="
              h-[380px]
              w-[250px]
              rounded-xl
              object-cover
              shadow-xl
            "
                    />

                    <div
                        className="
              flex
              flex-1
              flex-col
              justify-center
              gap-4
            "
                    >
                        <button
                            onClick={onClose}
                            className="
                absolute
                right-5
                top-5
                rounded-full
                p-2
                text-gray-400
                transition
                hover:bg-white/10
                hover:text-white
                hover:scale-110
              "
                        >
                            <RxCross1 size={22} />
                        </button>

                        <h1
                            className="
                pr-10
                text-3xl
                font-bold
              "
                        >
                            {title}
                        </h1>

                        <div
                            className="
                flex
                gap-5
                text-gray-300
              "
                        >
                            <span
                                className="
                  flex
                  items-center
                  gap-1"
                            >
                                <BiCameraMovie size={20} /> {genre}
                            </span>

                            <span
                                className="
                  flex
                  items-center
                  gap-1
                "
                            >
                                <IoIosStarOutline size={20} />
                                {movie.vote_average.toFixed(1)}
                            </span>
                        </div>

                        <p
                            className="
                text-sm
                leading-relaxed
                text-gray-300
              "
                        >
                            {details || "No description available."}
                        </p>

                        <div
                            className="
                text-sm
                text-gray-400
              "
                        >
                            Popularity: {Math.round(movie.popularity)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Description;
