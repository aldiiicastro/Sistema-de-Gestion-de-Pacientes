import axios from "axios";

export const login = (obj) => {
    return axios.post(`/api/login`, obj).then(response => { localStorage.setItem('id', response.data.data)})
}

export const register = (obj) => {
    return axios.post(`/api/register`, obj)
}

export const mailRegistered = (obj) => {
    return axios.post(`/api/mailRegistered`, obj)
}

export const changePassword =  (obj) => {
    return axios.put(`/api/changePassword`, obj)
}

export const getLoggedUser = (obj) => axios.get(`/api/users/${localStorage.getItem('id')}`, obj).then((response) => response.data)