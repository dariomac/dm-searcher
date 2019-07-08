import * as actionTypes from '../actions/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.COMMIT_INVENTORY:
      return action.payload;
    default:
      return state;
  }
};
