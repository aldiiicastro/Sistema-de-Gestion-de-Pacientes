import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { pacientesAtendidos } from '../routes/apiCallsPatient';
import NavegationDoctor from './NavegationDoctor';
import { Card, Row, OverlayTrigger, Tooltip } from 'react-bootstrap';
import '../styles/AttendedList.css'
import moment from 'moment';
import { useHistory } from 'react-router';


const AttendedList = () => {
    const history = useHistory();

    const [attended, setAttended] = useState([])

    useEffect(() => {
        charge()
    }, [])

    const charge = async () => {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        await pacientesAtendidos().then(r => {
            setAttended(r.data.data)
        }).catch(e => {
            Toast.fire({
                icon: 'error',
                title: 'No se pudó recuperar los pacientes'
            })
        })
    }

    const transformDate = (date) => {
        const newDate = moment(date).format("DD/MM/YYYY")

        return newDate
    }

    const goToFormCharged = (person) => {
        history.push({
            pathname: "/post-add-patient",
            state: person
        })
    }


    return (
        <>
            <NavegationDoctor></NavegationDoctor>
            
            <Row xs={1} md={2} className="g-4 marginCards">
                {attended.map((person, index) => (
                    <OverlayTrigger
                        key={index}
                        placement="top"
                        overlay={
                            <Tooltip id="tooltip-top">
                                Al clickear podes ver datos del ingreso!
                            </Tooltip>
                        }
                    >
                        <Card className="MainCardAt" key={index} onClick={() => goToFormCharged(person)}>
                            <Card.Title>
                                <span className="spanAt">
                                    <i className="fa fa-user fa-1x" aria-hidden="true"></i>          {`${person.surname}, ${person.name}`}</span>
                            </Card.Title>
                            <hr />
                            <Card.Body>
                                <Card.Text className="textAt" name ="dniT">
                                    DNI: <span> {person.dni} </span>
                                </Card.Text>
                                <Card.Text className="textAt" name="ingresoT">
                                    Ingreso: {transformDate(person.entryDate)}
                                </Card.Text>
                            </Card.Body>
                        </Card></OverlayTrigger>
                ))}
            </Row>
        </>
    )
};

export default AttendedList;