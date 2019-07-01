import { takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';

export function * watcherSaga () {
  console.log('Hello Sagas!');
  yield takeLatest(actionTypes.TEST_ACTION, testSagaFn);
}

function testSagaFn () {
  console.log('After Click me button');
}
