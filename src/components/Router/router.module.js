import { connectRoutes, NOT_FOUND } from 'redux-first-router';
import queryString from 'query-string';

export const routesMap = {
  "QS_SEARCH": "/",
  "TODO": "/todo"
};

export const { 
  reducer: routeReducer, 
  middleware: routeMiddleware, 
  enhancer, 
  initialDispatch 
} = connectRoutes(routesMap, {
  initialDispatch: false,
  querySerializer: queryString
});

export const pageReducer = (state = {}, action = {}) => {
  switch (action.type) {
    case 'QS_SEARCH':{
      console.log('from reducer: ', {state});
      return state;
    }
    case NOT_FOUND:
      return null;
    default:
      return state;
  }
};
