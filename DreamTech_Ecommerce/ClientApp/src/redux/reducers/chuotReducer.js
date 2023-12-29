import { CHUOT_TYPES } from "../actions/chuotAction"; 


const chuotReducer =  (state = [], action) => {
   switch (action.type)
    {
        case CHUOT_TYPES.GET_CHUOT:
            return action.payload;
        default:
            return state;
    }

}
export default chuotReducer;