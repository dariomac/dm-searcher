import { takeLatest, put, call } from 'redux-saga/effects';
import { actions, FETCH_INVENTORY } from './InventoryLoader.module';

export function * fetchSaga () {
  console.log('fetching... from saga');
  yield takeLatest(FETCH_INVENTORY, fetchInventory);
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
