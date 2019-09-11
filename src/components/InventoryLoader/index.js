import { combineReducers } from 'redux';
import { 
  commitInventoryFetcherReducer
} from './InventoryLoader.module';

export { sagas } from './InventoryLoader.sagas';

export { types as actions } from './InventoryLoader.module';
export { creators } from './InventoryLoader.module';

export const reducers = combineReducers({
  inventory: commitInventoryFetcherReducer,
});

export { default } from './InventoryLoader.topmost';
