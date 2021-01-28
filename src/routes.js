import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./components/home/home";

const AppRouter = ({places}) => (
  <Router>
    <Switch>
      <Route path='/'>
        <Home places={places}/>
      </Route>
    </Switch>
  </Router>
);

export default AppRouter;
