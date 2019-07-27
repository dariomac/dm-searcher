import { takeLatest, fork } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import { fetchSaga } from '../components/InventoryLoader/InventoryLoader.sagas';
import { searchSaga } from '../components/OmniSearchBox/OmniSearchBox.sagas';

export function * watcherSaga () {
  console.log('Hello Sagas!');
  yield takeLatest(actionTypes.TEST_ACTION, testSagaFn);
}

function testSagaFn () {
  console.log('After Click me button');
}

// https://stackoverflow.com/questions/39438005/what-is-the-idiomatic-way-of-starting-rootsaga/47623129
export default function * root () {
  yield fork(fetchSaga);
  yield fork(searchSaga);
};
