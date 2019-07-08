import { combineReducers } from 'redux';
import testReducer from './testReducer';
// import fetchInventoryReducer from './fetchInventoryReducer';
import commitInventoryReducer from './commitInventoryReducer';

export default combineReducers({
  test: testReducer,
  articles: commitInventoryReducer
});
