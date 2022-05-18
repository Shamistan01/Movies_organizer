import { ADD_MOVIE, MOVIES_DATA } from "../constants";

export const addMovieAction = (good) => ({ type: ADD_MOVIE, payload: good });
export const moviesData = (obj) => ({
  type: MOVIES_DATA,
  payload: obj,
});
