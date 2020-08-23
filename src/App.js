import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './App.css';
import { Switch, Route } from "react-router-dom";
import Authenticate from "./Authenticate"
import SignUp from "./SignUp"
import Home from "./Home"

function App() {
  return (
    <div className="App">
      <Switch>
          <Route path="/authenticate">
            <Authenticate/>
          </Route>
          <Route path="/sign-up">
            <SignUp/>
          </Route>
          <Route exact path="/home/:modal">
            <Home/>
          </Route>
          <Route path="/balance"></Route>
          <Route path="/"></Route>
          <Route path="/"></Route>
          <Route path="/"></Route>
          <Route path="/"></Route>
          <Route path="/"></Route>
          <Route path="/"></Route>
      </Switch>
    </div>
  );
}

export default App;
