import { takeLatest, fork } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import { fetchSaga } from '../components/InventoryLoader/InventoryLoader.sagas';
import { searchSaga } from '../components/OmniSearchBox/OmniSearchBox.sagas';

// https://stackoverflow.com/questions/39438005/what-is-the-idiomatic-way-of-starting-rootsaga/47623129
export default function * root () {
  yield fork(fetchSaga);
  yield fork(searchSaga);
};
