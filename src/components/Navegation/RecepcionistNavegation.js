import '../../styles/Navegation.css';
import React from 'react';
import { useHistory } from 'react-router';
import FontAwesome from 'react-fontawesome';
import { Navbar, Nav, Container } from "react-bootstrap"
import {NavLink} from 'react-router-dom'
import Swal from 'sweetalert2';
const NavegationRecepcionista = () => { 
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
          <NavLink to='/Home' id='homeNav' activeClassName="active" className='linkNavBar borderBrand'>Inicio</NavLink>
          <NavLink to='/add-patient' id='addPatientNav' activeClassName="active" className='linkNavBar'>Agregar paciente</NavLink>
          <NavLink to='/patient-list' id='deletePatientNav' activeClassName="active" className='linkNavBar'>Dar de baja paciente</NavLink>
          <NavLink to='/stadistics' id='statisticsNav' activeClassName="active" className='linkNavBar'>Ver estadisticas</NavLink>
        </Nav>
        <NavLink id="logoutNav" className="logoutNavBar" onClick={openModal}>Cerrar sesión</NavLink>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavegationRecepcionista