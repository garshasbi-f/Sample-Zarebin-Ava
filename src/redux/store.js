import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import searchReducer from "../features/Search/SearchSlice";
import listReducer from "../features/AvaList/ListSlice";
import rootSaga from "./rootSaga";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
}

const sagaMiddleware = createSagaMiddleware();
const persistedReducer = persistReducer(persistConfig, searchReducer)


export const store = configureStore({
  reducer: {
    search: persistedReducer,
    list : listReducer
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);

