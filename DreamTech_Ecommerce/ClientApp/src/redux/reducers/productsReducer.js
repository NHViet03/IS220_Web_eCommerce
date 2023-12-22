import { PRODUCTS_TYPES } from "../actions/productsAction"; 


const productsReducer =  (state = [], action) => {
   switch (action.type)
    {
        case PRODUCTS_TYPES.GET_PRODUCT_BY_ID:
            return action.payload;
        case PRODUCTS_TYPES.GET_ALL_PRODUCTS:
                return action.payload;
        default:
            return state;
    }

}
export default productsReducer;