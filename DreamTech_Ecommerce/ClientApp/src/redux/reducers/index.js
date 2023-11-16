import { combineReducers } from "redux";
import modalAuth from "./modalAuthReducer";
import auth from "./authReducer";
import modalLogout from "./modalLogoutReducer";
import alert from "./alertReducer";

export default combineReducers({
  modalAuth,
  auth,
  modalLogout,
  alert,
});
