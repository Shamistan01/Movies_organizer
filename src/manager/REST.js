export const fetchMovies = async (filmName) => {
  const response = await fetch(
    `http://www.omdbapi.com/?s=${filmName}&apikey=7cef29d6`
  );
  const data = await response.json();
  // console.log(data);
  console.log(data.Search);

  let res1 = data.Search;

  return res1;
};
