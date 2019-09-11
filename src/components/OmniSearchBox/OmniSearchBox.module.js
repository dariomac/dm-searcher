export const types = {
  SEARCH: 'SEARCH',
  COMMIT_SEARCH: 'COMMIT_SEARCH',
  CLEAR: 'CLEAR',
  COMMIT_CLEAR: 'COMMIT_CLEAR'
}

export const searchReducer = (state = {}, action) => {
  switch (action.type) {
    case types.SEARCH:
      return action.payload.needle;
    default:
      return state;
  };
};

export const commitSearchReducer = (state = {}, action) => {
  switch (action.type) {
    case types.COMMIT_SEARCH:
      return {
        ...state,
        findings: action.payload,
        filtered: true
      }
    default:
      return state;
  }
}

export const creators = {
  searchAction: (needle, haystack) => {
    return {
      type: types.SEARCH,
      payload: {
        needle,
        haystack
      }
    }
  },
  commitSearch: (findings) => {
    return {
      type: types.COMMIT_SEARCH,
      payload: findings
    }
  }
}
