import { GLOBAL_TYPES } from "./globalTypes";
import { getDataAPI } from "../../utils/fetchData";

export const HOME_TYPES = {
  GET_TOP_CUSTOMERS: "GET_TOP_CUSTOMERS",
};

export const getTopCustomers = (token) => async (dispatch) => {
  try {
    const res = await getDataAPI("User/GetTopCustomers", token);
    dispatch({
      type: HOME_TYPES.GET_TOP_CUSTOMERS,
      payload: res.data,
    });
  } catch (error) {}
};
