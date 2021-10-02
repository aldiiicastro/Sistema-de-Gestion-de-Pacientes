import '../styles/Home.css';
import React from 'react'
import { useHistory } from 'react-router';
import Navegation from './Navegation';
import ButtonActions from '../elementos/ButtonActions';

const Home = () => {
    const history = useHistory();

    //Para poder ir a la pagina de agregar paciente.
    const goToAddPatient = () => {
        history.push("/add-patient")
    };

    // Para poder ir a la pagina de lista de espera.
    const goToWattingList = () => {
        history.push("/watting-list")
    };

    // Provisorio hasta que esten las paginas reales.
    const goToHome = () => {
        history.push("/Home")
    };

    return(
        <React.Fragment>

            {/*La barra de navegacion, se encuentra en otro componente*/}
            <Navegation/>

            {/*El fondo de la pagina*/}
            <div className='welcome'>
                <p>Bienvenidos al Sistema de Gestión de Pacientes</p>
            </div>
            {/* Botones, te llevan a las paginas que dice */}
            <div className='gridStyle marginTop'>
                <ButtonActions id={"addPatient"} text={'Agregar un paciente'} onClickDo={goToAddPatient} icon={'user-plus'}/>
                <ButtonActions id={"deletePatient"} text={'Dar de baja un paciente'} onClickDo={goToHome} icon={'user-times'}/>
            </div>
            <div className='gridStyle'>
                <ButtonActions id={"wattingList"} text={'Ver lista de espera'} onClickDo={goToWattingList} icon={'list'}/>
                <ButtonActions id={"statistics"} text={'Ver estadisticas'} onClickDo={goToHome} icon={'signal'}/>
            </div>
        </React.Fragment>
    )
}

export default Home;