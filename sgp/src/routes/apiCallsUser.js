import axios from "axios";

const basicUrl = 'http://localhost:3000';

export const login = (obj) => {
    return axios.post(basicUrl + `/api/login`, obj).then(response => { localStorage.setItem('id', response.data.data)})
}

export const register = (obj) => {
    return axios.post(basicUrl + `/api/register`, obj)
}

export const mailRegistered = (obj) => {
    return axios.post(basicUrl + `/api/mailRegistered`, obj)
}

export const changePassword =  (obj) => {
    return axios.put(basicUrl + `/api/changePassword`, obj)
}

export const getLoggedUser = (obj) => axios.get(basicUrl + `/api/users/${localStorage.getItem('id')}`, obj).then((response) => response.data)