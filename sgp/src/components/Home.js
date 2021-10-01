import '../styles/Home.css';
import React from 'react'
import { useHistory } from 'react-router';
import background from '../assets/background-home.jpg';
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
            <img src={background} alt="background" className="myBackgroundHome"/>
            <div className='welcome'>
                <p>Bienvenidos al Sistema de Gestión de Pacientes</p>
            </div>

            {/* Botones, te llevan a las paginas que dice */}
            <ButtonActions text={'Agregar un paciente'} onClickDo={goToAddPatient} style={"buttonsTop buttonsLeft"} icon={'user-plus'}/>
            <ButtonActions text={'Dar de baja un paciente'} onClickDo={goToHome} style={"buttonsTop buttonsRight"} icon={'user-times'}/>
            <ButtonActions text={'Ver lista de espera'} onClickDo={goToWattingList} style={"buttonsBottom buttonsLeft"} icon={'list'}/>
            <ButtonActions text={'Ver estadisticas'} onClickDo={goToHome} style={"buttonsBottom buttonsRight"} icon={'signal'}/>
        </React.Fragment>
    )
}

export default Home;