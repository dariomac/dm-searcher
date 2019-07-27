export const FETCH_INVENTORY = 'FETCH_INVENTORY';
export const COMMIT_INVENTORY = 'COMMIT_INVENTORY';

export const fetchInventoryReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_INVENTORY:
      console.log('fetching... reducer???');
      return state;
    default:
      return state;
  }
};

export const commitInventoryFetcher = (state = {}, action) => {
  switch (action.type) {
    case COMMIT_INVENTORY:
      return {
        ...state,
        inventory: action.payload
      };
    default:
      return state;
  }
};

export const actions = {
  fetchInventoryAction: () => {
    return {
      type: FETCH_INVENTORY
    };
  },
  commitInventoryAction: (payload) => {
    return {
      type: COMMIT_INVENTORY,
      payload: payload
    };
  }
};
