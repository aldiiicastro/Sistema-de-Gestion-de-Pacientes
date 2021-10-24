import React, {useEffect, useState } from 'react';
import { useLocation} from "react-router-dom";
import { Form, Col,  InputGroup} from 'react-bootstrap';
const CheckWithValues = () => {
    const location = useLocation()
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
        location.state ? setData(location.state) : setData()
    }, [])


    return (
        <>
            <InputGroup className="mb-3">
                <InputGroup.Checkbox className="checkBoxToResetPFIngreso" name="Fiebre"
                    checked={data.sympthoms.includes("Fiebre")} disabled
                />
                <InputGroup.Text> Fiebre </InputGroup.Text>
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Checkbox className="checkBoxToResetPFIngreso" name="Tos"
                    checked={data.sympthoms.includes("Tos")} disabled
                />
                <InputGroup.Text> Tos </InputGroup.Text>
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Checkbox className="checkBoxToResetPFIngreso" name="Perdida de Gusto/Olfato"
                    checked={data.sympthoms.includes("Perdida de Gusto/Olfato")} disabled
                />
                <InputGroup.Text> Perdida de Gusto/olfato </InputGroup.Text>
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Checkbox className="checkBoxToResetPFIngreso" name="Dolor de Cabeza"
                    checked={data.sympthoms.includes("Dolor de Cabeza")} disabled
                />
                <InputGroup.Text> Dolor de Cabeza </InputGroup.Text>
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Checkbox className="checkBoxToResetPFIngreso" name="Dolor de Garganta"
                    checked={data.sympthoms.includes("Dolor de Garganta")} disabled
                />
                <InputGroup.Text> Dolor de Garganta </InputGroup.Text>
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Checkbox className="checkBoxToResetPFIngreso" name="Dificultad para respirar o disnea"
                    checked={data.sympthoms.includes("Dificultad para respirar o disnea")} disabled
                />
                <InputGroup.Text> Dificultad para respirar o disnea </InputGroup.Text>
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Checkbox className="checkBoxToResetPFIngreso" name="hasExtraSympthoms"
                    checked={data.hasExtraSympthoms} disabled
                />
                <InputGroup.Text> Aclaraciones Extras </InputGroup.Text>
                <Col xs={4}>
                    <Form.Control
                        id='formControlSE'
                        name='dataExtraSympthoms'
                        as="textarea" rows={5}
                        value={data.dataExtraSympthoms}
                        disabled
                    />
                </Col>
            </InputGroup>
        </>
    )
}

export default CheckWithValues;