import axios from "axios";

const basicUrl = 'http://localhost:3000';

export const altaPaciente = (obj) => {
    return axios.post(basicUrl + `/api/altaPaciente`, obj, {
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    })
}

export const pacientesEsperando= () => {
    return axios.get(basicUrl +'/waitingPatients' );
}

export const pacientesAtendidos = () => {
    return axios.get(basicUrl + '/api/pacientesAtendidos')
}

export const atenderPaciente = (id) => {
    return axios.put(basicUrl + '/api/attendPatient/'+ id);
}

export const deletePatient = (id) => {
    return axios.delete(basicUrl + '/api/borrarPaciente/' +id);
}

export const allPatient = () => {
    return axios.get(basicUrl + '/api/allPatients');
}