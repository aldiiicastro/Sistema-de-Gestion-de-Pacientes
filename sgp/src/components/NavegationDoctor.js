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
          'Se cerro sesión correctamente',
          localStorage.removeItem('id')
        )
      }
    })
  }
 
  return(
  <Navbar bg="light" expand="lg" className='navegationPosition'>
    <Container>
      <Navbar.Brand href="/Home" className='navBarBrand' id='brand'> <FontAwesome name='heartbeat' size='2x'> SGP </FontAwesome> </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav className="me-auto" >
          <Nav.Link href="/Home" id="homeNav" className="linkNavBar borderBrand">Inicio</Nav.Link>
          <Nav.Link href="/Home" id="wattingListNav" className="linkNavBar">Ver lista de espera</Nav.Link>
          <Nav.Link href="/start-turn" id="startTurnNav" className="linkNavBar">Comenzar turno</Nav.Link>
          <Nav.Link href="/attended-list" id="attendedNav" className="linkNavBar">Ver pacientes atendidos</Nav.Link>
        </Nav>
        <Nav.Link id="logoutNav" className="logoutNavBar" onClick={openModal}>Cerrar sesión</Nav.Link>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navegation