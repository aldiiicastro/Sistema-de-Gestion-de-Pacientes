import axios from "axios";

// const basicUrl = 'http://sistema-gestion-paciente.herokuapp.com/api';

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