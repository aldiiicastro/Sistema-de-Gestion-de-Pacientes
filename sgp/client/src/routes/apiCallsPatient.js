import axios from "axios";

const basicUrl = 'http://localhost:3000';

/* CRUD DE PACIENTE */ 
export const registerPatient = (obj) => {
    return axios.post(basicUrl + `/api/registrarPaciente`, obj, {
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    })
}

export const deletePatient = (id) => {
    return axios.delete(basicUrl + '/api/borrarPaciente/' +id);
}

export const updatePatient = (data) => { 
    return axios.post(basicUrl + '/api/actualizarPaciente', data);
}
/* FIN CRUD DE PACIENTE */ 

/* ACTUALIZAR ESTADO DE PACIENTE */
export const updateTurnAttending = (id) => {
    return axios.put(basicUrl + '/api/actualizarPaciente/atendiendose/'+ id);
}

export const updateTurnWaiting = (id) => {
    return axios.put(basicUrl + '/api/actualizarPaciente/esperando/'+ id);
}

export const updateTurnAttended = (id) => {
    return axios.put(basicUrl + '/api/actualizarPaciente/atendido/'+ id);
}

export const updateTurnConfirmed = (id) => {
    return axios.put(basicUrl + '/api/actualizarPaciente/confirmado/'+ id);
}

export const admitPatient = (id) => {
    return axios.put(basicUrl + '/api/actualizarPaciente/internar/'+id);
}

export const patientDied = (id) => {
    return axios.put(basicUrl + '/api/actualizarPaciente/muerte/' + id)
}
/* FIN ACTUALIZAR ESTADO DE PACIENTE */

/* PACIENTE SEGUN UN ESTADO */
export const firstPatientWaiting = () => {
    return axios.get(basicUrl + '/api/pacienteEnEspera')
}
/* FIN PACIENTE SEGUN UN ESTADO */

/* LISTAS DE PACIENTES */
export const allPatient = () => {
    return axios.get(basicUrl + '/api/todosLosPacientes');
}

export const waitingAttendingPatients = () => {
    return axios.get(basicUrl + '/api/pacientes-esperando-atendiendose' );
}

export const deceasedPatients = () => {
    return axios.get(basicUrl + '/api/pacientes-fallecidos' );
}

export const attendedPatients = () => {
    return axios.get(basicUrl + '/api/pacientesAtendidos')
}

export const attendingPatients = () => {
    return axios.get(basicUrl + '/api/pacientesEnTurno')
}

export const waitingPatients = () => {
    return axios.get(basicUrl + '/api/pacientesEsperando')
}

export const confirmedPatients = () => {
    return axios.get(basicUrl + '/api/pacientesConfirmados')
}
/* FIN LISTAS DE PACIENTES */