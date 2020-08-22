import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './App.css';
import { Switch, Route } from "react-router-dom";
import Authenticate from "./Authenticate"

function App() {
  return (
    <div className="App">
      <Switch>
          <Route path="/authenticate">
            <Authenticate/>
          </Route>
          <Route path="/sign-up"></Route>
          <Route exact path="/home"></Route>
          <Route path="/create-pin"></Route>
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
