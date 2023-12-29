import { GLOBAL_TYPES } from "../actions/globalTypes";

const initialState = false;

const alterReducer = (state = initialState, action) => {
  switch (action.type) {
    case GLOBAL_TYPES.ALERT:
      return action.payload;
    default:
      return state;
  }
};

export default alterReducer;
