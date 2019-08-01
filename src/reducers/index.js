import { combineReducers } from 'redux';
import testReducer from './testReducer';

import {
  commitInventoryFetcher
} from '../components/InventoryLoader/InventoryLoader.module';

import {
  searchReducer,
  commitSearchReducer
} from '../components/OmniSearchBox/OmniSearchBox.module'

export default combineReducers({
  test: testReducer,
  articles: commitInventoryFetcher,
  needle: searchReducer,
  omniSearchBox: commitSearchReducer
});
