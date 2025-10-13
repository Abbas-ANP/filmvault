import film from "../assets/film.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center pl-2 py-1 space-x-8 border">
        <img src={film} className="w-[50px]" alt="" />
        <Link to="/" className="text-blue-500 font-bold text-2xl">
          Movies
        </Link>
        <Link to="/watchlist" className="text-blue-500 font-bold text-2xl">
          WatchList
        </Link>
      </div>
    </>
  );
};

export default Navbar;
