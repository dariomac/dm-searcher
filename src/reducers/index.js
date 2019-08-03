import { combineReducers } from 'redux';

import {
  commitInventoryFetcher
} from '../components/InventoryLoader/InventoryLoader.module';

import {
  searchReducer,
  commitSearchReducer
} from '../components/OmniSearchBox/OmniSearchBox.module'

export default combineReducers({
  articles: commitInventoryFetcher,
  needle: searchReducer,
  omniSearchBox: commitSearchReducer
});
