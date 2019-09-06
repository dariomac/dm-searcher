import { combineReducers } from 'redux';
import { 
  searchReducer,
  commitSearchReducer
} from './OmniSearchBox.module';

export { SEARCH } from './OmniSearchBox.module';
export { searchSaga } from './OmniSearchBox.sagas';
export { default } from './OmniSearchBox.topmost';
export { actions } from './OmniSearchBox.module';

export const reducers = combineReducers({
  needle: searchReducer, 
  search: commitSearchReducer
});
