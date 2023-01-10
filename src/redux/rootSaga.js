import {fork} from "redux-saga/effects";
import searchSaga from "../features/Search/Saga"

function* rootSaga (){
    yield fork(searchSaga)
}


export default rootSaga;