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
import EntryGraph from './Graphs/EntryGraph';
import WaittingGraph from './Graphs/WaittingGraph';
import ConfirmedCasesGraph from './Graphs/ConfirmedCasesGraph';

const Spg = () => {

  return (
    <>
      <Router>
        <Switch>
          <Route path='/patient-edit' component={PatientEdit}/>
          <Route path='/patient-attending' component={PatientAttending}/>
          <Route path='/patient-list' component={PatientsList}/>
          <Route path='/post-add-patient' component={PatientFormPostTurn}/>
          <Route path='/stadistics/entryGraph' component={EntryGraph}/>
          <Route path='/stadistics/waittingGraph' component={WaittingGraph}/>
          <Route path='/stadistics/confirmedCases' component={ConfirmedCasesGraph}/>
          <Route path='/stadistics' component={Stadistics}/>
          <Route path='/attended-list' component={AttendedList}/>
          <Route path='/recoverPassword' component={RecoverPassword}/>
          <Route path='/Home' component={Home}/>
          <Route path='/finish-turn' render={() => (<PatientAttending isTherePatient={false} isFinish={true}/>)}/>
          <Route path='/start-turn'  render={() => (<PatientAttending isTherePatient={true} isFinish={false}/>)} />
          <Route path='/add-patient' component={PacientForm}/>
          <Route path='/watting-list' component={WattingList}/>
          <Route path='/search-list' component={SearchPatient}/>
          <Route path='/register' component={Register}/>
          <Route path='/' component={Login}/>
        </Switch>
      </Router>
    </>
  )
}

export default Spg;
