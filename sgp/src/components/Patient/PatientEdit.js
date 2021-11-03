import React, {useEffect, useState } from 'react';
import { Form, Col, Row, InputGroup, Container, Button } from 'react-bootstrap';
import DoctorNavegation from '../Navegation/DoctorNavegation';
import { useLocation} from "react-router-dom";
import { useHistory } from 'react-router';
import Swal from 'sweetalert2';
import { getLoggedUser } from '../../routes/apiCallsUser'
import { updatePatient } from '../../routes/apiCallsPatient';
import RecepcionistNavegation from '../Navegation/RecepcionistNavegation';

const PatientEdit = () => {
    const location = useLocation()
    const history = useHistory()
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

    const handleCheckBoxSymptoms = (event) => {
        const name = event.target.name;
        if (event.target.checked) {
            setData({
                ...data,
                sympthoms: data.sympthoms.concat([name])
            })
        } else {
            setData({
                ...data,
                sympthoms: data.sympthoms.filter(s => s !== name)
            })
        }
    }

    const handleExtraSymptoms = (event) => {
        const name = event.target.name;
        const value = event.target.checked;
        const area = document.getElementById('formControlSE')

        area.disabled = !event.target.checked

        setData({
            ...data,
            [name]: value
        });
    }

    useEffect(() => {
        location.state ? setData(location.state) : setData();
        getLoggedUser().then(data => setUserLogged(data.data));
    }, [])

    const handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;



        setData({
            ...data,
            [name]: value
        });
    }

    const handleSubmit = async event => {
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

        await updatePatient(data).then(r => {
            Toast.fire({
                icon: 'success',
                title: `Paciente ${r.data.data.name} ${r.data.data.surname} actualizado Corectamente!`
            })

            if(history.location.state) {
                const nData = r.data.data
                history.replace({
                    pathname: 'patient-attending',
                    state: nData
                })
            }

            setData(r.data.data)
        })
            .catch(e => {
                Toast.fire({
                    icon: 'error',
                    title: e.response.data.response
                })
            })
    }

    const checkWithValues = () => {

        return (
            <>
                <InputGroup className="mb-3">
                    <InputGroup.Checkbox onChange={handleCheckBoxSymptoms} className="checkBoxToResetPFIngreso" name="Fiebre"
                        checked={data.sympthoms.includes("Fiebre")}
                    />
                    <InputGroup.Text> Fiebre </InputGroup.Text>
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Checkbox onChange={handleCheckBoxSymptoms} className="checkBoxToResetPFIngreso" name="Tos"
                        checked={data.sympthoms.includes("Tos")}
                    />
                    <InputGroup.Text> Tos </InputGroup.Text>
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Checkbox onChange={handleCheckBoxSymptoms} className="checkBoxToResetPFIngreso" name="Perdida de Gusto/Olfato"
                        checked={data.sympthoms.includes("Perdida de Gusto/Olfato")}
                    />
                    <InputGroup.Text> Perdida de Gusto/olfato </InputGroup.Text>
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Checkbox onChange={handleCheckBoxSymptoms} className="checkBoxToResetPFIngreso" name="Dolor de Cabeza"
                        checked={data.sympthoms.includes("Dolor de Cabeza")}
                    />
                    <InputGroup.Text> Dolor de Cabeza </InputGroup.Text>
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Checkbox onChange={handleCheckBoxSymptoms} className="checkBoxToResetPFIngreso" name="Dolor de Garganta"
                        checked={data.sympthoms.includes("Dolor de Garganta")}
                    />
                    <InputGroup.Text> Dolor de Garganta </InputGroup.Text>
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Checkbox onChange={handleCheckBoxSymptoms} className="checkBoxToResetPFIngreso" name="Dificultad para respirar o disnea"
                        checked={data.sympthoms.includes("Dificultad para respirar o disnea")}
                    />
                    <InputGroup.Text> Dificultad para respirar o disnea </InputGroup.Text>
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Checkbox onChange={handleExtraSymptoms} className="checkBoxToResetPFIngreso" name="hasExtraSympthoms"
                        checked={data.hasExtraSympthoms}
                    />
                    <InputGroup.Text> Aclaraciones Extras </InputGroup.Text>
                    <Col xs={4}>
                        <Form.Control
                            onChange={handleChange}
                            id='formControlSE'
                            name='dataExtraSympthoms'
                            as="textarea" rows={5}
                            style= {{width: '250px'}}
                            value={data.dataExtraSympthoms}
                        />
                    </Col>
                </InputGroup>
            </>
        )
    }
 

    return (
        <>
         { 
            userLogged.doctor ? <DoctorNavegation/> : <RecepcionistNavegation/>
         }
            
            <Container className='marginTop'>
                <Form >
                    <Row>
                        <Col xs={6}>
                            <Form.Group className="mb-3" controlId="ControlTextAreaNN1">
                                <Form.Label>Nombre/s</Form.Label>
                                <Form.Control
                                    value={data.name}
                                    onChange={handleChange}
                                    name='name'
                                    size="sm"
                                    type="text" />
                            </Form.Group>
                        </Col>
                        <Col xs={6}>
                            <Form.Group className="mb-3" controlId="ControlTextAreaNN2">
                                <Form.Label>Apellido/s</Form.Label>
                                <Form.Control
                                    value={data.surname}
                                    onChange={handleChange}
                                    name='surname'
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
                                    value={data.dni}
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
                                    value={data.born}
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
                                    value={data.state}
                                    onChange={handleChange}
                                    name='state'
                                    size="sm"
                                    type="text" />
                            </Form.Group>
                        </Col>
                        <Col xs={3}>
                            <Form.Group className="mb-3" controlId="ControlTextAreaNN5">
                                <Form.Label>Localidad</Form.Label>
                                <Form.Control
                                    value={data.location}
                                    onChange={handleChange}
                                    name='location'
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
                                    value={data.street}
                                    onChange={handleChange}
                                    name='street'
                                    size="sm"
                                    type="text" />
                            </Form.Group>
                        </Col>
                        <Col xs={2}>
                            <Form.Group className="mb-3" controlId="ControlTextAreaNN7">
                                <Form.Label>Numero</Form.Label>
                                <Form.Control
                                    value={data.number}
                                    onChange={handleChange}
                                    name='number'
                                    size="sm"
                                    type="number"
                                    className="controlNumber" />
                            </Form.Group>
                        </Col>
                        <Col xs={2}>
                            <Form.Group className="mb-3" controlId="ControlTextAreaNN8">
                                <Form.Label>Piso</Form.Label>
                                <Form.Control
                                    value={data.floor}
                                    onChange={handleChange}
                                    name='floor'
                                    size="sm"
                                    type="number"
                                    className="controlNumber" />
                            </Form.Group>
                        </Col>
                        <Col xs={2}>
                            <Form.Group className="mb-3" controlId="ControlTextAreaNN9">
                                <Form.Label>Código Postal</Form.Label>
                                <Form.Control
                                    value={data.zipCode}
                                    onChange={handleChange}
                                    name='zipCode'
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
                            <InputGroup.Checkbox name="isNn" id="checkNN" className="checkBoxToResetPFIngreso" />
                            <InputGroup.Text> Es NN </InputGroup.Text>
                        </InputGroup>

                        <Col xs={4}>
                            <Form.Group className="mb-3" controlId="ControlTextAreaNN" >
                                <Form.Label>Datos Extras Ingresos NN</Form.Label>
                                <Form.Control
                                    // value={this.state.infoNN}
                                    //    onChange={this.handleChange}
                                    name='infoNN'
                                    as="textarea" rows={5}
                                    disabled
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button variant="primary" onClick={handleSubmit} id="ingresarButton" type="submit"> Editar Paciente </Button>
                </Form>
            </Container>
        </>
    )
}

export default PatientEdit;