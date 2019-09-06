import { fork } from 'redux-saga/effects';

import { fetchSaga } from './components/InventoryLoader';
import { searchSaga } from './components/OmniSearchBox';
import { updateRouterSaga } from './components/Router';

// https://stackoverflow.com/questions/39438005/what-is-the-idiomatic-way-of-starting-rootsaga/47623129
export default function * root () {
  yield fork(fetchSaga);
  yield fork(searchSaga);
  yield fork(updateRouterSaga);
};
