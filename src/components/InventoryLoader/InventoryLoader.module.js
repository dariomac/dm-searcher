export const FETCH_INVENTORY = 'FETCH_INVENTORY';
export const COMMIT_INVENTORY = 'COMMIT_INVENTORY';

const initialState = {
  inventory: null,
  loaded: false
}

export const commitInventoryFetcher = (state = initialState, action) => {
  switch (action.type) {
    case COMMIT_INVENTORY:
      return {
        ...state,
        inventory: action.payload,
        loaded: true
      };
    default:
      return state;
  }
};

export const actions = {
  fetchInventoryAction: (url) => {
    return {
      type: FETCH_INVENTORY,
      payload: { 
        url
      }
    };
  },
  commitInventoryAction: (payload) => {
    return {
      type: COMMIT_INVENTORY,
      payload: payload
    };
  }
};
