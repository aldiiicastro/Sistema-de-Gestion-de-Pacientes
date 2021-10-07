import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import React from "react";
import Login from "./Login";
import PageError from "./PageError";
import RecoverPassword from "./RecoverPassword";
import RestabContraseña from "./RestabContraseña";

import Register from './Register'
import Home from "./Home";
//import { Header } from "./Header";
import Paciente from "./Paciente";
import { PacientForm } from "./PacientForm";
import PatientsList from './PatientsList';
import AttendedList from "./AttendedList";
import WattingList from "./WattingList";
import PatientFormPostTurn from "./PatientFormPostTurn";


const Spg = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/patient-list" component={PatientsList}></Route>
          <Route path="/post-add-patient" component={PatientFormPostTurn}></Route>
          <Route path="/attended-list" component={AttendedList}></Route>
          <Route path="/restabContraseña" component={RestabContraseña}></Route>
          <Route path="/recoverPassword" component={RecoverPassword}></Route>
          <Route path="/Home" component={Home}></Route>
          <Route path="/add-patient" component={PacientForm}></Route>
          <Route path="/watting-list" component={WattingList}></Route>
          <Route path="/error" component={PageError}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/" component={Login}></Route>
        </Switch>
      </Router>
    </>
  )
}

export default Spg;
