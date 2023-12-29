import { CUSTOMER_TYPES } from "../actions/customerAction";

const initialState = {
  customers: [],
  firstLoad: false,
};

const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case CUSTOMER_TYPES.GET_CUSTOMERS:
      return {
        ...state,
        customers: action.payload,
        firstLoad: true,
      };
    default:
      return state;
  }
};

export default customerReducer;
