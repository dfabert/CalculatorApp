import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from './NavTabs';
import Basic from './calculators/Basic';
import Savings from './calculators/Savings';
import Currency from './calculators/Currency';
import './app.scss';


function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path = '/' component={Basic} />
        <Route exact path = '/basic' component={Basic} />
        <Route exact path = '/Financial/Savings' component={Savings} />
        <Route exact path = '/Currency' component={Currency} />
      </div>
    </Router>
  );
}

export default App;
