import { getDataAPI } from "../../utils/fetchData";


export const PC_TYPES ={
    GET_PC:'GET_PC',
}


export const getAllPC = () => async (dispatch) =>{

    try {
        const res = await getDataAPI("Product/GetAll");
        const res_pc = res.data.filter((item) => item.brand === "GVN");
        dispatch({
            type: PC_TYPES.GET_PC,
            payload: res_pc
        })
    } catch (error) {
        console.log(error);
    }
}