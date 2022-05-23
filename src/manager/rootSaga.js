import { all, call } from "redux-saga/effects";
import cartSaga from "./Movies/saga";
import favoritesSaga from "./StarList/saga";
import listSaga from "./List/saga"

function* rootSaga() {
  yield all([call(cartSaga),call(favoritesSaga),call(listSaga)]);
}

export default rootSaga;
