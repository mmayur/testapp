import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./reducers/index.js";
import sagas from "./sagas/index";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// then run the saga
sagaMiddleware.run(sagas);

export default store;
