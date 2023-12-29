import { getDataAPI } from "../../utils/fetchData";


export const LAPTOP_TYPES ={
    GET_LAPTOP:'GET_LAPTOP',
}


export const getAllLaptop = () => async (dispatch) =>{

    try {
        const res = await getDataAPI("Product/GetAll");
        const res_laptop = res.data.filter((item) => 
        item.brand === "MSI" || item.brand === "Lenovo" 
        || item.brand === "ASUS" || item.brand === "Acer Predato"
        || item.brand === "Asus");
        dispatch({
            type: LAPTOP_TYPES.GET_LAPTOP,
            payload: res_laptop
        })
    } catch (error) {
        console.log(error);
    }
}   