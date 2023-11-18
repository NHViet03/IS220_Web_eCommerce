import { GLOBAL_TYPES } from "../actions/globalTypes";

const initialState = false;

const authModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case GLOBAL_TYPES.MODAL_AUTH:
      return action.payload;
    default:
      return state;
  }
};

export default authModalReducer;
