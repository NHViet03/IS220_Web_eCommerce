import { GLOBAL_TYPES } from "./globalTypes";
import { getDataAPI } from "../../utils/fetchData";

export const HOME_TYPES = {
  GET_TOP_CUSTOMERS: "GET_TOP_CUSTOMERS",
  GET_STATISTICS: "GET_STATISTICS",
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

export const getStatistic =
  ({ interval, token }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: GLOBAL_TYPES.LOADING,
        payload: true,
      });

      const res = await getDataAPI(
        `User/GetStatistics?interval=${interval}`,
        token
      );

      let customData = [];

      for (const key in res.data) {
        const item = res.data[key];
        customData.push({
          value: item.current,
          percent: parseInt(item.changePercentage),
          increase: item.changePercentage > 0,
          gap: item.current - item.previous,
        });
      }

      console.log(customData);

      dispatch({
        type: HOME_TYPES.GET_STATISTICS,
        payload: customData,
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
    }
  };
