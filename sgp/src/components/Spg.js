import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import React from "react";
import Login from "./Login";
import PageError from "./PageError";
import RecoverPassword from "./RecoverPassword";
import Register from './Register'
import Home from "./Home";
//import { Header } from "./Header";
import Paciente from "./Paciente";
import { PacientForm } from "./PacientForm";

const Spg = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/ingreso-paciente" component={PacientForm}/>
          <Route path="/lista-pacientes" component={Paciente}/>
          <Route path="/recoverPassword" component={RecoverPassword}/>
          <Route path="/error" component={PageError}/>
          <Route path="/register" component={Register}/>
          <Route path="/home" component={Home}/>
          <Route path="/" component={Login}/>
        </Switch>
      </Router>
    </>
  )
}

export default Spg;
