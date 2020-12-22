import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavTabs from './NavTabs';
import Signup from './components/Signup';
import Login from './components/Login';
import Logout from './components/Logout';
import Home from './calculators/Home';
import Basic from './calculators/Basic';
import Savings from './calculators/Savings';
import Budget from './calculators/Budget';
import Currency from './calculators/Currency';
import Random from './calculators/Random';
import './app.scss';
import Graph from "./calculators/Graph";
import Footer from "./components/Footer";


function App() {

  let id = localStorage.getItem('user');

  if(id === null){
    localStorage.setItem('user', 'default');
  }

  return (
      <Router>
        <div className='app'>
          <NavTabs />
          <Switch>
          <Route exact path = '/' component={Home} />
          <Route exact path = '/login' component={Login} />
          <Route exact path = '/logout' component={Logout} />
          <Route exact path = '/basic' component={Basic} />
          <Route exact path = '/Savings' component={Savings} />
          <Route exact path = '/Currency' component={Currency} />
          <Route exact path = "/signup" component={Signup} />
          <Route exact path = '/graph' component={Graph}/>
          <Route exact path = '/Random' component={Random} />
          </Switch>
          <Footer />
        </div>
        
      </Router>
  );
}

export default App;
