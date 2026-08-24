import { useEffect, useRef, useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";

const FADE_DURATION = 1000;
const AUTO_PLAY_DELAY = 4000;

const Banner = ({ movies }) => {
    const [currentIndex, setCurrentIndex] = useState(() =>
        movies?.length ? Math.floor(Math.random() * movies.length) : 0,
    );

    const [nextIndex, setNextIndex] = useState(null);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [titleVisible, setTitleVisible] = useState(true);

    const transitionTimer = useRef(null);
    const titleTimer = useRef(null);

    /*
     * Change movie
     */
    const changeBanner = (newIndex) => {
        if (!movies?.length) return;
        if (isTransitioning) return;
        if (newIndex === currentIndex) return;

        // Clear old timers
        if (transitionTimer.current) {
            clearTimeout(transitionTimer.current);
        }

        if (titleTimer.current) {
            clearTimeout(titleTimer.current);
        }

        /*
         * Hide current title before changing image.
         */
        setTitleVisible(false);

        /*
         * Put new movie on top.
         */
        setNextIndex(newIndex);
        setIsTransitioning(true);

        /*
         * Change actual current movie AFTER
         * the image transition has completed.
         */
        transitionTimer.current = setTimeout(() => {
            setCurrentIndex(newIndex);
            setNextIndex(null);
            setIsTransitioning(false);

            /*
             * Bring new title in after image settles.
             */
            titleTimer.current = setTimeout(() => {
                setTitleVisible(true);
            }, 100);
        }, FADE_DURATION);
    };

    /*
     * Next
     */
    const handleNext = () => {
        if (!movies?.length) return;

        const next = currentIndex === movies.length - 1 ? 0 : currentIndex + 1;

        changeBanner(next);
    };

    /*
     * Previous
     */
    const handlePrev = () => {
        if (!movies?.length) return;

        const previous =
            currentIndex === 0 ? movies.length - 1 : currentIndex - 1;

        changeBanner(previous);
    };

    /*
     * Auto play
     */
    useEffect(() => {
        if (!movies?.length) return;

        const interval = setInterval(() => {
            if (!isTransitioning) {
                const next =
                    currentIndex === movies.length - 1 ? 0 : currentIndex + 1;

                changeBanner(next);
            }
        }, AUTO_PLAY_DELAY);

        return () => clearInterval(interval);
    }, [currentIndex, isTransitioning, movies]);

    /*
     * Cleanup
     */
    useEffect(() => {
        return () => {
            if (transitionTimer.current) {
                clearTimeout(transitionTimer.current);
            }

            if (titleTimer.current) {
                clearTimeout(titleTimer.current);
            }
        };
    }, []);

    /*
     * Keep index valid
     */
    useEffect(() => {
        if (!movies?.length) {
            setCurrentIndex(0);
            return;
        }

        if (currentIndex >= movies.length) {
            setCurrentIndex(0);
        }
    }, [movies, currentIndex]);

    if (!movies?.length) {
        return null;
    }

    const currentMovie = movies[currentIndex];

    const nextMovie = nextIndex !== null ? movies[nextIndex] : null;

    if (!currentMovie) {
        return null;
    }

    return (
        <div className="relative mt-8 rounded-3xl flex justify-center overflow-hidden">
            <div className="relative h-[85vh] w-[160vh] overflow-hidden rounded-xl">
                {/*  
            CURRENT IMAGE
         */}

                <img
                    src={`https://image.tmdb.org/t/p/original${currentMovie.backdrop_path}`}
                    alt={currentMovie.title}
                    className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
          "
                />

                {/*
            NEXT IMAGE

            This sits ON TOP of the current image and
            smoothly fades + zooms into place.*/}

                {nextMovie && (
                    <img
                        key={nextIndex}
                        src={`https://image.tmdb.org/t/p/original${nextMovie.backdrop_path}`}
                        alt={nextMovie.title}
                        className="
              absolute
              inset-0
              z-10
              h-full
              w-full
              object-cover
              banner-image-enter
            "
                    />
                )}

                {/*
            DARK OVERLAY
         */}

                <div
                    className="
            pointer-events-none
            absolute
            inset-0
            z-20
            bg-gradient-to-t
            from-black/85
            via-black/20
            to-transparent
          "
                />

                <div
                    className="
            pointer-events-none
            absolute
            inset-0
            z-20
            bg-gradient-to-r
            from-black/40
            via-transparent
            to-black/20
          "
                />

                {/*  
            TITLE
          */}

                <div
                    className={`
            absolute
            bottom-0
            left-0
            z-30
            w-full
            p-8
            text-white
            transition-all
            duration-500
            ease-out

            ${
                titleVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
            }
          `}
                >
                    <h1
                        className="
            text-3xl
            font-bold
            tracking-wide
            drop-shadow-[0_3px_8px_rgba(0,0,0,0.8)]
            md:text-4xl
          "
                    >
                        {currentMovie.title}
                    </h1>
                </div>

                {/*  
            PREVIOUS BUTTON
         */}

                <button
                    onClick={handlePrev}
                    disabled={isTransitioning}
                    aria-label="Previous movie"
                    className="
            group
            absolute
            left-6
            top-1/2
            z-40
            -translate-y-1/2
            rounded-full
            bg-black/30
            p-4
            text-4xl
            text-white
            backdrop-blur-md
            transition-all
            duration-300
            hover:scale-110
            hover:bg-white/20
            active:scale-95
            disabled:cursor-not-allowed
            disabled:opacity-40
            md:left-8
          "
                >
                    <GrPrevious
                        className="
              transition-transform
              duration-300
              group-hover:-translate-x-1
            "
                    />
                </button>

                {/* 
            NEXT BUTTON
          */}

                <button
                    onClick={handleNext}
                    disabled={isTransitioning}
                    aria-label="Next movie"
                    className="
            group
            absolute
            right-6
            top-1/2
            z-40
            -translate-y-1/2
            rounded-full
            bg-black/30
            p-4
            text-4xl
            text-white
            backdrop-blur-md
            transition-all
            duration-300
            hover:scale-110
            hover:bg-white/20
            active:scale-95
            disabled:cursor-not-allowed
            disabled:opacity-40
            md:right-8
          "
                >
                    <GrNext
                        className="
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
                    />
                </button>

                {/*  
            DOTS
          */}

                <div
                    className="
          absolute
          bottom-6
          right-8
          z-40
          flex
          items-center
          gap-2
        "
                >
                    {movies.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => changeBanner(index)}
                            disabled={isTransitioning}
                            aria-label={`Go to movie ${index + 1}`}
                            className={`
                h-2
                rounded-full
                transition-all
                duration-500
                ${
                    index === currentIndex
                        ? "w-8 bg-white"
                        : "w-2 bg-white/40 hover:bg-white/80"
                }
              `}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Banner;