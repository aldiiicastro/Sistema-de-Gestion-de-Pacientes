import '../styles/Home.css';
import React, { useEffect, useState } from 'react'
import NavegationDoctor from './NavegationDoctor';
import NavegationRecepcionista from './NavegationRecepcionista';
import HomeRecepcionist from './HomeRecepcionist';
import WattingList from './WattingList';
import { getLoggedUser } from '../routes/apiCallsUser'
import TutorialDoctor from './TutorialDoctor';
import TutorialRecepcionista from './TutorialRecepcionista';
import HomeDoctor from './HomeDoctor';

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
                    <TutorialDoctor
                    nombre={userLogged.name}
                    show= {userLogged.firstLog}
                    id={userLogged._id}/>
                    <HomeDoctor/>
                </>
                :
                <>
                    <NavegationRecepcionista/>
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