import React from "react";
import "./App.css";
import Navbar from "./pages/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/home" component={Home} />
        <Route path="/register" component={Register} />
      </Switch>
    </>
  );
}

export default App;
