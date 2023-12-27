import { GLOBAL_TYPES } from "./globalTypes";
import { getDataAPI } from "../../utils/fetchData";

export const CUSTOMER_TYPES = {
  GET_CUSTOMERS: "GET_CUSTOMERS",
};

export const getCustomers =
  ({ totalFrom = 0, totalTo = 1000000000, name = "", page = 1, auth }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: GLOBAL_TYPES.LOADING,
        payload: true,
      });

      const res = await getDataAPI(
        `User/GetAllUsers?totalFrom=${totalFrom}&totalTo=${
          totalTo === 0 ? 1000000000 : totalTo
        }&name=${name}&page=${page}`,
        auth.token
      );

      dispatch({
        type: CUSTOMER_TYPES.GET_CUSTOMERS,
        payload: res.data,
      });

      dispatch({
        type: GLOBAL_TYPES.LOADING,
        payload: false,
      });
    } catch (error) {
      dispatch({
        type: GLOBAL_TYPES.LOADING,
        payload: false,
      });

      console.log(error);
    }
  };
