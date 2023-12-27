import { GLOBAL_TYPES } from "./globalTypes";
import { getDataAPI } from "../../utils/fetchData";
import moment from "moment";

export const ORDER_TYPES = {
  GET_ORDERS: "GET_ORDERS",
};

export const getOrders =
  ({ status = "all", dateFrom, dateTo, page = 1, auth }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: GLOBAL_TYPES.LOADING,
        payload: true,
      });

      let api = `Order/GetAllOrders?`;

      if (status !== "all") {
        api = `Order/GetAllOrders?status=${status}`;
      }

      const res = await getDataAPI(
        `${api}&dateFrom=${moment(dateFrom).toJSON()}&dateTo=${moment(
          dateTo
        ).toJSON()}&page=${page}`,
        auth.token
      );

      dispatch({
        type: GLOBAL_TYPES.LOADING,
        payload: false,
      });

      dispatch({
        type: ORDER_TYPES.GET_ORDERS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: GLOBAL_TYPES.LOADING,
        payload: false,
      });

      console.log(error);
    }
  };
