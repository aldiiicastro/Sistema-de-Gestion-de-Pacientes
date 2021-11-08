import React, {useEffect, useState } from 'react';
import { Form, Col, Row, InputGroup, Container, Button } from 'react-bootstrap';
import DoctorNavegation from '../Navegation/DoctorNavegation';
import { useLocation} from "react-router-dom";
import { useHistory } from 'react-router';
import Swal from 'sweetalert2';
import { pacienteAtendido } from '../../routes/apiCallsPatient';
import { desatenderPaciente } from '../../routes/apiCallsPatient';
import checkWithValues from '../../elementos/CheckBoxWithValues';
import { pacientesEsperando } from "../../routes/apiCallsPatient";
import { pacienteEnTurno } from "../../routes/apiCallsPatient";
const PatientAttending = (props) => {

    const location = useLocation()
    const history = useHistory()

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
        const fsPatient = async event => {
            const patient = await pacientesEsperando().then((response) => {return response.data.data});
            return patient
        }

        !props.isTherePatient && location.state ? setData(location.state) : setData(fsPatient);

       
       

    }, [])

    window.onpopstate = function (){
        desatenderPaciente(data._id);
    }

    const goBack=()=>

    {  
        desatenderPaciente(data._id)
        history.replace({
            pathname: '/Home',       
        })


    }
    

    const goToEdit = () => {
        history.replace({
            pathname: 'patient-edit',     
            state: location.state  
        })
    }


    const ConfirmCaso = async event => {
        const Toast = Swal.mixin({
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
        
        await pacienteAtendido(data._id).then(r => {
            Toast.fire({
                icon: 'success',
                title: `Paciente ${data.name} ${data.surname} confirmacion exitosa!`
            })
            history.push('/Home')
        }).catch(e => {
                Toast.fire({
                    icon: 'error',
                    title: e.response.data.response
                })
            })
    }
    const finishTurn = async event => {
        const Toast = Swal.mixin({
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
        
        await pacienteAtendido(data._id).then(r => {
            Toast.fire({
                icon: 'success',
                title: `Paciente ${data.name} ${data.surname} actualizado corectamente!`
            })
            history.push('/Home')
        }).catch(e => {
                Toast.fire({
                    icon: 'error',
                    title: e.response.data.response
                })
            })
    }

    return (
        <>
            <DoctorNavegation />
            {window.goBack ? goBack() : null}
            <Container className='marginTop'>
                <Form >
                    <Row>
                        <Col xs={6}>
                            <Form.Group className="mb-3" controlId="ControlTextAreaNN1">
                                <Form.Label>Nombre/s</Form.Label>
                                <Form.Control
                                    value={data.name}
                                    name='name'
                                    size="sm"
                                    type="text" 
                                    disabled/>
                            </Form.Group>
                        </Col>
                        <Col xs={6}>
                            <Form.Group className="mb-3" controlId="ControlTextAreaNN2">
                                <Form.Label>Apellido/s</Form.Label>
                                <Form.Control
                                    value={data.surname}
                                    name='surname'
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
                                <Form.Control
                                    value={data.dni}
                                    name='dni'
                                    size="sm"
                                    type="number"
                                    className="controlNumber" 
                                    disabled/>
                            </Form.Group>
                        </Col>

                        <Col xs={3}>
                            <Form.Group className="mb-3" controlId="ControlTextAreaNN10">
                                <Form.Label>Fecha de nacimiento</Form.Label>
                                <Form.Control
                                    value={data.born}    
                                    name='born'
                                    size="sm"
                                    type="date"
                                    className="controlNumber"
                                    disabled
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={3}>
                            <Form.Group className="mb-3" controlId="ControlTextAreaNN4">
                                <Form.Label>Provincia</Form.Label>
                                <Form.Control
                                    value={data.state}
                                    name='state'
                                    size="sm"
                                    type="text" 
                                    disabled/>
                            </Form.Group>
                        </Col>
                        <Col xs={3}>
                            <Form.Group className="mb-3" controlId="ControlTextAreaNN5">
                                <Form.Label>Localidad</Form.Label>
                                <Form.Control
                                    value={data.location}
                                    name='location'
                                    size="sm"
                                    type="text" 
                                    disabled/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={3}>
                            <Form.Group className="mb-3" controlId="ControlTextAreaNN6">
                                <Form.Label>Calle</Form.Label>
                                <Form.Control
                                    value={data.street}
                                    name='street'
                                    size="sm"
                                    type="text" 
                                    disabled/>
                            </Form.Group>
                        </Col>
                        <Col xs={2}>
                            <Form.Group className="mb-3" controlId="ControlTextAreaNN7">
                                <Form.Label>Numero</Form.Label>
                                <Form.Control
                                    value={data.number}
                                    name='number'
                                    size="sm"
                                    type="number"
                                    className="controlNumber"
                                    disabled/>
                            </Form.Group>
                        </Col>
                        <Col xs={2}>
                            <Form.Group className="mb-3" controlId="ControlTextAreaNN8">
                                <Form.Label>Piso</Form.Label>
                                <Form.Control
                                    value={data.floor}
                                    name='floor'
                                    size="sm"
                                    type="number"
                                    className="controlNumber" 
                                    disabled/>
                            </Form.Group>
                        </Col>
                        <Col xs={2}>
                            <Form.Group className="mb-3" controlId="ControlTextAreaNN9">
                                <Form.Label>Código Postal</Form.Label>
                                <Form.Control
                                    value={data.zipCode}
                                    name='zipCode'
                                    size="sm"
                                    type="text" 
                                    disabled/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        {
                            checkWithValues(data)
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
                    <Button variant="primary" onClick={goBack} id="backButton" type="submit"> Volver Atras </Button>
                    <Button variant="primary" onClick={goToEdit} id="editButton" type="submit"> Editar Paciente </Button>
                    <Button variant="primary" onClick={finishTurn} id="finishButton" type="submit"> Terminar turno </Button>
                    <Button variant="primary" onClick={ConfirmCaso} id="finishButton" type="submit"> Confirmar caso </Button>

                </Form>
            </Container>
        </>
    )
}

export default PatientAttending;