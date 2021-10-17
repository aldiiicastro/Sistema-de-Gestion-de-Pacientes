import axios from "axios";

export const altaPaciente = (obj) => {
    return axios.post(`/altaPaciente`, obj, {
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    })
}

export const pacientesAtendidos = () => {
    return axios.get('/pacientesAtendidos')
}

export const atenderPaciente = (id) => {
    return axios.put('/attendPatient/'+ id);
}

export const deletePatient = (id) => {
    return axios.delete('/borrarPaciente/' +id);
}

export const allPatient = () => {
    return axios.get('/allPatients');
}