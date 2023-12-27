import { GLOBAL_TYPES } from "./globalTypes";
import { postDataAPI } from "../../utils/fetchData";

export const login = (data) => async (dispatch) => {
  try {
    const res = await postDataAPI("Auth/Login", data);
    dispatch({
      type: GLOBAL_TYPES.AUTH,
      payload: res.data.token,
    });

    sessionStorage.setItem("firstLogin", res.data.token);
  } catch (error) {}
};

export const refreshToken = () => async (dispatch) => {
  const token = sessionStorage.getItem("firstLogin");
  if (token) {
    dispatch({
      type: GLOBAL_TYPES.AUTH,
      payload: token,
    });
  }
};
