import { Component } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export class PacientForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            apellido: '',
            dni: '',
            calle: '',
            numero: '',
            piso: '',
            codigo_postal: '',
            localidad: '',
            sintomas: [],
            sintomasExtras: '',
            provincia: '',
            nn: false,
            infoNN: '',
        };
    }

    handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });
    }

    handleChangeCheckBox = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const area = document.getElementById('ControlTextAreaNN')

        for (let index = 1; index < 10; index++) {
            let area2 = document.getElementById(`ControlTextAreaNN${index}`)
            area2.disabled = event.target.checked
        }
        
        area.disabled = !event.target.checked

        this.setState({
            [name]: value
        });
    }

    handleCheckBoxSymptoms = (event) => {
        const name = event.target.name;

        event.target.checked ? this.state.sintomas.push(name) : this.state.sintomas =this.state.sintomas.filter(s => s != name)
    }

    handleExtraSymptoms = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const area = document.getElementById('formControlSE')

        area.disabled = !event.target.checked
    }

    handleSubmit = event => {
        alert('Se ingreso un paciente: ' + this.state.nombre + ' ' + this.state.apellido);

        event.preventDefault();


        //funcion post para dar de alta un paciente 




    }


    render() {
        return (
            <Container>
                <h3>Ingrese los datos:</h3>
                <Form onSubmit={this.handleSubmit}>
                    <Row>
                        <Col xs={6}>
                            <Form.Group className="mb-3" controlId="ControlTextAreaNN1">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control value={this.state.nombre}
                                    onChange={this.handleChange}
                                    name='nombre'
                                    size="sm" 
                                    type="text"
                                    disabled />
                            </Form.Group>
                        </Col>
                        <Col xs={6}>
                            <Form.Group className="mb-3" controlId="ControlTextAreaNN2">
                                <Form.Label>Apellido</Form.Label>
                                <Form.Control value={this.state.apellido}
                                    onChange={this.handleChange}
                                    name='apellido'
                                    size="sm" 
                                    type="text" 
                                    disabled/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={3}>
                            <Form.Group className="mb-3" controlId="ControlTextAreaNN3">
                                <Form.Label>DNI</Form.Label>
                                <Form.Control value={this.state.dni}
                                    onChange={this.handleChange}
                                    name='dni'
                                    size="sm" 
                                    type="text" 
                                    disabled/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={3}>
                            <Form.Group className="mb-3" controlId="ControlTextAreaNN4">
                                <Form.Label>Provincia</Form.Label>
                                <Form.Control value={this.state.provincia}
                                    onChange={this.handleChange}
                                    name='provincia'
                                    size="sm"
                                    type="text" 
                                    disabled/>
                            </Form.Group>
                        </Col>
                        <Col xs={3}>
                            <Form.Group className="mb-3" controlId="ControlTextAreaNN5">
                                <Form.Label>Localidad</Form.Label>
                                <Form.Control value={this.state.localidad}
                                    onChange={this.handleChange}
                                    name='localidad'
                                    size="sm" 
                                    type="text"
                                    disabled />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={3}>
                            <Form.Group className="mb-3" controlId="ControlTextAreaNN6">
                                <Form.Label>Calle</Form.Label>
                                <Form.Control value={this.state.calle}
                                    onChange={this.handleChange}
                                    name='calle'
                                    size="sm" 
                                    type="text"
                                    disabled/>
                            </Form.Group>
                        </Col>
                        <Col xs={2}>
                            <Form.Group className="mb-3" controlId="ControlTextAreaNN7">
                                <Form.Label>Numero</Form.Label>
                                <Form.Control value={this.state.numero}
                                    onChange={this.handleChange}
                                    name='numero'
                                    size="sm" 
                                    type="text" 
                                    disabled/>
                            </Form.Group>
                        </Col>
                        <Col xs={2}>
                            <Form.Group className="mb-3" controlId="ControlTextAreaNN8">
                                <Form.Label>Piso</Form.Label>
                                <Form.Control value={this.state.piso}
                                    onChange={this.handleChange}
                                    name='piso'
                                    size="sm" 
                                    type="text" 
                                    disabled/>
                            </Form.Group>
                        </Col>
                        <Col xs={2}>
                            <Form.Group className="mb-3" controlId="ControlTextAreaNN9">
                                <Form.Label>Código Postal</Form.Label>
                                <Form.Control value={this.state.codigo_postal}
                                    onChange={this.handleChange}
                                    name='codigo_postal'
                                    size="sm" 
                                    type="text" 
                                    disabled/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <InputGroup className="mb-3">
                            <InputGroup.Checkbox onChange={this.handleCheckBoxSymptoms} name="Fiebre" />
                            <InputGroup.Text> Fiebre </InputGroup.Text>
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroup.Checkbox onChange={this.handleCheckBoxSymptoms} name="tos" />
                            <InputGroup.Text> Tos </InputGroup.Text>
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroup.Checkbox onChange={this.handleCheckBoxSymptoms} name="Perdida de Gusto/Olfato" />
                            <InputGroup.Text> Perdida de Gusto/olfato </InputGroup.Text>
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroup.Checkbox onChange={this.handleCheckBoxSymptoms} name="Dolor de Cabeza" />
                            <InputGroup.Text> Dolor de Cabeza </InputGroup.Text>
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroup.Checkbox onChange={this.handleCheckBoxSymptoms} name="Dolor de Garganta" />
                            <InputGroup.Text> Dolor de Garganta </InputGroup.Text>
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroup.Checkbox onChange={this.handleCheckBoxSymptoms} name="Dificultad para respirar o disnea" />
                            <InputGroup.Text> Dificultad para respirar o disnea </InputGroup.Text>
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroup.Checkbox onChange={this.handleExtraSymptoms} name="Aclaraciones Extras" />
                            <InputGroup.Text> Aclaraciones Extras </InputGroup.Text>
                            <Col xs={4}>
                                <Form.Control value={this.state.sintomasExtras}
                                    id= 'formControlSE'
                                    onChange={this.handleChange}
                                    name='sintomasExtras'
                                    as="textarea" rows={5}
                                    disabled
                                />
                            </Col>
                        </InputGroup>

                    </Row>
                    <Row>
                        <InputGroup className="mb-3">
                            <InputGroup.Checkbox onChange={this.handleChangeCheckBox} aria-label="Checkbox for following text input" />
                            <InputGroup.Text> Es NN </InputGroup.Text>
                        </InputGroup>

                        <Col xs={4}>
                            <Form.Group className="mb-3" controlId="ControlTextAreaNN" >
                                <Form.Label>Datos Extras Ingresos NN</Form.Label>
                                <Form.Control value={this.state.infoNN}
                                    onChange={this.handleChange}
                                    name='infoNN'
                                    as="textarea" rows={5}
                                    disabled
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button variant="primary" type="submit"> Cargar </Button>
                </Form>
            </Container>
        );
    }
}