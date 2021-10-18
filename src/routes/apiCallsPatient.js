import axios from "axios";

export const altaPaciente = (obj) => {
    return axios.post(`/api/altaPaciente`, obj, {
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    })
}

export const pacientesAtendidos = () => {
    return axios.get('/api/pacientesAtendidos')
}

export const atenderPaciente = (id) => {
    return axios.put('/api/attendPatient/'+ id);
}

export const deletePatient = (id) => {
    return axios.delete('/api/borrarPaciente/' +id);
}

export const allPatient = () => {
    return axios.get('/api/allPatients');
}