import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./components/home/home";

const AppRouter = ({shops, latNLng}) => (
  <Router>
    <Switch>
      <Route path='/'>
        <Home latNLng={latNLng} shops={shops}/>
      </Route>
    </Switch>
  </Router>
);

export default AppRouter;
