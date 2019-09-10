import { takeLatest, put, fork } from 'redux-saga/effects';
import { creators, types } from './OmniSearchBox.module';
import jsonata from 'jsonata';

export function * searchSaga() {
  yield takeLatest(types.SEARCH, search);
}

function * search(action) {
  const {haystack, needle} = action.payload;

  let res;
  try {
    const expr = jsonata(needle);
    res = expr.evaluate(haystack);
  }
  catch (err) {
    console.log('Error: ', {err});
  }

  if (!res) {
    res = {};
  }

  yield put(creators.commitSearch(res));
}

export const sagas = {
  search: function * () {
    yield takeLatest(types.SEARCH, search);
  }
};
