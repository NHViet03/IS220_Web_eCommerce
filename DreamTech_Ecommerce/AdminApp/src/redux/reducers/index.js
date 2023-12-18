import { combineReducers } from "redux";
import auth from "./authReducer";
import loading from "./loadingReducer";
import alert from "./alertReducer";

export default combineReducers({
  auth,
  loading,
  alert,
});
