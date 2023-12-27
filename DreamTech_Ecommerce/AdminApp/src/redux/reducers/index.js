import { combineReducers } from "redux";
import auth from "./authReducer";
import loading from "./loadingReducer";
import alert from "./alertReducer";
import home from "./homeReducer";
import product from "./productReducer";
import order from "./orderReducer";
import customer from "./customerReducer"

export default combineReducers({
  auth,
  loading,
  alert,
  home,
  product,
  order,
  customer
});
