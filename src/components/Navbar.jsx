import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center pl-2 py-1 justify-center gap-x-20 align-center border">
        {/* <img src={film} className="w-[50px]" alt="" /> */}
        <Link to="/" className="text-black font-bold text-3xl mt-[10px] mb-[10px]">
          Movies
        </Link>
        <Link to="/watchlist" className="text-black-500 font-bold text-3xl mt-[10px] mb-[10px]">
          WatchList
        </Link>
      </div>
    </>
  );
};

export default Navbar;
