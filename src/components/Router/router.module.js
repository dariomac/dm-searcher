import { connectRoutes, NOT_FOUND } from 'redux-first-router';
import createHistory from 'history/createBrowserHistory';
import queryString from 'query-string';

const history = createHistory();

// THE WORK:
const routesMap = {
  HOME: '/'
};

export const { reducer, middleware, enhancer } = connectRoutes(history, routesMap, {
  querySerializer: queryString
}); // yes, 3 redux aspects

export const pageReducer = (state = {}, action = {}) => {
  console.log(action);
  switch (action.type) {
    case 'HOME':
      return {
        ...state,
        query: action.payload.query
      };
    case NOT_FOUND:
      return null;
    default:
      return state;
  }
};
