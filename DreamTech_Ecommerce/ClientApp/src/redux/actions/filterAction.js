export const FILTER_TYPES ={
    SAP_XEP:'SAP_XEP',
    HANG:'HANG',
    GIA:'GIA',
    FILTER_PC:'FILTER_PC',
}
// Sắp xếp
export const sapxep = (sort) =>  (dispatch) =>{
    dispatch({
        type: FILTER_TYPES.SAP_XEP,
        payload: sort
    })
}
// Hãng
export const hang = (mang) =>  (dispatch) =>{

    dispatch({
        type: FILTER_TYPES.HANG,
        payload: mang
    })
}
// Giá
export const gia = (mang) =>  (dispatch) =>{
    dispatch({
        type: FILTER_TYPES.GIA,
        payload: mang
    })
}