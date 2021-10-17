import axios from "axios";

export const login = (obj) => {
    return axios.post(`/api/login`, obj)
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