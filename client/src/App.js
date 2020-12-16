import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from './NavTabs';
import Signup from './components/Signup';
import Login from './components/Login';
import Logout from './components/Logout';
import Home from './calculators/Home';
import Basic from './calculators/Basic';
import Savings from './calculators/Savings';
import Currency from './calculators/Currency';
import './app.scss';


function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path = '/' component={Home} />
        <Route exact path = '/login' component={Login}/>
        <Route exact path = '/logout' component={Logout}/>
        <Route exact path = '/signup' component={Signup}/>
        <Route exact path = '/basic' component={Basic} />
        <Route exact path = '/Financial/Savings' component={Savings} />
        <Route exact path = '/Currency' component={Currency} />
      </div>
    </Router>
  );
}

export default App;
