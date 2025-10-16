const MovieCard = ({ movie, poster, title, watchList, handleAdd, handleRemove }) => {

  const contains = (movie) => {
    for (let i = 0; i < watchList.length; i++) {
      if (watchList[i].id == movie.id) return true;
    }
    return false;
  }

  return (
    <div
      className="h-[40vh] w-40 mb-8 bg-cover bg-center items-end rounded-xl hover:scale-110 duration-200 hover:cursor-pointer w-1/8 flex flex-col justify-end relative"
      style={{
        backgroundImage:
          `url(https://image.tmdb.org/t/p/original/${poster})`
      }}
    >
      {contains(movie) ? 
        (<div onClick={() => handleRemove(movie)} className="bg-black bg-opacity-60 p-1 rounded-xl absolute top-2 right-2">&#10060;</div>)
      :
        (<div onClick={() => handleAdd(movie)} className="bg-black bg-opacity-60 p-1 rounded-xl absolute top-2 right-2">&#128525;</div>)
      }
      <div className="text-white text-center bg-black bg-opacity-80 w-full rounded-b-xl font-serif p-1">
        {title}
      </div>
    </div>
  );
};

export default MovieCard;