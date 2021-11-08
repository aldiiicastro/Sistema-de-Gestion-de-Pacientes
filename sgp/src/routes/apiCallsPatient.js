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
    return axios.get(basicUrl + '/api/waitingPatients' );
}
export const confirmacionPacientes= () => {
    return axios.get(basicUrl + '/api/confirmPatients' ); //endpoint de estado
}


export const pacientesAtendidos = () => {
    return axios.get(basicUrl + '/api/pacientesAtendidos')
}

export const pacientesEnEspera = () => {
    return axios.get(basicUrl + '/api/pacientesEnEspera')
}

export const atenderPaciente = (id) => {
    return axios.put(basicUrl + '/api/attendingPatient/'+ id);
}

export const desatenderPaciente = (id) => {
    return axios.put(basicUrl + '/api/waittingPatient/'+ id);
}

export const pacienteEnTurno = () => {
    return axios.put(basicUrl + '/api/attededPatient')
}

export const pacienteAtendido = (id) => {
    return axios.put(basicUrl + '/api/attededPatient/'+ id);
}

export const deletePatient = (id) => {
    return axios.delete(basicUrl + '/api/borrarPaciente/' +id);
}

export const allPatient = () => {
    return axios.get(basicUrl + '/api/allPatients');
}

export const updatePatient = (data) => { 
    return axios.post(basicUrl + '/api/updatePatientData', data);
}