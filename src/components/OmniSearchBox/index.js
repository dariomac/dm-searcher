import { combineReducers } from 'redux';
import { 
  searchReducer,
  commitSearchReducer
} from './OmniSearchBox.module';

export { sagas } from './OmniSearchBox.sagas';

export { types as actions} from './OmniSearchBox.module';
export { creators } from './OmniSearchBox.module';

export const reducers = combineReducers({
  needle: searchReducer, 
  search: commitSearchReducer
});

export { default } from './OmniSearchBox.topmost';
