import { GLOBAL_TYPES } from "./globalTypes";
import {
  postDataAPIWithAuth,
  deleteDataAPIWithAuth,
  putDataAPIWithAuth,
} from "../../utils/fetchData";

export const addToCart =
  ({ product, auth }) =>
  async (dispatch) => {
   
    try {
      const res = await postDataAPIWithAuth(
        "Cart/AddToCart",
        {
          productId: product.id,
          qty: 1,
        },
        auth.token
      );

      dispatch({
        type: GLOBAL_TYPES.GET_CARTS,
        payload: res.data.newCartItems,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const removeFromCart =
  ({ id, auth }) =>
  async (dispatch) => {
    dispatch({
      type: GLOBAL_TYPES.REMOVE_CART,
      payload: id,
    });

    try {
      await deleteDataAPIWithAuth(`Cart/Delete/${id}`, auth.token);
    } catch (error) {}
  };

export const updateQtyCart =
  ({ id, qty, auth }) =>
  async (dispatch) => {
    dispatch({
      type: GLOBAL_TYPES.UPDATE_CART,
      payload: {
        id,
        qty,
      },
    });

    try {
      await putDataAPIWithAuth(
        `Cart/UpdateQty/${id}?qty=${qty}`,
        {},
        auth.token
      );
    } catch (error) {}
  };
