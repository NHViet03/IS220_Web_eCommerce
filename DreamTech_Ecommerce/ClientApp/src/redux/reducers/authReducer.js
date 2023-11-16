import { GLOBAL_TYPES } from "../actions/globalTypes";

const initialState = false;

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case GLOBAL_TYPES.AUTH:
      return action.payload;
    case GLOBAL_TYPES.ADD_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};

export default authReducer;
