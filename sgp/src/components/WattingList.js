import '../styles/WattingList.css';
import React, {useEffect, useState} from "react";
import { pacientesEsperando } from "../routes/apiCallsPatient";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClinicMedical, faUserCheck } from '@fortawesome/free-solid-svg-icons';
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

        pacientesEsperando()
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
                                    {pati.turnState==='ATTENDING' ? <td><FontAwesomeIcon title="Siendo Atendido" className="icono" icon={faUserCheck} size="1x"/></td>:
                                    <td>
                                    <FontAwesomeIcon title="Atender" className="icono" icon={faUserPlus} size="1x"
                                    onClick={() => goToAttending(pati)}/>  
                                    <FontAwesomeIcon title="Editar" className="icono" icon={faUserEdit} size="1x" 
                                    onClick={() => goToEdit(pati)}/>
                                    </td>
                                    }
                                    
                                                                     
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