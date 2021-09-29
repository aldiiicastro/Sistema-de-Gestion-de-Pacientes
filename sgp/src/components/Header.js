import {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Paciente from './Paciente';
import { PacientForm } from './PacientForm';

export class Header extends Component{

    

    render(){
        return (
                <Router>
                    
                    <Navbar bg="info" expand="lg">
                    <Container>
                        <Navbar.Brand href="/">SGP</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/ingreso-paciente">Ingreso Paciente</Nav.Link>
                            <Nav.Link href="/lista-pacientes">Pacientes</Nav.Link>
                            <Nav.Link href="/">Estadisticas</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                    </Navbar>

                    <Switch>
                        <Route path="/ingreso-paciente">
                            <PacientForm />
                        </Route>
                        <Route path="/lista-pacientes">
                            <Paciente />
                        </Route>
                    </Switch>
                </Router>
        );
    }

}

