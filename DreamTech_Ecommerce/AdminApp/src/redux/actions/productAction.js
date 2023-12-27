import { GLOBAL_TYPES } from "./globalTypes";
import {
  getDataAPI,
  postDataAPI,
  putDataAPI,
  deleteDataAPI,
} from "../../utils/fetchData";

export const PRODUCT_TYPES = {
  GET_PRODUCTS: "GET_PRODUCTS",
  DELETE_PRODUCT: "DELETE_PRODUCT",
};

export const getProducts =
  ({ category = "", price = [1, 1000000000], search = "", page = 1, auth }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: GLOBAL_TYPES.LOADING,
        payload: true,
      });
      const res = await getDataAPI(
        `Product/GetAll?category=${category}&priceFrom=${
          price[0] ? price[0] : 1
        }&priceTo=${
          price[1] ? price[1] : 1000000000
        }&search=${search}&page=${page}`,
        auth.token
      );

      const custom = res.data.map((item) => ({
        id: item.id,
        images: item.productImages.map((img) => img.imageUrl),
        name: item.name,
        price: item.price,
        sale_price: item.salePrice,
        category: item.category,
        QtyInStock: item.qtyInStock,
      }));

      dispatch({
        type: PRODUCT_TYPES.GET_PRODUCTS,
        payload: custom,
      });
      dispatch({
        type: GLOBAL_TYPES.LOADING,
        payload: false,
      });
    } catch (error) {
      dispatch({
        type: GLOBAL_TYPES.LOADING,
        payload: true,
      });
      console.log(error);
    }
  };

export const createProduct =
  ({ product, auth }) =>
  async (dispatch) => {
    try {
      await postDataAPI("Product/Create", product, auth.token);
    } catch (error) {
      console.log(error);
    }
  };

export const updateProduct =
  ({ newProduct, auth }) =>
  async (dispatch) => {
    try {
      await putDataAPI("Product/UpdateProduct", newProduct, auth.token);
    } catch (error) {
      console.log(error);
    }
  };

export const deleteProduct =
  ({ id, auth }) =>
  async (dispatch) => {
    dispatch({
      type: PRODUCT_TYPES.DELETE_PRODUCT,
      payload: id,
    });
    try {
      await deleteDataAPI(`Product/DeleteProduct/${id}`, auth.token);
    } catch (error) {}
  };
