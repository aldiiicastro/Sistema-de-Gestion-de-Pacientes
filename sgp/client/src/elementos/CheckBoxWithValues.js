import React from 'react';
import { Form, Col,  InputGroup} from 'react-bootstrap';
const CheckWithValues = (props) => {

    return (
        <>
            <InputGroup className="mb-3">
                <InputGroup.Checkbox className="checkBoxToResetPFIngreso" name="Fiebre"
                    checked={props.sympthoms.includes("Fiebre")} disabled
                />
                <InputGroup.Text> Fiebre </InputGroup.Text>
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Checkbox className="checkBoxToResetPFIngreso" name="Tos"
                    checked={props.sympthoms.includes("Tos")} disabled
                />
                <InputGroup.Text> Tos </InputGroup.Text>
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Checkbox className="checkBoxToResetPFIngreso" name="Perdida de Gusto/Olfato"
                    checked={props.sympthoms.includes("Perdida de Gusto/Olfato")} disabled
                />
                <InputGroup.Text> Perdida de Gusto/olfato </InputGroup.Text>
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Checkbox className="checkBoxToResetPFIngreso" name="Dolor de Cabeza"
                    checked={props.sympthoms.includes("Dolor de Cabeza")} disabled
                />
                <InputGroup.Text> Dolor de Cabeza </InputGroup.Text>
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Checkbox className="checkBoxToResetPFIngreso" name="Dolor de Garganta"
                    checked={props.sympthoms.includes("Dolor de Garganta")} disabled
                />
                <InputGroup.Text> Dolor de Garganta </InputGroup.Text>
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Checkbox className="checkBoxToResetPFIngreso" name="Dificultad para respirar o disnea"
                    checked={props.sympthoms.includes("Dificultad para respirar o disnea")} disabled
                />
                <InputGroup.Text> Dificultad para respirar o disnea </InputGroup.Text>
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Checkbox className="checkBoxToResetPFIngreso" name="hasExtraSympthoms"
                    checked={props.hasExtraSympthoms} disabled
                />
                <InputGroup.Text> Aclaraciones Extras </InputGroup.Text>
                <Col xs={5}>
                    <Form.Control
                        id='formControlSE'
                        name='dataExtraSympthoms'
                        as="textarea" rows={5}
                        value={props.dataExtraSympthoms}
                        style= {{width: '280px'}}
                        disabled
                    />
                </Col>
            </InputGroup>
        </>
    )
}

export default CheckWithValues;