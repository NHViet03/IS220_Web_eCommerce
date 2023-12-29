import axios from 'axios';

const target ='http://localhost:5031';


export const getDataAPI=async(url)=>{
    const res=await axios.get(`${target}/${url}`)
    return res;
}

export const postDataAPI=async(url,post)=>{
    const res=await axios.post(`${target}/${url}`,post)
    return res;
}

export const putDataAPI=async(url,post)=>{
    const res=await axios.put(`${target}/${url}`,post)
    return res;
}

export const patchDataAPI=async(url,post)=>{
    const res=await axios.patch(`${target}/${url}`,post)
    return res;
}

export const deleteDataAPI=async(url,post)=>{
    const res=await axios.delete(`${target}/${url}`,post)
    return res;
}

export const getDataAPIWithAuth = async (url, token) => {
    const headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
    };

    const res = await axios.get(`${target}/${url}`, { headers });

    return res;
}

export const postDataAPIWithAuth = async (url, data, token) => {
    const headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
    };

    const res = await axios.post(`${target}/${url}`, data, { headers });

    return res;
}

export const putDataAPIWithAuth = async (url, data, token) => {
    const headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
    };

    const res = await axios.put(`${target}/${url}`, data, { headers });

    return res;
}

export const deleteDataAPIWithAuth = async (url, token) => {
    const headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
    };

    const res = await axios.delete(`${target}/${url}`, { headers });

    return res;
}
