import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Imc from '../components/Imc'
import Login from '../components/Login'
import {Data} from '../components/Data'
import Footer from '../components/Footer'

import GuardRoute from "../components/GuardRoute";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <GuardRoute path="/imc" component={Imc} />
          <GuardRoute path="/data" component={Data} />
          <Route exact path="/" component={Login} />
        </Switch>
      </Router>
    <Footer/>
    </div>
  );
}

export default App;