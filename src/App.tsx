import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { Login } from "./pages/Login";
import { Leaderboards } from "./pages/Leaderboards";
import firebase, { User } from "firebase";

export const App = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/login">
          {user ? <Redirect to={{ pathname: "/" }} /> : <Login />}
        </Route>

        <Route path="/">
          {user ? <Leaderboards /> : <Redirect to={{ pathname: "/login" }} />}
        </Route>
      </Switch>
    </Router>
  );
};
