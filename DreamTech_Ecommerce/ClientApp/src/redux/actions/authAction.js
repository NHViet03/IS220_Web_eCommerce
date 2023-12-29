import { GLOBAL_TYPES } from "./globalTypes";
import { postDataAPI } from "../../utils/fetchData";
import { jwtDecode } from "jwt-decode";
import { getDataAPIWithAuth } from "../../utils/fetchData";

export const login = (data) => async (dispatch) => {
  try {
    const res = await postDataAPI("Auth/Login", data);
    localStorage.setItem("firstLogin", res.data.token);
    const auth = {
      token: res.data.token,
      user: res.data.user,
    };

    const carts = await getDataAPIWithAuth(
      `Cart/GetByUser/${res.data.user.id}`,
      res.data.token
    );

    dispatch({
      type: GLOBAL_TYPES.AUTH,
      payload: auth,
    });

    dispatch({
      type: GLOBAL_TYPES.GET_CARTS,
      payload: carts.data,
    });

    dispatch({
      type: GLOBAL_TYPES.ALERT,
      payload: {
        type: "success",
        title: "Đăng nhập thành công",
      },
    });
    return true;
  } catch (error) {
    dispatch({
      type: GLOBAL_TYPES.ALERT,
      payload: {
        type: "error",
        title: "Đăng nhập thất bại",
        data: error.response.data.errorMessage,
      },
    });
  }
};

export const register = (data) => async (dispatch) => {
  const firstName = data.fullname.split(" ")[0];
  const lastName = data.fullname.split(" ").slice(1).join(" ");

  const newUser = {
    email: data.email,
    password: data.password,
    firstName,
    lastName,
    phone: "",
  };

  try {
    const res = await postDataAPI("Auth/SignUp", newUser);
    const auth = {
      token: res.data.token,
      user: res.data.user,
    };
    dispatch({
      type: GLOBAL_TYPES.AUTH,
      payload: auth,
    });
    dispatch({
      type: GLOBAL_TYPES.ALERT,
      payload: {
        type: "success",
        title: "Đăng ký thành công",
        data: "Chúc mừng bạn đã đăng ký thành công tài khoản.",
      },
    });
    return true;
  } catch (error) {
    dispatch({
      type: GLOBAL_TYPES.ALERT,
      payload: {
        type: "error",
        title: "Đăng ký thất bại",
        data: error.response.data.errorMessage,
      },
    });
  }
};

export const refreshToken = () => async (dispatch) => {
  try {
    const firstLogin = localStorage.getItem("firstLogin");
    if (firstLogin) {
      const account = jwtDecode(firstLogin);
      const res = await getDataAPIWithAuth(
        `User/GetCustomerDetail/${account.Id}`,
        firstLogin
      );

      dispatch({
        type: GLOBAL_TYPES.AUTH,
        payload: {
          token: firstLogin,
          user: res.data,
        },
      });

      const carts = await getDataAPIWithAuth(
        `Cart/GetByUser/${account.Id}`,
        firstLogin
      );

      dispatch({
        type: GLOBAL_TYPES.GET_CARTS,
        payload: carts.data,
      });
    }
  } catch (error) {}
};

export const logout = () => async (dispatch) => {
  localStorage.removeItem("firstLogin");
  dispatch({
    type: GLOBAL_TYPES.AUTH,
    payload: false,
  });
};
