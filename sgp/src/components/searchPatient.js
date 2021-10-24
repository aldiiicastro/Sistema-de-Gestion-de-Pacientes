import React, {useEffect, useState} from "react";
import { useLocation } from "react-router";
import { allPatient } from "../routes/apiCallsPatient";
import '../styles/WattingList.css';
import NavegationDoctor from './NavegationDoctor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClinicMedical } from '@fortawesome/free-solid-svg-icons';





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
        if(objeto.name.toString().toLowerCase().includes(loc.state.toLowerCase())
    || objeto.dni.toString().toLowerCase().includes(loc.state.toLowerCase()|| objeto)
    ){
        return objeto;
    }});

    useEffect(() => {
        
        getDatos();
        console.log(data)
        
    },[])


    const getRender = () => {
        if(filtrado.length !== 0 && loc.state !== ""){
            return (
                   
                <div> 
                    <NavegationDoctor/>
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
                            <th>DNI</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtrado.map(pati => (
                                <tr key = {pati._id}>
                                    <td>{pati.name}</td>
                                    <td>{pati.surname}</td>
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
                    <NavegationDoctor/>

                    <div className="centrar">
                        <FontAwesomeIcon icon={faClinicMedical} size="4x"/>
                        <p>No se encontraron pacientes con ese nombre</p>
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