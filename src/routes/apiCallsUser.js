import axios from "axios";

export const login = (obj) => {
    return axios.post(`/login`, obj)
}

export const register = (obj) => {
    return axios.post(`/register`, obj)
}

export const mailRegistered = (obj) => {
    return axios.post(`/mailRegistered`, obj)
}

export const changePassword =  (obj) => {
    return axios.put(`/changePassword`, obj)
}