import axios from "axios";

const basicUrl = 'http://localhost:3000/api';

export const login = (obj) => {
    return axios.post(basicUrl + `/login`, obj).then(response => { localStorage.setItem('id', response.data.data)})
}

export const register = (obj) => {
    return axios.post(basicUrl + `/register`, obj)
}

export const mailRegistered = (obj) => {
    return axios.post(basicUrl + `/mailRegistered`, obj)
}

export const changePassword =  (obj) => {
    return axios.put(basicUrl + `/changePassword`, obj)
}

export const getLoggedUser = (obj) => axios.get(basicUrl + `/users/${localStorage.getItem('id')}`, obj).then((response) => response.data)