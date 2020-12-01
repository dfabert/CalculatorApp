import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path = '/' component={Login} />
        <Route exact path = '/basic' component={Basic} />
        <Route exact path = '/Financial/Savings' component={Savings} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
