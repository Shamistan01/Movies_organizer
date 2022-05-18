import { all, call } from "redux-saga/effects";
import cartSaga from "./cart/saga";

function* rootSaga() {
  yield all([call(cartSaga)]);
}

export default rootSaga;
