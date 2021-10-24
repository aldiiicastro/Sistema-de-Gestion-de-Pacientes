import React, {useEffect, useState} from "react";
import axios from 'axios';
import '../styles/WattingList.css';
import Navegation from './Navegation';
import { pacientesEsperando } from "../routes/apiCallsPatient";
import NavegationDoctor from './NavegationDoctor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClinicMedical } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faUserEdit } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router";
import { atenderPaciente } from "../routes/apiCallsPatient";

const WattingList = () => {
    
    const [data, setData] = useState([])
    
    const history = useHistory();

    const goToEdit = (patient) => {
        history.push({
            pathname: "/patient-edit",     
            state: patient  
        })
    }

    const goToAttending = (patient) => { 
        atenderPaciente(patient._id)
        history.push({
            pathname: "/patient-attending",     
            state: patient  
        })
    }

    useEffect(() => {
        axios.get('http://localhost:3000/api/waitingPatients')
        .then(res => {
          setData(res.data.data)
        })
    }, [])

    return (
        <React.Fragment>
                 {
            data.length !== 0 ? 
            <div> 
                    <div className="centro">
                    <h3>Pacientes en Lista de Espera</h3>
                    <br/>
                    <table className="table">
                        <thead>
                            <tr>                          
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>DNI</th>
                            <th>Accion</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(pati => (
                                <tr key = {pati._id}>
                                    <td>{pati.name}</td>
                                    <td>{pati.surname}</td>
                                    <td>{pati.dni}</td>
                                    <FontAwesomeIcon title="Atender" className="icono" icon={faUserPlus} size="2x"
                                    onClick={() => goToAttending(pati)}/>  
                                    <FontAwesomeIcon title="Editar" className="icono" icon={faUserEdit} size="2x" 
                                    onClick={() => goToEdit(pati)}/>                                 
                                </tr>
                                
                        ))}
                        </tbody>  
                    </table>
                    </div>
                     
                     
                 </div>
                : 
                <React.Fragment>
                    <div className='noPatient'>
                        <FontAwesomeIcon icon={faClinicMedical} size="4x"/>
                        <p>No hay pacientes</p>
                    </div>
                </React.Fragment>
            }
        </React.Fragment>
    )
}

export default WattingList;