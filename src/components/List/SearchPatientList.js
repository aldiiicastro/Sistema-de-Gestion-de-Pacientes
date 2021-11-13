import React, {useEffect, useState} from "react";
import { useLocation } from "react-router";
import { allPatient } from "../../routes/apiCallsPatient";
import '../../styles/WattingList.css';
import DoctorNavegation from '../Navegation/DoctorNavegation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClinicMedical } from '@fortawesome/free-solid-svg-icons';
import moment from "moment";

const SearchPatient = () => {

    const[data,setData] = useState([]);
    
    const loc = useLocation();

    

    const getDatos = () =>
    {
        allPatient()
        .then(res => {
          setData(res.data.data)
        })
    }

    const filtrado = data.filter(objeto => {
        var patient = ''
        if(objeto.surname.toString().toLowerCase().includes(loc.state.toLowerCase()) 
            || objeto.dni.toString().toLowerCase().includes(loc.state.toLowerCase()
            || objeto ))
        { patient =  objeto; }
        return patient;    
    } 
            
        );

    useEffect(() => {
        
        getDatos();
        
    },[loc.state])


    const getRender = () => {
        if(filtrado.length !== 0 && loc.state !== ""){
            return (
                   
                <div> 
                    <DoctorNavegation/>
                    <br/>
                    <br/>
                    <br/>
                    <div className="centro">
                    <h3>Resultados de la busqueda</h3>
                    <br/>
                    <table className="table">
                        <thead>
                            <tr>                          
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th> Ingreso </th>
                            <th>DNI</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtrado.map(pati => (
                                <tr key = {pati._id}>
                                    <td>{pati.name}</td>
                                    <td>{pati.surname}</td>
                                    <td>{moment(pati.entryDate).format("DD/MM/YYYY")} </td>
                                    <td>{pati.dni}</td>                                
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
                    <DoctorNavegation/>

                    <div className="centrar">
                        <FontAwesomeIcon icon={faClinicMedical} size="4x"/>
                        <p>No se encontro el paciente buscado</p>
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
 
export default SearchPatient;