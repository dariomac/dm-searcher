import { SEARCH } from '../OmniSearchBox';
import { actions } from './';
import { takeLatest } from 'redux-saga/effects';
import { history } from 'redux-first-router'

export function * updateRouterSaga(){
  yield takeLatest(SEARCH, updateRouter);
}

function updateRouter(action) {
  console.log(actions)
  history().push(`/?q=${encodeURIComponent(action.payload.needle)}`);
}
