import '../styles/Navegation.css';
import React from 'react';
import { useHistory } from 'react-router';
import FontAwesome from 'react-fontawesome';
import { Navbar, Nav, Container } from "react-bootstrap"
import Swal from 'sweetalert2';
const Navegation = () => { 
  const history = useHistory();
  const openModal = () => {
    Swal.fire({
      title: '¿Estas seguro que quieres cerrar sesión?',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: 'No',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      confirmButtonAttributes :{
        id: 'yesLogOut'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          history.push('/'),
          'Se cerro sesión correctamente'
        )
      }
    })
  }
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


 
  return(
  <Navbar bg="light" expand="lg" className='navegationPosition'>
    <Container>
      <Navbar.Brand onClick={goToHome} className='navBarBrand' id='brand'> <FontAwesome name='heartbeat' size='2x'> SGP </FontAwesome> </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav className="me-auto" >
          <Nav.Link onClick={goToHome} id="homeNav" className="linkNavBar borderBrand">Inicio</Nav.Link>
          <Nav.Link onClick={goToAddPatient} id="addPatientNav" className="linkNavBar">Agregar paciente</Nav.Link>
          <Nav.Link onClick={goToPatientsList} id="deletePatientNav" className="linkNavBar">Dar de baja paciente</Nav.Link>
          <Nav.Link onClick={goToWattingList} id="wattingListNav" className="linkNavBar" disabled>Ver lista de espera</Nav.Link>
          <Nav.Link onClick={goToHome} id="statisticsNav" className="linkNavBar" disabled>Ver estadisticas</Nav.Link>
        </Nav>
      </Navbar.Collapse>
     <Nav.Link id="logoutNav" className="logoutNavBar" onClick={openModal}>Cerrar sesión</Nav.Link>
    </Container>
  </Navbar>
  )
}

export default Navegation