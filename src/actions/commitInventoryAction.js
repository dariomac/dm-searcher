import * as actionTypes from './actionTypes';

export default (payload) => {
  return {
    type: actionTypes.COMMIT_INVENTORY,
    payload: payload
  };
};
