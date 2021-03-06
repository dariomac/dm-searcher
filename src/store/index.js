import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';
import { middleware, enhancer } from '../components/Router';
console.log('aaaaa', enhancer)
// dev tools middleware
const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const initialStore = {
  test: {
    testValue: ''
  }
};

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// create a redux store with our reducer above and middleware
export default createStore(
  rootReducer,
  initialStore,
  compose(applyMiddleware(sagaMiddleware), applyMiddleware(middleware), enhancer, reduxDevTools));

// run the saga
sagaMiddleware.run(rootSaga);
