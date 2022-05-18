import { takeEvery, put, call, select } from "redux-saga/effects";
import { ADD_MOVIE, DELETE_MOVIE } from "../constants";
import { addMovieAction, moviesData } from "./actions";
import { getCartMoviesSelector } from "./selectors";
import { fetchMovies } from "../REST";

function* workerMovie(action) {
  try {
    const data = yield call(fetchMovies, action.payload);
    console.log(data);
    yield put(moviesData(data));
    // yield select(getCartMoviesSelector);
  } catch (err) {
    console.error("ERROR", err);
  }
}

export default function* watcherCart() {
  yield takeEvery(ADD_MOVIE, workerMovie);
}
