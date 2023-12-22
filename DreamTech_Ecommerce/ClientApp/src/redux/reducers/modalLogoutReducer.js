import { GLOBAL_TYPES } from "../actions/globalTypes";

const initialState = false;

const logoutModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case GLOBAL_TYPES.MODAL_LOGOUT:
      return action.payload;
    default:
      return state;
  }
};

export default logoutModalReducer;
