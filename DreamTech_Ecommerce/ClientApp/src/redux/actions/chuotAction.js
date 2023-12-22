import { getDataAPI } from "../../utils/fetchData";


export const CHUOT_TYPES ={
    GET_CHUOT:'GET_CHUOT',
}


export const getAllChuot = () => async (dispatch) =>{

    try {
        const res = await getDataAPI("Product/GetAll");
        const res_chuot = res.data.filter((item) => item.brand === "Logitech");
        dispatch({
            type: CHUOT_TYPES.GET_CHUOT,
            payload: res_chuot
        })
    } catch (error) {
        console.log(error);
    }
}