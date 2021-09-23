import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import React from "react";
import Login from "./Login";
import PageError from "./PageError";
import RecoverPassword from "./RecoverPassword";

const Spg = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/recoverPassword" component={RecoverPassword}></Route>
          <Route path="/error" component={PageError}></Route>
          <Route path="/" component={Login}></Route>
        </Switch>
      </Router>
    </>
  )
}

export default Spg;
