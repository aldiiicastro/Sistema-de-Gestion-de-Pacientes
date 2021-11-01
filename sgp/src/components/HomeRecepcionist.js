import React from 'react'
import { useHistory } from 'react-router';
import ButtonActions from '../elementos/ButtonActions';
const HomeRecepcionist = () => { 
    const history = useHistory();
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

    // Provisorio hasta que esten las paginas reales.
    const goToHome = () => {
        history.push("/Home")
    };
       // Para poder ir a ver los graficos
       const goToEstadisticas = () => {
        history.push("/Estadisticas")
    };

    return(
        <React.Fragment>
            <div className='gridStyle marginTop'>
                {/* <ButtonActions id={"wattingList"} text={'Ver lista de espera'} onClickDo={goToWattingList} icon={'list'} isDisabled={false}/> */}
                <ButtonActions id={"statistics"} text={'Ver estadisticas'} onClickDo={goToEstadisticas} icon={'signal'} isDisabled= {true}/>
            </div>
            <div className='gridStyle'>
                <ButtonActions id={"addPatient"} text={'Agregar un paciente'} onClickDo={goToAddPatient} icon={'user-plus'} isDisabled={false}/>
                <ButtonActions id={"deletePatient"} text={'Dar de baja un paciente'} onClickDo={goToPatientsList} icon={'user-times'} isDisabled={false}/>
            </div>

        </React.Fragment>
    )}
export default HomeRecepcionist;