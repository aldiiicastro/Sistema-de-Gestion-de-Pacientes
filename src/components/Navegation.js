import '../styles/Navegation.css';
import FontAwesome from 'react-fontawesome';
import { Navbar, Nav, Container } from "react-bootstrap"
const Navegation = () => { 
return(
  <Navbar bg="light" expand="lg" className='navegationPosition'>
    <Container>
      <Navbar.Brand href="/Home" className='navBarBrand'> <FontAwesome name='heartbeat' size='2x'> SGP </FontAwesome> </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav className="me-auto" >
          <Nav.Link href="/Home" className='linkNavBar borderBrand'>Inicio</Nav.Link>
          <Nav.Link href="/add-patient" className='linkNavBar'>Agregar paciente</Nav.Link>
          <Nav.Link href="#link" className='linkNavBar'>Dar de baja paciente</Nav.Link>
          <Nav.Link href="/watting-list" className='linkNavBar'>Ver lista de espera</Nav.Link>
          <Nav.Link href="#link" className='linkNavBar'>Ver estadisticas</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)
}

export default Navegation