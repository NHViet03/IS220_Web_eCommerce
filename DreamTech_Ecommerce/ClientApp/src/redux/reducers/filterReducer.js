import { FILTER_TYPES } from "../actions/filterAction";

const initialState = {
    Sapxep: 'featured',
    Hang: [],
    Gia: [],
}

const fillterReducer =  (state = initialState, action) => {
   switch (action.type)
    {
        case FILTER_TYPES.SAP_XEP:
            return {
                ...state,
                Sapxep: action.payload
            };
        case FILTER_TYPES.HANG:
                return {
                    ...state,
                    Hang: {...action.payload}
                };
        case FILTER_TYPES.GIA:
            console.log(action.payload)
                return {
                    ...state,
                    Gia: {...action.payload}
                };
        default:
            return state;
    }

}
export default fillterReducer;