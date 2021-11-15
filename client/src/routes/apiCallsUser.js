
import axios from "axios";

export const login = (obj) => axios.post(`/api/login`, obj).then(response => { localStorage.setItem('id', response.data.data)})

export const register = (obj) => axios.post(`/api/register`, obj)

export const mailRegistered = (obj) => axios.post(`/api/mailRegistered`, obj)

export const changePassword =  (obj) => axios.put(`/api/changePassword`, obj)

export const getLoggedUser = (obj) => axios.get(`/api/users/${localStorage.getItem('id')}`, obj).then((response) => response.data)

export const updateFirstLog = (id) => axios.put(`/api/updateFirstLog/${id}`);