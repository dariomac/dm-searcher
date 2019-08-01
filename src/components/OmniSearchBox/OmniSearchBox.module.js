export const SEARCH = 'SEARCH';
export const COMMIT_SEARCH = 'COMMIT_SEARCH';
export const CLEAR = 'CLEAR';
export const COMMIT_CLEAR = 'COMMIT_CLEAR';

export const searchReducer = (state = {}, action) => {
  switch (action.type) {
    case SEARCH:
      return action.payload.needle;
    default:
      return state;
  };
};

export const commitSearchReducer = (state = {}, action) => {
  switch (action.type) {
    case COMMIT_SEARCH:
      return {
        ...state,
        findings: action.payload,
        filtered: true
      }
    default:
      return state;
  }
}

export const actions = {
  searchAction: (needle, inventorySelector) => {
    return {
      type: SEARCH,
      payload: {
        needle,
        inventorySelector
      }
    }
  },
  commitSearch: (findings) => {
    return {
      type: COMMIT_SEARCH,
      payload: findings
    }
  }
}
