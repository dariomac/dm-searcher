import { takeLatest, select, put, call } from 'redux-saga/effects';
import { actions, SEARCH, selectors } from './OmniSearchBox.module';
import jsonata from 'jsonata';

export function * searchSaga(){
  yield takeLatest(SEARCH, search);
}

function * search(action) {
  const haystack = yield select((state) => state[action.payload.inventorySelector]);

  // Jsonata
  // **[$contains(`Product Name`, 'Hat')].SKU ~> $sort(function($l, $r) {$l > $r})
  // **[$contains(`Product Name`, 'Hat')].[SKU, Price]
  // **[$contains(`Product Name`, 'Hat')].({'s': $.SKU, 'p': $.Price})^(>s)

  // **[$contains(`laneid`, 'Essay')].({'title':$.title, 'position':$.position})
  console.log(action.payload.needle)
  let res;
  try {
    const expr = jsonata(action.payload.needle);
    res = expr.evaluate(haystack);
  }
  catch (err) {
    console.log('Error: ', {err});
    res = {};
  }

  yield put(actions.commitSearch(res));
}
