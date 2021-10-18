import React, { useEffect, useState } from 'react';
import { Form, Col, Row, InputGroup, Container, Button } from 'react-bootstrap';
import Navegation from './Navegation';
import { useLocation } from "react-router-dom";
import Swal from 'sweetalert2';
import { altaPaciente } from '../routes/apiCallsPatient';

const PatientEdit = () => {

    const location = useLocation()

    const [data, setData] = useState({
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
        born: '',
    })

    const handleCheckBoxSymptoms = (event) => {
        const name = event.target.name;

        event.target.checked ? this.state.sintomas.push(name) : this.setState({ [name]: this.state.sintomas.filter(s => s !== name) })
    }

    const handleExtraSymptoms = (event) => {
        const name = event.target.name;
        const value = event.target.checked;
        const area = document.getElementById('formControlSE')

        area.disabled = !event.target.checked
        this.setState({
            [name]: value
        });
    }

    useEffect(() => {
        location.state ? setData(location.state) : setData()
    }, [])

    const handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;

        name == 'born' ? console.log(event.target.value) : console.log("")

        setData({
            [name]: value
        });
    }

    const handleSubmit = async event => {
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
    }

    const checkWithValues = () => {
        const symthomps = location.state ? location.state.sympthoms : []

        return (
            <>
                <InputGroup className="mb-3">
                    <InputGroup.Checkbox onChange={handleCheckBoxSymptoms} className="checkBoxToResetPFIngreso" name="Fiebre"
                    checked= {symthomps.includes("Fiebre")}   
                    />
                    <InputGroup.Text> Fiebre </InputGroup.Text>
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Checkbox onChange={handleCheckBoxSymptoms} className="checkBoxToResetPFIngreso" name="Tos"
                    checked= {symthomps.includes("Tos")}
                    />
                    <InputGroup.Text> Tos </InputGroup.Text>
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Checkbox onChange={handleCheckBoxSymptoms} className="checkBoxToResetPFIngreso" name="Perdida de Gusto/Olfato"
                    checked= {symthomps.includes("Perdida de Gusto/Olfato")}
                    />
                    <InputGroup.Text> Perdida de Gusto/olfato </InputGroup.Text>
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Checkbox onChange={handleCheckBoxSymptoms} className="checkBoxToResetPFIngreso" name="Dolor de Cabeza"
                    checked= {symthomps.includes("Dolor de Cabeza")}   
                    />
                    <InputGroup.Text> Dolor de Cabeza </InputGroup.Text>
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Checkbox onChange={handleCheckBoxSymptoms} className="checkBoxToResetPFIngreso" name="Dolor de Garganta"
                    // checked= {symthomps.includes("Dolor de Garganta")} 
                    />
                    <InputGroup.Text> Dolor de Garganta </InputGroup.Text>
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Checkbox onChange={handleCheckBoxSymptoms} className="checkBoxToResetPFIngreso" name="Dificultad para respirar o disnea"
                     checked= {symthomps.includes("Dificultad para respirar o disnea")}   
                    />
                    <InputGroup.Text> Dificultad para respirar o disnea </InputGroup.Text>
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Checkbox onChange={handleExtraSymptoms} className="checkBoxToResetPFIngreso" name="bSintomasExtras"
                    //checked={location.state.hasExtraSympthoms} 
                    />
                    <InputGroup.Text> Aclaraciones Extras </InputGroup.Text>
                    <Col xs={4}>
                        <Form.Control
                            onChange={handleChange}
                            id='formControlSE'
                            name='sintomasExtras'
                            as="textarea" rows={5}
                       // value= {location.state.dataExtraSympthoms}
                        />
                    </Col>
                </InputGroup>
            </>
        )
    }


    return (
        <>
            <Navegation />
            <Container className='marginTop'>
                <Form >
                    <Row>
                        <Col xs={6}>
                            <Form.Group className="mb-3" controlId="ControlTextAreaNN1">
                                <Form.Label>Nombre/s</Form.Label>
                                <Form.Control
                                    // value={location.state.name}
                                    onChange={handleChange}
                                    name='nombre'
                                    size="sm"
                                    type="text" />
                            </Form.Group>
                        </Col>
                        <Col xs={6}>
                            <Form.Group className="mb-3" controlId="ControlTextAreaNN2">
                                <Form.Label>Apellido/s</Form.Label>
                                <Form.Control
                                    // value={location.state.surname}
                                    onChange={handleChange}
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
                                <Form.Control
                                    // value={location.state.dni}
                                    onChange={handleChange}
                                    name='dni'
                                    size="sm"
                                    type="number"
                                    className="controlNumber" />
                            </Form.Group>
                        </Col>

                        <Col xs={3}>
                            <Form.Group className="mb-3" controlId="ControlTextAreaNN10">
                                <Form.Label>Fecha de nacimiento</Form.Label>
                                <Form.Control
                                    // value={location.state.dni}
                                    onChange={handleChange}
                                    name='born'
                                    size="sm"
                                    type="date"
                                    className="controlNumber" 
                                    />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={3}>
                            <Form.Group className="mb-3" controlId="ControlTextAreaNN4">
                                <Form.Label>Provincia</Form.Label>
                                <Form.Control
                                    // value={location.state.state}
                                    onChange={handleChange}
                                    name='provincia'
                                    size="sm"
                                    type="text" />
                            </Form.Group>
                        </Col>
                        <Col xs={3}>
                            <Form.Group className="mb-3" controlId="ControlTextAreaNN5">
                                <Form.Label>Localidad</Form.Label>
                                <Form.Control
                                    // value={location.state.location}
                                    onChange={handleChange}
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
                                <Form.Control
                                    // value={location.state.street}
                                    onChange={handleChange}
                                    name='calle'
                                    size="sm"
                                    type="text" />
                            </Form.Group>
                        </Col>
                        <Col xs={2}>
                            <Form.Group className="mb-3" controlId="ControlTextAreaNN7">
                                <Form.Label>Numero</Form.Label>
                                <Form.Control
                                    // value={location.state.number}
                                    onChange={handleChange}
                                    name='numero'
                                    size="sm"
                                    type="number"
                                    className="controlNumber" />
                            </Form.Group>
                        </Col>
                        <Col xs={2}>
                            <Form.Group className="mb-3" controlId="ControlTextAreaNN8">
                                <Form.Label>Piso</Form.Label>
                                <Form.Control
                                    // value={location.state.floor}
                                    onChange={handleChange}
                                    name='piso'
                                    size="sm"
                                    type="number"
                                    className="controlNumber" />
                            </Form.Group>
                        </Col>
                        <Col xs={2}>
                            <Form.Group className="mb-3" controlId="ControlTextAreaNN9">
                                <Form.Label>Código Postal</Form.Label>
                                <Form.Control
                                    // value={location.state.zipCode}
                                    onChange={handleChange}
                                    name='codigo_postal'
                                    size="sm"
                                    type="text" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        {
                            checkWithValues()
                        }
                    </Row>
                    <Row hidden>
                        <InputGroup className="mb-3">
                            <InputGroup.Checkbox name="isNn" id="checkNN"  className="checkBoxToResetPFIngreso" />
                            <InputGroup.Text> Es NN </InputGroup.Text>
                        </InputGroup>

                        <Col xs={4}>
                            <Form.Group className="mb-3" controlId="ControlTextAreaNN" >
                                <Form.Label>Datos Extras Ingresos NN</Form.Label>
                                <Form.Control 
                                    // value={this.state.infoNN}
                                       // onChange={this.handleChange}
                                        name='infoNN'
                                        as="textarea" rows={5}
                                        disabled
                                    />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button variant="primary" id="ingresarButton" type="submit"> Editar Paciente </Button>
                </Form>
            </Container>
        </>
    )
}

export default PatientEdit;