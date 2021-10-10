import axios from "axios";

const basicUrl = 'http://localhost:3000/api';

export const altaPaciente = (obj) => {
    return axios.post(basicUrl + `/altaPaciente`, obj, {
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    })
}

export const pacientesAtendidos = () => {
    return axios.get(basicUrl + '/pacientesAtendidos');
}

export const pacientesEnEspera = () => {
    return axios.get(basicUrl + '/waitingPatients');
}