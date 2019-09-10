import { actions } from '../OmniSearchBox';
import { takeLatest } from 'redux-saga/effects';
import { history } from 'redux-first-router'

export function * updateRouterSaga(){
  yield takeLatest(actions.SEARCH, updateRouter);
}

function updateRouter(action) {
  history().push(`/?q=${encodeURIComponent(action.payload.needle)}`);
}
