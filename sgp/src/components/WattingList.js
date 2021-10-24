import React, {useEffect, useState} from "react";
import axios from 'axios';
import '../styles/WattingList.css';
import Navegation from './Navegation';
import { pacientesEsperando } from "../routes/apiCallsPatient";
import NavegationDoctor from './NavegationDoctor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClinicMedical } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { atenderPaciente } from '../routes/apiCallsPatient';
import { faUserEdit } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router";


const WattingList = () => {
    
    const [data, setData] = useState([])
    
    const history = useHistory();

    const goToEdit = (patient) => { console.log(patient)
        history.push({
            pathname: "/patient-edit",     
            state: patient  
        })
    }

    useEffect(() => {
        axios.get('http://localhost:3000/api/waitingPatients')
        .then(res => {
          setData(res.data.data)
        })
    }, [])
        
    const getData = () => {
        axios.get('http://localhost:3000/api/waitingPatients')
        .then(res => {
            console.log(res)
          setData(res.data)
        })
    }

    const atender = (id) => {
        atenderPaciente(id)
        .then(res => {
            console.log("Se actualizo el paciente!");
            getData();
        }).catch( res => {
            console.log("fallo");
            console.log(res);
        });
    }

    const getRender = () => {
        if(data.length !== 0){
            return (
                   
                <div> 
                    <NavegationDoctor/>
                    <br/>
                    <br/>
                    <br/>
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
                                    onClick={() => atender(pati._id)}/>  
                                    <FontAwesomeIcon title="Editar" className="icono" icon={faUserEdit} size="2x" 
                                    onClick={() => goToEdit(pati)}/>                                 
                                </tr>
                                
                        ))}
                        </tbody>  
                    </table>
                    </div>
                     
                     
                 </div>
             );
        } else {
            return (
                <React.Fragment>
                    <NavegationDoctor/>

                    <div className="centrar">
                        <FontAwesomeIcon icon={faClinicMedical} size="4x"/>
                        <p>No hay pacientes</p>
                    </div>
                </React.Fragment>
               
            );
        }
    }


    return (
        <> {
            getRender()
        }
        </>
    )
}

export default WattingList;