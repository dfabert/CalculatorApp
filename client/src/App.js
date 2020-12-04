import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from './NavTabs';
import Basic from './calculators/Basic';
import Savings from './calculators/Savings';
import './app.scss';


function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path = '/' component={Basic} />
        <Route exact path = '/basic' component={Basic} />
        <Route exact path = '/Financial/Savings' component={Savings} />
      </div>
    </Router>
  );
}

export default App;
