export const fetchMovies = async (filmName) => {
  const response = await fetch(
    `http://www.omdbapi.com/?s=${filmName}&apikey=7cef29d6`
  );
  const data = await response.json();

  return data;
};
