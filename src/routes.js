import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./components/home/home";

const AppRouter = ({location}) => (
  <Router>
    <Switch>
      <Route path='/'>
        <Home location={location}/>
      </Route>
    </Switch>
  </Router>
);

export default AppRouter;
