import React, { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./MovieCard";
import SearchBar from "./SearchBar";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState("black");
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=9db20ba3bf248415e9cfb0518a034233&language=en-US&query=${
        searchMovie || "to"
      }&page=1&include_adult=false`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(data.results);
        setMovies(data.results);
      });
  }, [searchMovie]);

  return (
    <>
      <div className="spacear wrap">
        <SearchBar searchMovie={searchMovie} setSearchMovie={setSearchMovie} />
        {movies.map((movie) => (
          <MovieCard title={movie.title} image={movie.poster_path} />
        ))}
      </div>
    </>
  );
}

export default App;
