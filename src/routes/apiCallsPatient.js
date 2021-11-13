import axios from "axios";

/* CRUD DE PACIENTE */ 
export const registerPatient = (obj) => {
    return axios.post(`/api/registrarPaciente`, obj, {
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    })
}

export const deletePatient = (id) => {
    return axios.delete('/api/borrarPaciente/' +id);
}

export const updatePatient = (data) => { 
    return axios.post('/api/actualizarPaciente', data);
}
/* FIN CRUD DE PACIENTE */ 

/* ACTUALIZAR ESTADO DE PACIENTE */
export const updateTurnAttending = (id) => {
    return axios.put('/api/actualizarPaciente/atendiendose/'+ id);
}

export const updateTurnWaiting = (id) => {
    return axios.put('/api/actualizarPaciente/esperando/'+ id);
}

export const updateTurnAttended = (id) => {
    return axios.put('/api/actualizarPaciente/atendido/'+ id);
}

export const updateTurnConfirmed = (id) => {
    return axios.put('/api/actualizarPaciente/confirmado/'+ id);
}

export const admitPatient = (id) => {
    return axios.put('/api/actualizarPaciente/internar/'+id);
}
/* FIN ACTUALIZAR ESTADO DE PACIENTE */

/* PACIENTE SEGUN UN ESTADO */
export const firstPatientWaiting = () => {
    return axios.get('/api/pacienteEnEspera')
}
/* FIN PACIENTE SEGUN UN ESTADO */

/* LISTAS DE PACIENTES */
export const allPatient = () => {
    return axios.get('/api/todosLosPacientes');
}

export const waitingAttendingPatients = () => {
    return axios.get('/api/pacientes-esperando-atendiendose' );
}

export const attendedPatients = () => {
    return axios.get('/api/pacientesAtendidos')
}

export const attendingPatients = () => {
    return axios.get('/api/pacientesEnTurno')
}

export const waitingPatients = () => {
    return axios.get('/api/pacientesEsperando')
}

export const confirmedPatients = () => {
    return axios.get('/api/pacientesConfirmados')
}
/* FIN LISTAS DE PACIENTES */