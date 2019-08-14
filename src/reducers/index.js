import { combineReducers } from 'redux';

import {
  commitInventoryFetcher
} from '../components/InventoryLoader/InventoryLoader.module';

import {
  searchReducer,
  commitSearchReducer
} from '../components/OmniSearchBox/OmniSearchBox.module';

import {
  reducer,
  pageReducer
} from '../components/Router/router.module';

export default combineReducers({
  articles: commitInventoryFetcher,
  needle: searchReducer,
  omniSearchBox: commitSearchReducer,
  location: reducer,
  pages: pageReducer
});
