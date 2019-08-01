export const FETCH_INVENTORY = 'FETCH_INVENTORY';
export const COMMIT_INVENTORY = 'COMMIT_INVENTORY';

export const commitInventoryFetcher = (state = {}, action) => {
  switch (action.type) {
    case COMMIT_INVENTORY:
        console.log({inventory: action.payload})
      return {
        ...state,
        inventory: action.payload
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
