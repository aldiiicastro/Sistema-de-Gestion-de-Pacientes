import React from "react";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import '../styles/PatientList.css';
import NavegationDoctor from './NavegationDoctor';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClinicMedical } from '@fortawesome/free-solid-svg-icons';
import { deletePatient , allPatient } from '../routes/apiCallsPatient';

class PatientsList extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          data: []
        }
    }
    
    getData = () => {
        allPatient()
        .then(res => {
          console.log(res.data);
          var data = res.data
          this.setState({data : data.data})
        })
    }

    componentDidMount = () => {
        this.getData();
    }

    deletePatient = (id) => {
        
        const Toast =  Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        });

        deletePatient(id)
        .then(res => {
            console.log(res);
            console.log("Se elimino un paciente");
            Toast.fire({
                icon: 'success',
                title: res.data.response
            });
        }).catch(e => {
            Toast.fire({
                icon: 'error',
                title: e.response
            });
        });
        
        setTimeout(() => {
            this.getData();
        }, 2001);
    }

    render () {

        if(this.state.data.length !== 0){
            return (
                   
                <div> 
                    <NavegationDoctor/>
                    <br/>
                    <br/>
                    <br/>
                    <h3>Pacientes a dar de baja:</h3>
                    <Row xs={1} md={2} className="g-4">
                         {this.state.data.map(paciente => (
                             <Card  className="titlePatientList" key={paciente._id} style={{ width: '18rem' }}>
                                 <Card.Body>
                                 <Card.Title className="linea">{paciente.name} {paciente.surname}</Card.Title>
                                 <Card.Text>DNI: {paciente.dni}</Card.Text>
                                 <Card.Text>Localidad: {paciente.location}</Card.Text>
                                 <Button variant="danger" onClick = {() => this.deletePatient(paciente._id)}>Dar de baja</Button>
                                 </Card.Body>
                             </Card>
                         ))}
                     </Row>
                     
                     
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

export default PatientsList;