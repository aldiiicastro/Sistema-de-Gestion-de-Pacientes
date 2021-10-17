import React from 'react'
import { useHistory } from 'react-router';
import ButtonActions from '../elementos/ButtonActions';
const HomeDoctor = () => {     const history = useHistory();
    //Para poder ir a la pagina de agregar paciente.
    const goToAddPatient = () => {
        history.push("/add-patient")
    };

    // Para poder ir a la pagina de lista de espera.
    const goToWattingList = () => {
        history.push("/watting-list")
    };

    // Para poder ir a la baja de pacientes
    const goToPatientsList = () => {
        history.push("/patient-list")
    };

    return(
        <React.Fragment>
            <div className='gridStyle marginTop'>
                <ButtonActions id={"wattingList"} text={'Ver lista de espera'} onClickDo={goToWattingList} icon={'list'} isDisabled={false}/>
            </div>
            <div className='gridStyle'>
                <ButtonActions id={"addPatient"} text={'Comenzar turno'} onClickDo={goToAddPatient} icon={'user-plus'} isDisabled={true}/>
                <ButtonActions id={"deletePatient"} text={'Finalizar turno'} onClickDo={goToPatientsList} icon={'user-times'} isDisabled={true}/>
            </div>
        </React.Fragment>
    )}
export default HomeDoctor;