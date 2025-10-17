/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";

const Banner = ({ movies }) => {
  if (!movies || movies.length === 0) return null;

  const id = Math.floor(Math.random() * movies.length);

  const [Id, setId] = useState(id);
  const [banner, setBanner] = useState(movies[id]);
  const [fade, setFade] = useState(true);

  const handleBanner = (newId) => {
    setFade(false);
    setTimeout(() => {
      setId(newId);
      setBanner(movies[newId]);
      setFade(true);
    }, 500);
  };

  const handlePrev = () => {
    const newId = (Id === 0) ? 19 : Id - 1; 
    handleBanner(newId);
  };

  const handleNext = () => {
    const newId = (Id === 19) ? 0 : Id + 1;
    handleBanner(newId);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3500);

    return () => clearInterval(interval);
  }, [Id, movies]);

  return (
    <div className="relative flex justify-center overflow-hidden">
      <button
        onClick={handlePrev}
        className="absolute left-20 top-[40vh] text-[50px] p-2 hover:bg-zinc-100 text-zinc-700 rounded-xl transition active:-translate-x-2 hover:scale-110"
      >
        <GrPrevious />
      </button>

      <div className="relative scale-90 hover:scale-95"
        style={{
          opacity: fade ? 1 : 0,
          transition: "opacity 0.6s ease-in-out, transform 0.3s ease-in-out",
        }}>
        <img
          className="h-[85vh] w-[160vh] object-cover rounded-xl"
          src={`https://image.tmdb.org/t/p/original${banner.backdrop_path}`}
          alt={banner.title}
        />
        <div className="absolute bottom-0 w-full bg-black bg-opacity-70 text-white text-xl text-center font-serif p-3 rounded-b-xl">
          {banner.title}
        </div>
      </div>
      
      <button
        onClick={handleNext}
        className="absolute right-20 top-[40vh] text-[50px] p-2 hover:bg-zinc-100 text-zinc-700 rounded-xl transition active:translate-x-2 hover:scale-110"
      >
        <GrNext />
      </button>
    </div>
  );
};

export default Banner;
