import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import WatchList from "./components/WatchList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Banner from "./components/Banner";

const App = () => {
  let [watchList, setWatchList] = useState([]);

  let handleAdd = (movie) => {
    let newWatchList = [...watchList, movie];
    localStorage.setItem("moviesApp", JSON.stringify(newWatchList));
    setWatchList(newWatchList);
    console.log(newWatchList);
  };

  const handleRemove = (currMov) => {
    let filteredWatchList = watchList.filter((movie) => {
      return movie.id != currMov.id;
    });
    localStorage.setItem("moviesApp", JSON.stringify(filteredWatchList));
    setWatchList(filteredWatchList);
    console.log(filteredWatchList);
  };

  useEffect(() => {
    if (localStorage.getItem("moviesApp"))
      setWatchList(JSON.parse(localStorage.getItem("moviesApp")));
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies
                  watchList={watchList}
                  setWatchList={setWatchList}
                  handleAdd={handleAdd}
                  handleRemove={handleRemove}
                />
              </>
            }
          />
          <Route
            path="/watchlist"
            element={<WatchList watchList={watchList} setWatchList={setWatchList} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
