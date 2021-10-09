import axios from "axios";

const basicUrl = 'http://sistema-gestion-paciente.herokuapp.com/api';

export const login = (obj) => {
    return axios.post(basicUrl + `/login`, obj)
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