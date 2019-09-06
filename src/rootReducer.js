import { combineReducers } from 'redux';

import {
  commitInventoryFetcher as inventoryFetcher
} from './components/InventoryLoader/InventoryLoader.module';

import {
  reducers as omniSearchReducer
} from './components/OmniSearchBox';

import {
  routeReducer,
  pageReducer
} from './components/Router/router.module';

export default combineReducers({
  articles: inventoryFetcher,
  omniSearchBox: omniSearchReducer,
  pages: pageReducer,
  location: routeReducer
});
