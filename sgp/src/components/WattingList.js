import React from "react";
import axios from 'axios';
import '../styles/WattingList.css';
import Navegation from './Navegation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClinicMedical } from '@fortawesome/free-solid-svg-icons'

class WattingList extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          data: []
        }
    }
    
    getData = () => {
        axios.get('http://localhost:3000/api/waitingPatients')
        .then(res => {
          console.log(res.data);
          var data = res.data
          this.setState({data : data.data})
        })
    }

    componentDidMount = () => {
        this.getData();
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
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.data.map(pati => (
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