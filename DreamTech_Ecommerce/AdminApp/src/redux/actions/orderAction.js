import { GLOBAL_TYPES } from "./globalTypes";
import { getDataAPI, postDataAPI, putDataAPI } from "../../utils/fetchData";
import moment from "moment";

export const ORDER_TYPES = {
  GET_ORDERS: "GET_ORDERS",
};

export const getOrders =
  ({ status = "all", search = "", dateFrom, dateTo, page = 1, auth }) =>
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
        `${api}&search=${search}&dateFrom=${moment(
          dateFrom
        ).toJSON()}&dateTo=${moment(dateTo).toJSON()}&page=${page}`,
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

export const createOrder =
  ({ order, auth }) =>
  async (dispatch) => {
    try {
      await postDataAPI("Order/CreateOrder", order, auth.token);

      dispatch({
        type: GLOBAL_TYPES.ALERT,
        payload: {
          type: "success",
          title: "Tạo đơn hàng mới thành công.",
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

export const updateOrder =
  ({ order, auth }) =>
  async (dispatch) => {
    try {
      console.log(order);
      await putDataAPI(
        `Order/UpdateOrder/${order.id}`,
        {
          orderStatus: order.orderStatus,
          shippingAddress: order.shippingAddress,
        },
        auth.token
      );
    } catch (error) {
      console.log(error);
    }
  };
