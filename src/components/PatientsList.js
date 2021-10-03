import React from "react";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import '../styles/PatientList.css';

class PatientsList extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          data: []
        }
    }
    
    getData = () => {
        axios.get('http://localhost:3000/api/allPatients')
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
        axios.delete('http://localhost:3000/api/borrarPaciente/'+id)
        .then(res => {
            console.log(res);
            console.log("Se elimino un paciente");
        });

        window.location.reload();
    }

    render () {
        return (
            
            <Container className="align-center">
                <Row xs={1} md={2} className="g-4">
                    {this.state.data.map(paci => (
                        <Card  className="title" key={paci._id} style={{ width: '18rem' }}>
                        <Card.Body>
                        <Card.Title className="linea">{paci.name} {paci.surname}</Card.Title>
                        <Card.Text>DNI: {paci.dni}</Card.Text>
                        <Card.Text>Localidad: {paci.state}</Card.Text>
                        <Button variant="danger" onClick = {() => this.deletePatient(paci._id)}>Dar de baja</Button>
                        </Card.Body>
                    </Card>
                    ))}
               </Row>
            </Container>
        );
    }
}

export default PatientsList;