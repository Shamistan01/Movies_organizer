import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ListPage.css";
import { useSelector } from "react-redux";
import { saveMovieList } from "../../manager/StarList/selector";

function ListPage() {
  const [movies, setMovies] = useState([]);
  const params = useParams();

  const saveFilms = useSelector(saveMovieList);

  useEffect(() => {
    console.log(params?.id);
    setMovies(saveFilms);
    // TODO: запрос к сервер на получение списка
    // TODO: запросы к серверу по всем imdbID
  });

  return (
    <div className="list-page">
      <h1 className="list-page__title">Мой список</h1>
      <ul>
        {movies.map((item) => {
          return (
            <li key={item.imdbID}>
              <a
                href={`https://www.imdb.com/title/${item.imdbID}/`}
                target="_blank"
              >
                {item.Title} ({item.Year})
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ListPage;
