import * as actionTypes from '../actions/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.FETCH_INVENTORY:
      console.log('fetching... reducer???');
      return state;
    default:
      return state;
  }
};
