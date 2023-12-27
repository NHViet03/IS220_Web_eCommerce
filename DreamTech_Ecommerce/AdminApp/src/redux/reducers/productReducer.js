import { PRODUCT_TYPES } from "../actions/productAction";

const initialState = {
  products: [],
  firstLoad: false,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_TYPES.GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        firstLoad: true,
      };
    case PRODUCT_TYPES.DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default productReducer;
