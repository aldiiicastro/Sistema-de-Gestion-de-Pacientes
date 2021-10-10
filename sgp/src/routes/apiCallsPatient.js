import axios from "axios";

const basicUrl = 'http://localhost:3000/api';

export const altaPaciente = (obj) => {
    return axios.post(basicUrl + `/altaPaciente`, obj, {
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    })
}

export const pacientesEsperando= () => {
    return axios.get(basicUrl +'/waitingPatients' );
}

export const pacientesAtendidos = () => {
    return axios.get(basicUrl + '/pacientesAtendidos')
}

export const atenderPaciente = (id) => {
    return axios.put(basicUrl + '/attendPatient/'+ id);
}

export const deletePatient = (id) => {
    return axios.delete(basicUrl + '/borrarPaciente/' +id);
}

export const allPatient = () => {
    return axios.get(basicUrl + '/allPatients');
}