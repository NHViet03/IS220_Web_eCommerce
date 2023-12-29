import { combineReducers } from "redux";
import modalAuth from "./modalAuthReducer";
import auth from "./authReducer";
import modalLogout from "./modalLogoutReducer";
import alert from "./alertReducer";
import pc from "./pcReducer";
import laptop from "./laptopReducer";
import chuot from "./chuotReducer";
import product from "./productsReducer";
import filter from "./filterReducer";

export default combineReducers({
  modalAuth,
  auth,
  modalLogout,
  alert,
  pc,
  laptop,
  chuot,
  product,
  filter,
});
