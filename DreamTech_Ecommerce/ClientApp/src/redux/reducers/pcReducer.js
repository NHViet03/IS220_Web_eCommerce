
import { PC_TYPES } from "../actions/pcAction";
import { FILTER_TYPES } from "../actions/filterAction";



const pcReducer =  (state = [], action) => {
   switch (action.type)
    {
        case PC_TYPES.GET_PC:
            return action.payload;
        
        default:
            return state;
    }

}
export default pcReducer;