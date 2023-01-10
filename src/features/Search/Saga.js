import { takeEvery, call, put } from "redux-saga/effects";
import { getListFromServer } from "../../api/searchApi";
import { GET_RESULTS } from "./Action";
import { addSearchResults, setErrorMessage, setLoading } from "./SearchSlice";

function* handleGetResults(action) {
  try {
    yield put(setLoading())
    const response = yield call(getListFromServer, action.payload);
    yield put(addSearchResults(response));
    yield put(setErrorMessage(null))
    
  } catch (error) {
    yield put(setErrorMessage("Somthing went wrong..."))
  }
  yield put(setLoading())
}

function* searchSaga() {
  yield takeEvery(GET_RESULTS, handleGetResults);
}

export default searchSaga;
