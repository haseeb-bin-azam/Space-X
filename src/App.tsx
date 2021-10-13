import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LaunchListContainer } from "./components/LaunchList/LaunchListContainer";
import { LaunchInfoContainer } from "./components/LaunchInfo/LaunchProfileContainer";
import "./App.css";
import Logo from './image/logo.png';

function App() {
  return (
    <Router>
      <Switch>
          <div className="App">
          <img src={Logo} alt="logo" className="logo" />
            <Route exact path="/">
              <LaunchListContainer />
            </Route>
            <Route exact path="/launch/:id">
              <LaunchInfoContainer />
            </Route>
          </div>
      </Switch>
    </Router>
  );
}

export default App;
