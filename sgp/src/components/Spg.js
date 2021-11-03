import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import React from 'react';
import Login from './Session/Login';
import Register from './Session/Register'
import RecoverPassword from './Session/RecoverPassword';
import Home from './Home/Home';
import { PacientForm } from './Patient/PacientForm';
import PatientsList from './List/PatientsList';
import AttendedList from './List/AttendedList';
import WattingList from './List/WattingList';
import PatientFormPostTurn from './Patient/PatientFormPostTurn';
import PatientEdit from './Patient/PatientEdit';
import SearchPatient from './List/SearchPatientList';
import PatientAttending from './Patient/PatientAttending';
import Stadistics from './Graphs/Stadistics';

const Spg = () => {

  return (
    <>
      <Router>
        <Switch>
          <Route path='/patient-edit' component={PatientEdit}></Route>
          <Route path='/patient-attending' component={PatientAttending}></Route>
          <Route path='/patient-list' component={PatientsList}></Route>
          <Route path='/post-add-patient' component={PatientFormPostTurn}></Route>
          <Route path='/stadistics' component={Stadistics}></Route>
          <Route path='/attended-list' component={AttendedList}></Route>
          <Route path='/recoverPassword' component={RecoverPassword}></Route>
          <Route path='/Home' component={Home}></Route>
          <Route path='/finish-turn' render={() => (<PatientAttending isTherePatient={false} isFinish={true}/>)}/>
          <Route path='/start-turn'  render={() => (<PatientAttending isTherePatient={true} isFinish={false}/>)} />
          <Route path='/add-patient' component={PacientForm}></Route>
          <Route path='/watting-list' component={WattingList}></Route>
          <Route path='/search-list' component={SearchPatient}></Route>
          <Route path='/register' component={Register}></Route>
          <Route path='/' component={Login}></Route>
        </Switch>
      </Router>
    </>
  )
}

export default Spg;
