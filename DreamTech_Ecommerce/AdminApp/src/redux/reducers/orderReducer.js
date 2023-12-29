import { ORDER_TYPES } from "../actions/orderAction";

const initialState = {
  orders: [],
  firstLoad: false,
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_TYPES.GET_ORDERS:
      return {
        ...state,
        orders: action.payload,
        firstLoad: true,
      };
    default:
      return state;
  }
};

export default orderReducer;
