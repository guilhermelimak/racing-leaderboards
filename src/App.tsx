import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Login } from "./pages/Login";
import { Leaderboards } from "./pages/Leaderboards";

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/">
          <Leaderboards />
        </Route>
      </Switch>
    </Router>
  );
};
