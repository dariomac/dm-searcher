import * as actionTypes from '../actions/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case actionTypes.TEST_ACTION:
      return {
        ...state,
        testValue: action.payload
      };

    default:
      return state;
  }
};
