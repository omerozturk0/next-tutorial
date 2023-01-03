import { createContext, useEffect, useState } from "react";

const initStates = {
  page: 1,
  movies: [],
  setPage: () => {},
};

export const MoviesContext = createContext(initStates);

const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    (async function () {
      const response = await fetch(`https://63ac87a934c46cd7ae84aec1.mockapi.io/api/v1/movies?page=${page}&limit=9`);
      setMovies(await response.json());
    })();
  }, [page]);

  return (
    <MoviesContext.Provider value={{
      movies,
      page,
      setPage,
    }}>
      {children}
    </MoviesContext.Provider>
  )
}

export default MoviesProvider;
