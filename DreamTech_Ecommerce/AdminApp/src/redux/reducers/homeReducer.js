import { HOME_TYPES } from "../actions/homeAction";

const initialState = {
  customers: [],
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case HOME_TYPES.GET_TOP_CUSTOMERS:
      return {
        ...state,
        customers: action.payload,
      };
    default:
      return state;
  }
};

export default homeReducer;
