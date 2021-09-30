import axios from "axios";

const basicUrl = 'http://localhost:3000/api';

export const login = (obj) => {
    return axios.post(basicUrl + `/login`, obj)
}

export const register = (obj) => {
    return axios.post(basicUrl + `/register`, obj)
}

