import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import WatchList from "./components/WatchList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState, createContext } from "react";
import Banner from "./components/Banner";

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext();

const App = () => {
  let [watchList, setWatchList] = useState([]);

  let handleAdd = (movie) => {
    let newWatchList = [...watchList, movie];
    localStorage.setItem("moviesApp", JSON.stringify(newWatchList));
    setWatchList(newWatchList);
  };

  const handleRemove = (currMov) => {
    let filteredWatchList = watchList.filter((movie) => {
      return movie.id != currMov.id;
    });
    localStorage.setItem("moviesApp", JSON.stringify(filteredWatchList));
    setWatchList(filteredWatchList);
  };

  useEffect(() => {
    if (localStorage.getItem("moviesApp"))
      setWatchList(JSON.parse(localStorage.getItem("moviesApp")));
  }, []);

  return (
    <>
      <AppContext.Provider
        value={{ watchList, setWatchList, handleAdd, handleRemove }}
      >
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Movies />
                </>
              }
            />
            <Route path="/watchlist" element={<WatchList />} />
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </>
  );
};

export default App;
