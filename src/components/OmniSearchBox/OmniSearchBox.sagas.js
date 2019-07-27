import { takeLatest, select, put, call } from 'redux-saga/effects';
import { actions, SEARCH, selectors } from './OmniSearchBox.module';
import JSPath from 'jspath';

export function * searchSaga(){
  yield takeLatest(SEARCH, search);
}

function * search(action) {
  const articles = {
      inventory: yield select((state) => state[action.payload.inventorySelector])
  }
  
  console.log(articles)

  // .articles.laneid
  // ..laneid
  let res;
  try {
    res = JSPath.apply(action.payload.q, articles);
  }
  catch (err) {
    res = {};
  }

  yield put(actions.commitSearch(res));
}
