import '../../styles/Home.css';
import React, { useEffect, useState } from 'react'
import { getLoggedUser } from '../../routes/apiCallsUser'
import DoctorNavegation from '../Navegation/DoctorNavegation';
import RecepcionistNavegation from '../Navegation/RecepcionistNavegation';
import HomeRecepcionist from './HomeRecepcionist';
import WattingList from '../List/WattingList';
import TutorialDoctor from '../Tutorial/TutorialDoctor';
import TutorialRecepcionista from '../Tutorial/TutorialRecepcionista';

const Home = () => {

    const [userLogged, setUserLogged] = useState(Object);

    useEffect(() => { 
        getLoggedUser().then(data => setUserLogged(data.data))
    }, []);

    return(
        <React.Fragment>
            { 
            userLogged.doctor ? 
                <>
                    <DoctorNavegation/>
                    <div className='welcome'>
                        <p>{userLogged.name} : Bienvenidos al Sistema de Gestión de Pacientes</p>
                    </div>
                    <WattingList/>
                    <TutorialDoctor
                    nombre={userLogged.name}
                    show= {userLogged.firstLog}
                    id={userLogged._id}/>
                </>
                :
                <>
                    <RecepcionistNavegation/>
                    <div className='welcome'>
                        <p>{userLogged.name} : Bienvenidos al Sistema de Gestión de Pacientes</p>
                    </div>
                    <TutorialRecepcionista
                        nombre={userLogged.name}
                        show= {userLogged.firstLog}
                        id={userLogged._id}/>
                    <HomeRecepcionist/>
                </>
            }
        </React.Fragment>
    )
}

export default Home;