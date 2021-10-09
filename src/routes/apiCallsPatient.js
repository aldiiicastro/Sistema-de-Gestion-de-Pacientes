import axios from "axios";

const basicUrl = 'http://sistema-gestion-paciente.herokuapp.com:3000/api';

export const altaPaciente = (obj) => {
    return axios.post(basicUrl + `/altaPaciente`, obj, {
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    })
}