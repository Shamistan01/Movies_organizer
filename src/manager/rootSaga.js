import { all, call } from "redux-saga/effects";
import cartSaga from "./Movies/saga";
import favoritesSaga from "./StarList/saga";

function* rootSaga() {
  yield all([call(cartSaga),call(favoritesSaga)]);
}

export default rootSaga;
