import { Component } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { altaPaciente } from '../routes/apiCallsPatient';
import Swal from 'sweetalert2';
import '../styles/PacientForm.css'
import Navegation from './Navegation'
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
            isNn: false,
            infoNN: '',
            bSintomasExtras: false,
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
        const value = event.target.checked;
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

        event.target.checked ? this.state.sintomas.push(name) : this.setState({ [name]: this.state.sintomas.filter(s => s !== name) })
    }

    handleExtraSymptoms = (event) => {
        const name = event.target.name;
        const value = event.target.checked;
        const area = document.getElementById('formControlSE')

        area.disabled = !event.target.checked
        this.setState({
            [name]: value
        });
    }

    handleSubmit = async event => {
        const Toast =  Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        event.preventDefault();

        await altaPaciente(this.state).then(r => {
            Toast.fire({
                icon: 'success',
                title: r.data.response
            })
        })
            .catch(e => {
                Toast.fire({
                    icon: 'error',
                    title: e.response.data.response
                })
            })
        
        this.resetForm()
    }

    resetForm = () => {
        this.setState({
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
            isNn: false,
            infoNN: '',
            bSintomasExtras: false,
        })

        const checkToReset = Array.from(document.getElementsByClassName("checkBoxToResetPFIngreso"))
        

        checkToReset.forEach( c => {
            c.checked = false
        })

        const area = document.getElementById('ControlTextAreaNN')

        for (let index = 1; index < 10; index++) {
            let area2 = document.getElementById(`ControlTextAreaNN${index}`)
            area2.disabled = false
        }

        area.disabled = false

        const areaExtra = document.getElementById('formControlSE')

        areaExtra.disabled = true
    }

    test = () => { console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa")
        const check = document.getElementById('checkNN')

        console.log(check)

        return check.checked
    }


    render() {
        return (
            <>
            <Navegation/>
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
                                        type="text" />
                                </Form.Group>
                            </Col>
                            <Col xs={6}>
                                <Form.Group className="mb-3" controlId="ControlTextAreaNN2">
                                    <Form.Label>Apellido</Form.Label>
                                    <Form.Control value={this.state.apellido}
                                        onChange={this.handleChange}
                                        name='apellido'
                                        size="sm"
                                        type="text" />
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
                                        type="number"
                                        className="controlNumber" />
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
                                        type="text" />
                                </Form.Group>
                            </Col>
                            <Col xs={3}>
                                <Form.Group className="mb-3" controlId="ControlTextAreaNN5">
                                    <Form.Label>Localidad</Form.Label>
                                    <Form.Control value={this.state.localidad}
                                        onChange={this.handleChange}
                                        name='localidad'
                                        size="sm"
                                        type="text" />
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
                                        type="text" />
                                </Form.Group>
                            </Col>
                            <Col xs={2}>
                                <Form.Group className="mb-3" controlId="ControlTextAreaNN7">
                                    <Form.Label>Numero</Form.Label>
                                    <Form.Control value={this.state.numero}
                                        onChange={this.handleChange}
                                        name='numero'
                                        size="sm"
                                        type="number"
                                        className="controlNumber" />
                                </Form.Group>
                            </Col>
                            <Col xs={2}>
                                <Form.Group className="mb-3" controlId="ControlTextAreaNN8">
                                    <Form.Label>Piso</Form.Label>
                                    <Form.Control value={this.state.piso}
                                        onChange={this.handleChange}
                                        name='piso'
                                        size="sm"
                                        type="number"
                                        className="controlNumber" />
                                </Form.Group>
                            </Col>
                            <Col xs={2}>
                                <Form.Group className="mb-3" controlId="ControlTextAreaNN9">
                                    <Form.Label>Código Postal</Form.Label>
                                    <Form.Control value={this.state.codigo_postal}
                                        onChange={this.handleChange}
                                        name='codigo_postal'
                                        size="sm"
                                        type="text" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <InputGroup className="mb-3">
                                <InputGroup.Checkbox onChange={this.handleCheckBoxSymptoms} className="checkBoxToResetPFIngreso" name="Fiebre" />
                                <InputGroup.Text> Fiebre </InputGroup.Text>
                            </InputGroup>

                            <InputGroup className="mb-3">
                                <InputGroup.Checkbox onChange={this.handleCheckBoxSymptoms} className="checkBoxToResetPFIngreso" name="Tos" />
                                <InputGroup.Text> Tos </InputGroup.Text>
                            </InputGroup>

                            <InputGroup className="mb-3">
                                <InputGroup.Checkbox onChange={this.handleCheckBoxSymptoms} className="checkBoxToResetPFIngreso" name="Perdida de Gusto/Olfato" />
                                <InputGroup.Text> Perdida de Gusto/olfato </InputGroup.Text>
                            </InputGroup>

                            <InputGroup className="mb-3">
                                <InputGroup.Checkbox onChange={this.handleCheckBoxSymptoms} className="checkBoxToResetPFIngreso" name="Dolor de Cabeza" />
                                <InputGroup.Text> Dolor de Cabeza </InputGroup.Text>
                            </InputGroup>

                            <InputGroup className="mb-3">
                                <InputGroup.Checkbox onChange={this.handleCheckBoxSymptoms} className="checkBoxToResetPFIngreso" name="Dolor de Garganta" />
                                <InputGroup.Text> Dolor de Garganta </InputGroup.Text>
                            </InputGroup>

                            <InputGroup className="mb-3">
                                <InputGroup.Checkbox onChange={this.handleCheckBoxSymptoms} className="checkBoxToResetPFIngreso" name="Dificultad para respirar o disnea" />
                                <InputGroup.Text> Dificultad para respirar o disnea </InputGroup.Text>
                            </InputGroup>

                            <InputGroup className="mb-3">
                                <InputGroup.Checkbox onChange={this.handleExtraSymptoms} className="checkBoxToResetPFIngreso" name="bSintomasExtras" />
                                <InputGroup.Text> Aclaraciones Extras </InputGroup.Text>
                                <Col xs={4}>
                                    <Form.Control value={this.state.sintomasExtras}
                                        id='formControlSE'
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
                                <InputGroup.Checkbox name="isNn" id="checkNN" onChange={this.handleChangeCheckBox} className="checkBoxToResetPFIngreso" />
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
                        <Button variant="primary" id="ingresarButton" type="submit"> Ingresar Paciente </Button>
                    </Form>
                </Container>
            </>
        );
    }
}