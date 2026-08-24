import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";
import { useEffect } from "react";

const Pages = ({ page, setPage }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [page]);

    return (
        <div
            className="
        flex
        flex-col
        items-center
        justify-center
        mt-10
        mb-10
        gap-4
      "
        >
            {/* Pagination */}
            <div
                className="
          flex
          items-center
          gap-5
          rounded-2xl
          border
          border-white/10
          bg-white/10
          px-5
          py-3
          text-white
          backdrop-blur-xl
          shadow-lg
        "
            >
                {/* Previous */}
                <button
                    onClick={() => setPage(page === 1 ? 1 : page - 1)}
                    disabled={page === 1}
                    className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            text-xl
            transition-all
            duration-300
            hover:bg-white
            hover:text-black
            active:-translate-x-1
            disabled:opacity-30
          "
                >
                    <FaLongArrowAltLeft />
                </button>

                {/* Current Page */}
                <div
                    className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            bg-blue-600
            text-xl
            font-bold
            shadow-lg
            shadow-blue-600/30
          "
                >
                    {page}
                </div>

                {/* Next */}
                <button
                    onClick={() => setPage(page + 1)}
                    className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            text-xl
            transition-all
            duration-300
            hover:bg-white
            hover:text-black
            active:translate-x-1
          "
                >
                    <FaLongArrowAltRight />
                </button>
            </div>

            {/* Back button */}
            {page !== 1 && (
                <button
                    onClick={() => setPage(1)}
                    className="
            rounded-xl
            border
            border-white/10
            bg-white/10
            px-5
            py-2
            font-semibold
            text-white
            backdrop-blur-lg
            transition-all
            duration-300
            hover:bg-white
            hover:text-black
          "
                >
                    Back to Home
                </button>
            )}
        </div>
    );
};

export default Pages;
