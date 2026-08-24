import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div
            className="
        sticky
        top-0
        z-50
        flex
        items-center
        justify-center
        gap-20
        border-b
        border-white/10
        bg-[#0b0b14]/80
        px-8
        py-4
        backdrop-blur-xl
        shadow-[0_10px_30px_rgba(0,0,0,0.4)]
      "
        >
            <Link
                to="/"
                className="
          text-3xl
          font-bold
          text-white
          transition-all
          duration-300
          hover:text-blue-400
          hover:scale-105
        "
            >
                Movies
            </Link>

            <Link
                to="/watchlist"
                className="
          text-3xl
          font-bold
          text-white
          transition-all
          duration-300
          hover:text-blue-400
          hover:scale-105
        "
            >
                WatchList
            </Link>

            {/* bottom glow */}
            <div
                className="
          absolute
          bottom-0
          left-0
          h-[1px]
          w-full
          bg-gradient-to-r
          from-transparent
          via-blue-500
          to-transparent
        "
            />
        </div>
    );
};

export default Navbar;
