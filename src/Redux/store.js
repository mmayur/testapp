// import { createStore } from "redux";

// import reducer from "./reducer";

// const store = createStore(reducer);

// export default store;
// import { createStore, applyMiddleware } from "redux";
// import { connectRouter, routerMiddleware } from "connected-react-router";
// import { createBrowserHistory } from "history";
// //import { composeWithDevTools } from "redux-devtools-extension";
// import createSagaMiddleware from "redux-saga";

// import rootReducer from "./reducers/reducer";
// import sagas from "./sagas";

// export const history = createBrowserHistory();

// const sagaMiddleware = createSagaMiddleware();

// //const initialState = {};
// // const enhancers = [];

// // const middleware = [routerMiddleware(history), sagaMiddleware];

// // const composedEnhancers = composeWithDevTools(
// // 	applyMiddleware(...middleware),
// // 	...enhancers
// // );

// const store = createStore(rootReducer, applyMiddleware());

// sagaMiddleware.run(sagas);

// export default store;

import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

// import reducer from './reducers'
// import mySaga from './sagas'

import rootReducer from "./reducers/index.js";
import sagas from "./sagas/index";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// then run the saga
sagaMiddleware.run(sagas);

export default store;
