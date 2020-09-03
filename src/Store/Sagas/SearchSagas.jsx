import {
  SEARCH_ACTION_SAGA,
  SEARCH_ACTION,
} from "../ActionTypes/SearchActionTypes";
import { getData } from "../ActionCreator/GetDataActionCreator";
import { takeEvery, call, put } from "redux-saga/effects";
import axios from "axios";

const getSearchResults = async (searchTerm) =>
  await axios.get(
    `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}+terms`
  );

export function* getBooks(action) {
  try {
    const response = yield call(getSearchResults, action.payload.name);
    yield put(getData(response.data.items));
  } catch {
    console.log("error");
  }
}

export default function* rootSaga() {
  yield takeEvery(SEARCH_ACTION_SAGA, getBooks);
}
