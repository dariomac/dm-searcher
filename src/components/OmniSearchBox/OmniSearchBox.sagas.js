import { takeLatest, put } from 'redux-saga/effects';
import { actions, SEARCH } from './OmniSearchBox.module';
import jsonata from 'jsonata';

export function * searchSaga(){
  yield takeLatest(SEARCH, search);
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

  yield put(actions.commitSearch(res));
}
