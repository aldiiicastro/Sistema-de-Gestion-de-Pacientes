import '../styles/Home.css';
import React, { useEffect, useState } from 'react'
import NavegationDoctor from './NavegationDoctor';
import NavegationRecepcionista from './NavegationRecepcionista';
import HomeRecepcionist from './HomeRecepcionist';
import WattingList from './WattingList';
import { getLoggedUser } from '../routes/apiCallsUser'
import { pacienteEnTurno, pacienteAtendido } from '../routes/apiCallsPatient';

const Home = (isFinish) => {

    const [userLogged, setUserLogged] = useState(Object);
    useEffect(() => { 
        getLoggedUser().then(data => setUserLogged(data.data))
    }, []);

    return(
        <React.Fragment>
            { 
            userLogged.doctor ? 
                <>
                    <NavegationDoctor/>
                    <div className='welcome'>
                        <p>{userLogged.name} : Bienvenidos al Sistema de Gestión de Pacientes</p>
                    </div>
                    <WattingList/>
                </>
                :
                <>
                    <NavegationRecepcionista/>
                    <div className='welcome'>
                        <p>{userLogged.name} : Bienvenidos al Sistema de Gestión de Pacientes</p>
                    </div>
                    <HomeRecepcionist/>
                </>
            }
        </React.Fragment>
    )
}

export default Home;