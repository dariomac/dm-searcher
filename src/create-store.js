import { applyMiddleware, createStore, combineReducers, compose } from "redux";
import { connectRoutes } from "redux-first-router";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./rootReducer";
import AppActions from "./actions";
import rootSaga from './rootSaga';
import {
  routeMiddleware, 
  enhancer, 
  initialDispatch } from './components/Router/router.module'

export default () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [];

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  middlewares.push(routeMiddleware);
  middlewares.push(sagaMiddleware);

  const store = createStore(
    rootReducer,
    compose(
      enhancer,
      composeEnhancers(applyMiddleware(...middlewares)),
    ));

  sagaMiddleware.run(rootSaga);
  initialDispatch();

  return store;
};
