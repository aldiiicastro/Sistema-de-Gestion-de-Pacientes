import '../styles/Home.css';
import React, { useEffect, useState } from 'react'

import Navegation from './Navegation';

import HomeRecepcionist from './HomeRecepcionist';
import HomeDoctor from './HomeDoctor';
import { getLoggedUser } from '../routes/apiCallsUser'

const Home = () => {

    const [userLogged, setUserLogged] = useState(Object);
    useEffect(() => { 
        getLoggedUser().then(data => setUserLogged(data.data))
    });

    return(
        <React.Fragment>

            {/*La barra de navegacion, se encuentra en otro componente*/}
            <Navegation/>

            {/*El fondo de la pagina*/}
            <div className='welcome'>
                <p>{userLogged.name} : Bienvenidos al Sistema de Gestión de Pacientes</p>
            </div>
            {/* Botones, te llevan a las paginas que dice */}
            { 
            userLogged.doctor ? 
                <HomeDoctor/>
                :
                <HomeRecepcionist/>
            }
        </React.Fragment>
    )
}

export default Home;