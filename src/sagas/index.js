import { takeLatest, put, call } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import actions from '../actions';

export function * watcherSaga () {
  console.log('Hello Sagas!');
  yield takeLatest(actionTypes.TEST_ACTION, testSagaFn);
}

function testSagaFn () {
  console.log('After Click me button');
}

export function * fetchSaga () {
  console.log('fetching... from saga');
  yield takeLatest(actionTypes.FETCH_INVENTORY, fetchInventory);
}
  
function * fetchInventory () {
  // fetch from server
  console.log(`fetching... now really from fetchInventory method`);
  const response = yield call(fetch, './inventory.json'); // we should remove last ',' before closing the array
  if (response.ok) {
    const data = yield call([response, 'json']);
    yield put(actions.commitInventoryAction(data));
  }
}
