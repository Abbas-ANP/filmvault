import genreArr from "./genres";
import { RxCross1 } from "react-icons/rx";

const Description = ({ movie, title, details, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <div className="bg-white text-black p-6 rounded-xl max-w-[800px] text-center shadow-lg relative">
        <h1
          className="text-lg font-bold text-3xl"
          style={{
            textShadow: "2px 2px 5px rgba(0,0,0,0.3)",
          }}
        >
          {title}
        </h1>
        <button
          onClick={onClose}
          className="absolute top-5 right-5 rounded-xl text-black text-xl transition hover:scale-125 active:scale-95"
        >
          <RxCross1 />
        </button>
        <p className="mt-5 mb-20 relative">
          <span className="absolute font-semibold left-20">
            Genre :{" "}
            {genreArr.find((genre) => genre.id === movie.genre_ids[0])?.name ||
              "Unknown"}
          </span>
          <span className="absolute font-semibold right-20">
            Ratings : {Math.round(movie.vote_average * 10) / 10}
          </span>
        </p>
        <p
          className="p-5 m-3 mb-10 text-base rounded-xl"
          style={{
            boxShadow: "inset 0 0 15px rgba(0,0,0,0.2)",
          }}
        >
          {details || "No description available."}
        </p>
      </div>
    </div>
  );
};

export default Description;
