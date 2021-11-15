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
        name: '',
        surname: '',
        dni: '',
        street: '',
        number: '',
        floor: '',
        zipCode: '',
        location: '',
        sympthoms: [],
        dataExtraSympthoms: '',
        state: '',
        isNn: false,
        infoNN: '',
        hasExtraSympthoms: false,
        born: '',
    })

    useEffect(() => {
        setData(location.state);
        getLoggedUser().then(data => setUserLogged(data.data));
    }, [location])

    const checkWithValues = () => {
        return (
            <>

                <InputGroup className="mb-3">
                    <InputGroup.Checkbox className="checkBoxToResetPFIngreso" name="Fiebre" checked={data.sympthoms.includes("Fiebre")} disabled />
                    <InputGroup.Text> Fiebre </InputGroup.Text>
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Checkbox className="checkBoxToResetPFIngreso" name="Tos" checked={data.sympthoms.includes("Tos")} disabled />
                    <InputGroup.Text> Tos </InputGroup.Text>
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Checkbox className="checkBoxToResetPFIngreso" name="Perdida de Gusto/Olfato" checked={data.sympthoms.includes("Perdida de Gusto/Olfato")} disabled />
                    <InputGroup.Text> Perdida de Gusto/olfato </InputGroup.Text>
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Checkbox className="checkBoxToResetPFIngreso" name="Dolor de Cabeza" checked={data.sympthoms.includes("Dolor de Cabeza")} disabled />
                    <InputGroup.Text> Dolor de Cabeza </InputGroup.Text>
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Checkbox className="checkBoxToResetPFIngreso" name="Dolor de Garganta" checked={data.sympthoms.includes("Dolor de Garganta")} disabled />
                    <InputGroup.Text> Dolor de Garganta </InputGroup.Text>
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Checkbox className="checkBoxToResetPFIngreso" name="Dificultad para respirar o disnea" checked={data.sympthoms.includes("Dificultad para respirar o disnea")} disabled />
                    <InputGroup.Text> Dificultad para respirar o disnea </InputGroup.Text>
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Checkbox className="checkBoxToResetPFIngreso" name="bSintomasExtras" checked={data.hasExtraSympthoms} disabled />
                    <InputGroup.Text> Aclaraciones Extras </InputGroup.Text>
                    <Col xs={4}>
                        <Form.Control
                            id='formControlSE'
                            name='sintomasExtras'
                            as="textarea" rows={5}
                            value={data.dataExtraSympthoms}
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
                                    value={data.name}
                                    name='nombre'
                                    size="sm"
                                    type="text" disabled />
                            </Form.Group>
                        </Col>
                        <Col xs={6}>
                            <Form.Group className="mb-3" controlId="ControlTextAreaNN2">
                                <Form.Label>Apellido/s</Form.Label>
                                <Form.Control
                                    value={data.surname}
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
                                    value={data.dni}
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
                                    value={data.state}
                                    name='provincia'
                                    size="sm"
                                    type="text" disabled />
                            </Form.Group>
                        </Col>
                        <Col xs={3}>
                            <Form.Group className="mb-3" controlId="ControlTextAreaNN5">
                                <Form.Label>Localidad</Form.Label>
                                <Form.Control
                                    value={data.location}
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
                                    value={data.street}
                                    name='calle'
                                    size="sm"
                                    type="text" disabled />
                            </Form.Group>
                        </Col>
                        <Col xs={2}>
                            <Form.Group className="mb-3" controlId="ControlTextAreaNN7">
                                <Form.Label>Numero</Form.Label>
                                <Form.Control
                                    value={data.number}
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
                                    value={data.floor}
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
                                    value={data.zipCode}
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