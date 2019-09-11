export const types = {
  FETCH_INVENTORY: 'FETCH_INVENTORY',
  COMMIT_INVENTORY: 'COMMIT_INVENTORY'
};

const initialState = {
  inventory: null,
  loaded: false
};

export const commitInventoryFetcherReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.COMMIT_INVENTORY:
      return action.payload
    default:
      return state;
  }
};

export const creators = {
  fetchInventoryAction: (url) => {
    return {
      type: types.FETCH_INVENTORY,
      payload: { 
        url
      }
    };
  },
  commitInventoryAction: (payload) => {
    return {
      type: types.COMMIT_INVENTORY,
      payload: payload
    };
  }
};
