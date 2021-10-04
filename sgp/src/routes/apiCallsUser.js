import axios from "axios";

const basicUrl = 'http://localhost:3000/api';

export const login = (obj) => {
    return axios.post(basicUrl + `/login`, obj)
}

export const register = (obj) => {
    return axios.post(basicUrl + `/register`, obj)
}
export const recoverPassword = (obj) => {
    return axios.post(basicUrl + `/recoverPassword`, obj)
}
export const restabContraseña = (obj) => {
    return axios.post(basicUrl + `/restabContraseña`, obj)
}