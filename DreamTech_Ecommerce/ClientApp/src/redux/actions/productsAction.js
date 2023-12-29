import { getDataAPI } from "../../utils/fetchData";

export const PRODUCTS_TYPES = {
  GET_PRODUCT_BY_ID: "GET_PRODUCT_BY_ID",
  GET_ALL_PRODUCTS: "GET_ALL_PRODUCTS",
};

export const getProductById =
  ({ id }) =>
  async (dispatch) => {
    try {
      const res = await getDataAPI(`Product/GetProductById/${id}`);
      dispatch({
        type: PRODUCTS_TYPES.GET_PRODUCT_BY_ID,
        payload: {
          ...res.data,
          gifts: [
            {
              id: 1,
              name: "Móc khóa Keycap",
            },
            {
              id: 2,
              name: "Túi chống sốc",
            },
          ],
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
export const getAllProducts = () => async (dispatch) => {
  try {
    const res = await getDataAPI(`Product/GetAll`);
    dispatch({
      type: PRODUCTS_TYPES.GET_ALL_PRODUCTS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
