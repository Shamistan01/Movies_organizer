export const fetchMovies = async (filmName) => {
  const response = await fetch(
    `http://www.omdbapi.com/?s=${filmName}&apikey=7cef29d6`
  );
  const data = await response.json();

  return data;
};

export const saveFetchMovieList = async (payload) => {
  const response = await fetch(
    "https://acb-api.algoritmika.org/api/movies/list",
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
    }
  );
  const data = await response.json();
  return data;
};
