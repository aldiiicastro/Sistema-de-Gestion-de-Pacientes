import React from "react";
import axios from 'axios';
import '../styles/WattingList.css';
import Navegation from './Navegation';
import { pacientesEnEspera } from "../routes/apiCallsPatient";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClinicMedical } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { atenderPaciente } from '../routes/apiCallsPatient';

class WattingList extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          data: []
        }
    }
    
    getData = () => {
        pacientesEnEspera()
        .then(res => {
          console.log(res.data);
          var data = res.data
          this.setState({data : data.data})
        })
    }

    componentDidMount = () => {
        this.getData();
    }

    atender = (id) => {
        atenderPaciente(id)
        .then(res => {
            console.log("Se actualizo el paciente!");
            this.getData();
        }).catch( res => {
            console.log("fallo");
            console.log(res);
        });
    }

    render () {

        if(this.state.data.length !== 0){
            return (
                   
                <div> 
                    <Navegation/>
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
                            {this.state.data.map(pati => (
                                <tr key = {pati._id}>
                                    <td>{pati.name}</td>
                                    <td>{pati.surname}</td>
                                    <td>{pati.dni}</td>
                                    <FontAwesomeIcon title="Atender" className="icono" icon={faUserPlus} size="2x"
                                    onClick={() => this.atender(pati._id)}/>                                   
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
                    
                    <Navegation/>

                    <div className="centrar">
                        <FontAwesomeIcon icon={faClinicMedical} size="4x"/>
                        <p>No hay pacientes</p>
                    </div>
                </React.Fragment>
               
            );
        }
    }
}

export default WattingList;