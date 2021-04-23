import NavBar from "./components/NavBar";
import UserEdit from "./views/UserEdit";
import Signup from "./views/Signup";
import Login from "./views/Login";
import Users from "./views/Users";
import Home from "./views/Home";
import User from "./views/User";
import React from "react";
import './App.css';

import {
  BrowserRouter as Router,
  Switch, Route
} from "react-router-dom";

class App extends React.Component {
  render () {
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/user" component={User} />
          <Route path="/users" component={Users} />
          <Route path="/user/edit" component={UserEdit} exact={true} />
        </Switch>
      </Router>
    );
  }
}

export default App;
