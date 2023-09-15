import Nav from "./Nav";
import Home from "./Home";
import { Router, Switch, Route } from "react-router-dom";
import Register from "./auth/Register";
import Login from "./auth/Login";
import "./styles.css";
import { useState, useEffect } from "react";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const initialState = {
    firstName: "s",
    lastName: "s",
    email: "s",
    number: "s",
    gender: "s"
  };
  const [data, setData] = useState(initialState);
  useEffect(() => {
    checkLog();
  }, []);

  function checkLog() {
    if (JSON.parse(localStorage.getItem("isLoggedIn")) === true) {
      setIsLoggedIn(true);
    }

    if (!isLoggedIn) history.push("/login");
  }

  return (
    <Router history={history}>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/login">
            <Login checkLog={checkLog} />
          </Route>
          <Route exact path="/register">
            <Register checkLog={checkLog} />
          </Route>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}
