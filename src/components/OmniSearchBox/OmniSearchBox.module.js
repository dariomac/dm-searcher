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
  searchAction: (needle, haystack) => {
    return {
      type: SEARCH,
      payload: {
        needle,
        haystack
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
