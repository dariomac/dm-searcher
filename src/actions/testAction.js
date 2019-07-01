import * as actionTypes from './actionTypes';

export default (testPayload) => {
  return {
    type: actionTypes.TEST_ACTION,
    payload: testPayload
  };
};
