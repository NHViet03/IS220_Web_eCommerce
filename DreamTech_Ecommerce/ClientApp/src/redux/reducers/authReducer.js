import { GLOBAL_TYPES } from "../actions/globalTypes";

const initialState = false;

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case GLOBAL_TYPES.AUTH:
      return action.payload;
    case GLOBAL_TYPES.GET_CARTS:
      return {
        ...state,
        user: {
          ...state.user,
          carts: action.payload,
        },
      };
    case GLOBAL_TYPES.ADD_CART:
      return {
        ...state,
        user: {
          ...state.user,
          carts: [...state.user.carts, action.payload],
        },
      };

    case GLOBAL_TYPES.REMOVE_CART:
      return {
        ...state,
        user: {
          ...state.user,
          carts: state.user.carts.filter((cart) => cart.id !== action.payload),
        },
      };

    case GLOBAL_TYPES.UPDATE_CART:
      return {
        ...state,
        user: {
          ...state.user,
          carts: state.user.carts.map((cart) =>
            cart.id === action.payload.id
              ? {
                  ...cart,
                  qty: action.payload.qty,
                }
              : cart
          ),
        },
      };
    default:
      return state;
  }
};

export default authReducer;
