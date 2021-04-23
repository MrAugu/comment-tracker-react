import { Link, Redirect } from "react-router-dom";
import { login } from "../actions/authentication";
import { fetchMyself } from "../actions/user";
import { connect } from "react-redux";
import React from "react";

class Login extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      username_input: "",
      password_input: "",
      usernameWarning: "",
      passwordWarning: ""
    };
  };

  handleChange = (event) => {
    event.preventDefault();

    if (event.target.id === "uname") this.setState(Object.assign(this.state, {
      username_input: event.target.value 
    }));
    else if (event.target.id === "pname") this.setState(Object.assign(this.state, {
        password_input: event.target.value
    }));

    if (this.state.usernameWarning && this.state.username_input) {
      this.setState(Object.assign(this.state, { usernameWarning: "" }));
      const element = document.getElementById("uname");
      element.classList.remove("is-danger");
    };

    if (this.state.passwordWarning && this.state.password_input) {
      this.setState(Object.assign(this.state, { passwordWarning: "" }));
      const element = document.getElementById("pname");
      element.classList.remove("is-danger");
    }

    if (event.target.id === "uname" && !this.state.username_input) this.warnInput("uname", "You must provide an username.");
    if (event.target.id === "pname" && !this.state.password_input) this.warnInput("pname", "You must provide a password.");
  };

  handleLogin = (event) => {
    const buttonEl = event.target;

    buttonEl.classList.add("is-loading");
    if (!this.state.username_input) this.warnInput("uname", "You must provide an username.");
    if (!this.state.password_input) this.warnInput("pname", "You must provide a password.");

    const { dispatch } = this.props;
    login(this.state.username_input, this.state.password_input)(dispatch)
      .catch(() => {
        buttonEl.classList.remove("is-loading");
      })
      .then(() => {
        fetchMyself()(dispatch);
      });
  }
  
  warnInput = (elementId, text) => {
    const element = document.getElementById(elementId);
    element.classList.add("is-danger");
    if (elementId === "uname") this.setState(Object.assign(this.state, { usernameWarning: text }));
    else this.setState(Object.assign(this.state, { passwordWarning: text }));
  };

  render () {
    if (this.props.user.loggedIn) {
      return <Redirect to="/"></Redirect>
    }

    return (
      <div className="section">
        <div className="container">
          {this.props.message.message && (<div class="notification is-danger">
            <button class="delete"></button>
            { this.props.message.message }
          </div>)}
          <h1 className="title">Login</h1>
          <div className="field">
            <label className="label">Username</label>
              <div className="control">
                <input className="input" id="uname" type="text" placeholder="Usermame" onChange={this.handleChange}></input>
                {this.state.usernameWarning && (<p className="help is-danger">
                  { this.state.usernameWarning }
                </p>)}
              </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
              <div className="control">
                <input className="input" id="pname" type="password" placeholder="Password" onChange={this.handleChange}></input>
                {this.state.passwordWarning && (<p className="help is-danger">
                  { this.state.passwordWarning }
                </p>)}
              </div>
          </div>
          <div className="control">
            <button className="button is-link" onClick={this.handleLogin}>Log In</button>
          </div>
          <br></br><Link className="button is-ghost block" to="/signup">Don't have an account? Click here to sign up.</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const user = state.authentication;
  const message = state.message;
  return {
    user,
    message
  };
}

export default connect(mapStateToProps)(Login);
