import { call, put, takeEvery, all, delay } from "redux-saga/effects";
import { countReducer } from "./count.reducer";
import axios from "axios";

function* fetchData() {
  const response = yield call(() =>
    axios.get("https://jsonplaceholder.typicode.com/todos/1")
  );
  yield put(countReducer.actions.setData(response));
}

export function* watchData() {
  yield takeEvery(countReducer.actions.setDataAsync.type, fetchData);
}

export function* rootSaga() {
  yield all([watchData()]);
}
