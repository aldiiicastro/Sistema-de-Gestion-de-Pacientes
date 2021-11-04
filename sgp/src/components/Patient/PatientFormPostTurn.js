import React, { useEffect, useState } from 'react';
import { Form, Col, Row, InputGroup, Container } from 'react-bootstrap';
import RecepcionistNavegation from '../Navegation/RecepcionistNavegation';
import { getLoggedUser } from '../../routes/apiCallsUser';
import DoctorNavegation from '../Navegation/DoctorNavegation';
import { useLocation } from "react-router-dom";

const PatientFormPostTurn = () => {

    const location = useLocation();
    const [userLogged, setUserLogged] = useState(Object);

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
    })

    useEffect(() => {
        setData(location.state);
        getLoggedUser().then(data => setUserLogged(data.data));
    }, [])

    const checkWithValues = () => {
        const symthomps = location.state.sympthoms

        console.log(location.state)

        return (
            <>

                <InputGroup className="mb-3">
                    <InputGroup.Checkbox className="checkBoxToResetPFIngreso" name="Fiebre" checked={symthomps.includes("Fiebre")} disabled />
                    <InputGroup.Text> Fiebre </InputGroup.Text>
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Checkbox className="checkBoxToResetPFIngreso" name="Tos" checked={symthomps.includes("Tos")} disabled />
                    <InputGroup.Text> Tos </InputGroup.Text>
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Checkbox className="checkBoxToResetPFIngreso" name="Perdida de Gusto/Olfato" checked={symthomps.includes("Perdida de Gusto/Olfato")} disabled />
                    <InputGroup.Text> Perdida de Gusto/olfato </InputGroup.Text>
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Checkbox className="checkBoxToResetPFIngreso" name="Dolor de Cabeza" checked={symthomps.includes("Dolor de Cabeza")} disabled />
                    <InputGroup.Text> Dolor de Cabeza </InputGroup.Text>
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Checkbox className="checkBoxToResetPFIngreso" name="Dolor de Garganta" checked={symthomps.includes("Dolor de Garganta")} disabled />
                    <InputGroup.Text> Dolor de Garganta </InputGroup.Text>
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Checkbox className="checkBoxToResetPFIngreso" name="Dificultad para respirar o disnea" checked={symthomps.includes("Dificultad para respirar o disnea")} disabled />
                    <InputGroup.Text> Dificultad para respirar o disnea </InputGroup.Text>
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Checkbox className="checkBoxToResetPFIngreso" name="bSintomasExtras" checked={location.state.hasExtraSympthoms} disabled />
                    <InputGroup.Text> Aclaraciones Extras </InputGroup.Text>
                    <Col xs={4}>
                        <Form.Control
                            id='formControlSE'
                            name='sintomasExtras'
                            as="textarea" rows={5}
                            value={location.state.dataExtraSympthoms}
                            disabled
                        />
                    </Col>
                </InputGroup>
            </>
        )
    }


    return (
        <>
            {
                userLogged.doctor ? <DoctorNavegation /> : <RecepcionistNavegation />
            }
            <Container className='marginTop'>
                <Form >
                    <Row>
                        <Col xs={6}>
                            <Form.Group className="mb-3" controlId="ControlTextAreaNN1">
                                <Form.Label>Nombre/s</Form.Label>
                                <Form.Control
                                    value={location.state.name}
                                    name='nombre'
                                    size="sm"
                                    type="text" disabled />
                            </Form.Group>
                        </Col>
                        <Col xs={6}>
                            <Form.Group className="mb-3" controlId="ControlTextAreaNN2">
                                <Form.Label>Apellido/s</Form.Label>
                                <Form.Control
                                    value={location.state.surname}
                                    name='apellido'
                                    size="sm"
                                    type="text" disabled />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={3}>
                            <Form.Group className="mb-3" controlId="ControlTextAreaNN3">
                                <Form.Label>DNI</Form.Label>
                                <Form.Control
                                    value={location.state.dni}
                                    name='dni'
                                    size="sm"
                                    type="number"
                                    className="controlNumber" disabled />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={3}>
                            <Form.Group className="mb-3" controlId="ControlTextAreaNN4">
                                <Form.Label>Provincia</Form.Label>
                                <Form.Control
                                    value={location.state.state}
                                    name='provincia'
                                    size="sm"
                                    type="text" disabled />
                            </Form.Group>
                        </Col>
                        <Col xs={3}>
                            <Form.Group className="mb-3" controlId="ControlTextAreaNN5">
                                <Form.Label>Localidad</Form.Label>
                                <Form.Control
                                    value={location.state.location}
                                    name='localidad'
                                    size="sm"
                                    type="text" disabled />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={3}>
                            <Form.Group className="mb-3" controlId="ControlTextAreaNN6">
                                <Form.Label>Calle</Form.Label>
                                <Form.Control
                                    value={location.state.street}
                                    name='calle'
                                    size="sm"
                                    type="text" disabled />
                            </Form.Group>
                        </Col>
                        <Col xs={2}>
                            <Form.Group className="mb-3" controlId="ControlTextAreaNN7">
                                <Form.Label>Numero</Form.Label>
                                <Form.Control
                                    value={location.state.number}
                                    name='numero'
                                    size="sm"
                                    type="number"
                                    className="controlNumber" disabled />
                            </Form.Group>
                        </Col>
                        <Col xs={2}>
                            <Form.Group className="mb-3" controlId="ControlTextAreaNN8">
                                <Form.Label>Piso</Form.Label>
                                <Form.Control
                                    value={location.state.floor}
                                    name='piso'
                                    size="sm"
                                    type="number"
                                    className="controlNumber" disabled />
                            </Form.Group>
                        </Col>
                        <Col xs={2}>
                            <Form.Group className="mb-3" controlId="ControlTextAreaNN9">
                                <Form.Label>Código Postal</Form.Label>
                                <Form.Control
                                    value={location.state.zipCode}
                                    name='codigo_postal'
                                    size="sm"
                                    type="text" disabled />
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
                            <InputGroup.Checkbox name="isNn" id="checkNN" className="checkBoxToResetPFIngreso" />
                            <InputGroup.Text> Es NN </InputGroup.Text>
                        </InputGroup>

                        <Col xs={4}>
                            <Form.Group className="mb-3" controlId="ControlTextAreaNN" >
                                <Form.Label>Datos Extras Ingresos NN</Form.Label>
                                <Form.Control
                                    name='infoNN'
                                    as="textarea" rows={5}
                                    disabled
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </>
    )
}

export default PatientFormPostTurn;