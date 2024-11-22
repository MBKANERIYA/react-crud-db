import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga";
import rootReducers from "./rootReducer";


let sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducers,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;