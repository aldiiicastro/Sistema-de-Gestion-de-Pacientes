import { Component } from 'react';
import {Form} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export class PacientForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            apellido:'',
            dni:'',
            calle:'',
            numero:'',
            piso:'',
            codigo_postal:'',
            localidad:'',
            sintomas:''
            
        };
    }
    
    handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
    
        this.setState({

          [name] : value
    });
    }
    
    handleSubmit = event => {
        alert('Se ingreso un paciente: ' + this.state.nombre + ' ' + this.state.apellido);

        event.preventDefault();


        //funcion post para dar de alta un paciente 
        

        
        
    }
    
    render(){
        return (
            <Container>
                <h3>Ingrese los datos:</h3>
                <Form onSubmit={this.handleSubmit}>
                    <Row>
                        <Col xs={6}>
                            <Form.Group className="mb-3" >
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control value={this.state.nombre}
                                onChange={this.handleChange}
                                name = 'nombre'
                                size="sm" type="text"/>
                            </Form.Group>
                        </Col>
                        <Col xs={6}>
                            <Form.Group className="mb-3" >
                                <Form.Label>Apellido</Form.Label>
                                <Form.Control value={this.state.apellido}
                                onChange={this.handleChange}
                                name = 'apellido'
                                size="sm" type="text"/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={3}>
                            <Form.Group className="mb-3" >
                                <Form.Label>DNI</Form.Label>
                                <Form.Control value={this.state.dni}
                                onChange={this.handleChange}
                                name = 'dni'
                                 size="sm" type="text" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={3}>
                            <Form.Group className="mb-3" >
                                <Form.Label>Calle</Form.Label>
                                <Form.Control value={this.state.calle}
                                onChange={this.handleChange}
                                name = 'calle'
                                 size="sm" type="text"/>
                            </Form.Group>
                        </Col>
                        <Col xs={2}>
                            <Form.Group className="mb-3" >
                                <Form.Label>Numero</Form.Label>
                                <Form.Control value={this.state.numero}
                                onChange={this.handleChange}
                                name = 'numero'
                                 size="sm" type="text"/>
                            </Form.Group>
                        </Col>
                        <Col xs={2}>
                            <Form.Group className="mb-3" >
                                <Form.Label>Piso</Form.Label>
                                <Form.Control value={this.state.piso}
                                onChange={this.handleChange}
                                name = 'piso'
                                size="sm" type="text"/>
                            </Form.Group>
                        </Col>
                        <Col xs={2}>
                            <Form.Group className="mb-3" >
                                <Form.Label>Código Postal</Form.Label>
                                <Form.Control value={this.state.codigo_postal}
                                onChange={this.handleChange}
                                name = 'codigo_postal'
                                size="sm" type="text"/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={3}>
                        <Form.Group className="mb-3">
                            <Form.Label>Localidad</Form.Label>
                            <Form.Control value={this.state.localidad}
                                onChange={this.handleChange}
                                name = 'localidad'
                             size="sm" type="text" />
                        </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={4}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Escriba los sintomas</Form.Label>
                            <Form.Control value={this.state.sintomas}
                                onChange={this.handleChange}
                                name = 'sintomas'
                             as="textarea" rows={5} />
                        </Form.Group>
                        </Col>
                    </Row>
                    <Button variant="primary" type="submit"> Cargar </Button>
                </Form>
            </Container>
        );
    }
}