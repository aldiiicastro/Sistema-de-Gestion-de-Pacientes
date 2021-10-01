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
          <Route path="/Home" component={Home}></Route>
          <Route path="/add-patient" component={PacientForm}></Route>
          <Route path="/watting-list" component={Paciente}></Route>
          <Route path="/recoverPassword" component={RecoverPassword}></Route>
          <Route path="/error" component={PageError}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/" component={Login}></Route>
        </Switch>
      </Router>
    </>
  )
}

export default Spg;
