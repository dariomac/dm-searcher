import { combineReducers } from 'redux';
import testReducer from './testReducer';

import {
  commitInventoryFetcher
  // fetchInventoryReducer,
} from '../components/InventoryLoader/InventoryLoader.module';

export default combineReducers({
  test: testReducer,
  articles: commitInventoryFetcher
});
