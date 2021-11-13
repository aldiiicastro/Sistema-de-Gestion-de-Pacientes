import {
  BrowserRouter as Router,
  Route,
  Switch,
  HashRouter
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
          <Route exact path='/patient-edit' component={PatientEdit}/>
          <Route exact path='/patient-attending' component={PatientAttending}/>
          <Route exact path='/patient-list' component={PatientsList}/>
          <Route exact path='/post-add-patient' component={PatientFormPostTurn}/>
          <Route exact path='/stadistics/entryGraph' component={EntryGraph}/>
          <Route exact path='/stadistics/waittingGraph' component={WaittingGraph}/>
          <Route exact path='/stadistics/confirmedCases' component={ConfirmedCasesGraph}/>
          <Route exact path='/stadistics' component={Stadistics}/>
          <Route exact path='/attended-list' component={AttendedList}/>
          <Route exact path='/recoverPassword' component={RecoverPassword}/>
          <Route exact path='/Home' component={Home}/>
          <Route exact path='/finish-turn' render={() => (<PatientAttending isTherePatient={false} isFinish={true}/>)}/>
          <Route exact path='/start-turn'  render={() => (<PatientAttending isTherePatient={true} isFinish={false}/>)} />
          <Route exact path='/add-patient' component={PacientForm}/>
          <Route exact path='/watting-list' component={WattingList}/>
          <Route exact path='/search-list' component={SearchPatient}/>
          <Route exact path='/register' component={Register}/>
          <Route exact path='/' component={Login}/>
        </Switch>
      </Router>
    </>
  )
}

export default Spg;
