import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from './NavTabs';
import Signup from './components/Signup';
import Login from './components/Login';
import Logout from './components/Logout';
import Home from './calculators/Home';
import Basic from './calculators/Basic';
import Savings from './calculators/Savings';
import Budget from './calculators/Budget';
import Currency from './calculators/Currency';
import './app.scss';
import UserContext from "./utils/UserContext";
import Graph from "./calculators/Graph";


function App() {
  const [appState, setAppState] = useState({
    id: ''
  });

  const changeID = (id) => {
    return new Promise(resolve => {
      console.log('changing the ID');
      setAppState({
        ...appState,
        id
      });
      resolve()
    })
  }


  return (
    <UserContext.Provider value={appState}>
      <Router>
        <div className='app'>
          <NavTabs />
          <Route exact path = '/' component={Home} />
          <Route exact path = '/login' component={Login}/>
          <Route exact path = '/logout' component={Logout}/>
          <Route exact path = '/basic' component={Basic} />
          <Route exact path = '/Financial/Savings' component={Savings} />
          <Route exact path = '/Financial/Budget' component={Budget} />
          <Route exact path = '/Currency' component={Currency} />
          <Route exact path = "/signup" component={() => <Signup changeID={changeID} />} />
          <Route exact path = '/graph' component={Graph}/>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
