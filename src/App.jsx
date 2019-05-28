import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Homepage from "./components/Homepage";
import Events from "./components/Events";
import Event from "./components/Event";
import Attendees from "./components/Attendees";
import Register from "./components/Register";
import Login from "./components/Login";
//TODO Web Template Studio: Add routes for your new pages here.
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          < Redirect exact path = "/" to = "/Homepage" />
          < Route path = "/Homepage" component = { Homepage } />
          < Route path = "/Events" component = { Events } />
          < Route path = "/Event" component = { Event } />
          < Route path = "/Attendees" component = { Attendees } />
          < Route path = "/Register" component = { Register } />
          < Route path = "/Login" component = { Login } />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
