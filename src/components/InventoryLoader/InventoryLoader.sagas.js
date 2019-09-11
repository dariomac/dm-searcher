import { takeLatest, put, call } from 'redux-saga/effects';
import { creators, types } from './InventoryLoader.module';
  
function * fetchInventory (action) {
  // fetch from server
  const response = yield call(fetch, action.payload.url); // we should remove last ',' before closing the array
  if (response.ok) {
    const data = yield call([response, 'json']);
    yield put(creators.commitInventoryAction(data));
  }
}

export const sagas = { 
  fetch: function * () {
    yield takeLatest(types.FETCH_INVENTORY, fetchInventory);
  }
};
