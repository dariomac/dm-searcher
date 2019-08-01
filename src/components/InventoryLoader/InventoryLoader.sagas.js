import { takeLatest, put, call } from 'redux-saga/effects';
import { actions, FETCH_INVENTORY } from './InventoryLoader.module';

export function * fetchSaga () {
  yield takeLatest(FETCH_INVENTORY, fetchInventory);
}
  
function * fetchInventory (action) {
  // fetch from server
  const response = yield call(fetch, action.payload.url); // we should remove last ',' before closing the array
  if (response.ok) {
    const data = yield call([response, 'json']);
    yield put(actions.commitInventoryAction(data));
  }
}
