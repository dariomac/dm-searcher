import { fork } from 'redux-saga/effects';

import { sagas as InventoryLoaderSagas } from './components/InventoryLoader';
import { sagas as OmniSeachBoxSagas } from './components/OmniSearchBox';
import { updateRouterSaga } from './components/Router';

// https://stackoverflow.com/questions/39438005/what-is-the-idiomatic-way-of-starting-rootsaga/47623129
export default function * root () {
  yield fork(InventoryLoaderSagas.fetch);
  yield fork(OmniSeachBoxSagas.search);
  yield fork(updateRouterSaga);
};
