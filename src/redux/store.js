import rootReducer from "./rootReducer";
import { configureStore } from "@reduxjs/toolkit";
import getProducts from "../saga/saga";
import createSagaMiddleware from "@redux-saga/core";
const sagaMiddleWare = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleWare: () => {
    return sagaMiddleWare
  },
});
sagaMiddleWare.run(getProducts);
export default store;
