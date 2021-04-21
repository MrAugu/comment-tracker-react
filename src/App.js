import React from "react";
import './App.css';
import NavBar from "./components/NavBar";
import Home from "./views/Home";
import Login from "./views/Login";
import Signup from "./views/Signup";
import User from "./views/User";
import UserEdit from "./views/UserEdit";
import {
  BrowserRouter as Router,
  Switch, Route
} from "react-router-dom";

class App extends React.Component {
  render () {
    return (
      <Router>
        <Switch>
          <NavBar />
          <Route path="/" component={Home} exact={true} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/user" component={User} />
          <Route path="/user/edit" component={UserEdit} />
        </Switch>
      </Router>
    );
  }
}

export default App;
