import React, { Component, useEffect, useState } from "react";
import MovieItem from "../MovieItem/MovieItem";
import { useSelector } from "react-redux";
import "./Movies.css";
import { fetchMovies } from "../../manager/REST.js";

function Movies() {
  const [movies, setMovies] = useState([]);

  const select = useSelector((state) => state);

  useEffect(() => {
    console.log(select.cartReducer.movieGoods);
    setMovies(select.cartReducer.movieGoods);
  });

  // const moviesList = useSelector(fetchMovies);

  return (
    <ul className="movies">
      {movies.map((moviesList) => (
        <li className="movies__item" key={moviesList.imdbID}>
          <MovieItem {...moviesList} />
        </li>
      ))}
    </ul>
  );
}

export default Movies;
