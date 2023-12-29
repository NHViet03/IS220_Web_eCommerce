import { LAPTOP_TYPES } from "../actions/laptopAction";


const laptopReducer =  (state = [], action) => {
   switch (action.type)
    {
        case LAPTOP_TYPES.GET_LAPTOP:
            return action.payload;
        default:
            return state;
    }

}
export default laptopReducer;