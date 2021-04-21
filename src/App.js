import React from "react";
import './App.css';
import NavBar from "./components/NavBar";
import Home from "./views/Home";
import Login from "./views/Login";
import Signup from "./views/Signup";
import User from "./views/User";
import Users from "./views/Users";
import UserEdit from "./views/UserEdit";
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
