import { register } from "../actions/authentication";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import React from "react";

class SignUp extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      username_input: "",
      password_input: "",
      rpassword_input: "",
      usernameWarning: "",
      passwordWarning: "",
      rpasswordWarning: "",
      linkToLogin: false
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
    else if (event.target.id === "rpname") this.setState(Object.assign(this.state, {
      rpassword_input: event.target.value
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

    console.log(this.state.rpassword_input, this.state.password_input);
    if (this.state.rpasswordWarning && this.state.rpassword_input && this.state.rpassword_input === this.state.password_input) {
      this.setState(Object.assign(this.state, { rpasswordWarning: "" }));
      const element = document.getElementById("rpname");
      element.classList.remove("is-danger");
    }

    if (event.target.id === "uname" && !this.state.username_input) this.warnInput("uname", "You must provide an username.");
    if (event.target.id === "pname" && !this.state.password_input) this.warnInput("pname", "You must provide a password.");
    if (event.target.id === "rpname" && !this.state.password_input) this.warnInput("rpname", "You must provide a password.");
    if (this.state.password_input && this.state.password_input !== this.state.rpassword_input) {
      this.warnInput("rpname", "The passwords do not match.");
      this.warnInput("pname", "The passwords do not match.");
    }
  };

  handleRegister = (event) => {
    const buttonEl = event.target;

    buttonEl.classList.add("is-loading");
    if (!this.state.username_input) this.warnInput("uname", "You must provide an username.");
    if (!this.state.password_input) this.warnInput("pname", "You must provide a password.");
    if (!this.state.rpassword_input)this.warnInput("rpname", "You must provide a password.");
    if (this.state.password_input !== this.state.rpassword_input) this.warnInput("rpname", "The passwords do not match.");

    const { dispatch } = this.props;
    register(this.state.username_input, this.state.password_input)(dispatch)
      .catch(() => {
        buttonEl.classList.remove("is-loading");
      })
      .then(() => {
        this.setState(Object.assign(this.state, {
          linkToLogin: true
        }));
      });
  }
  
  warnInput = (elementId, text) => {
    const element = document.getElementById(elementId);
    element.classList.add("is-danger");
    if (elementId === "uname") this.setState(Object.assign(this.state, { usernameWarning: text }));
    else if (elementId === "pname") this.setState(Object.assign(this.state, { passwordWarning: text }));
    else this.setState(Object.assign(this.state, { rpasswordWarning: text }));
  };

  render () {
    if (this.props.user.loggedIn) {
      return <Redirect to="/"></Redirect>
    }

    if (this.state.linkToLogin) {
        return <Redirect to="/login"></Redirect>
      }

    return (
      <div className="section">
        <div className="container">
          {this.props.message.message && (<div class="notification is-danger">
            <button class="delete"></button>
            { this.props.message.message }
          </div>)}
          <h1 className="title">Sign Up</h1>
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
          <div className="field">
            <label className="label">Repeat Password</label>
              <div className="control">
                <input className="input" id="rpname" type="password" placeholder="Password" onChange={this.handleChange}></input>
                {this.state.rpasswordWarning && (<p className="help is-danger">
                  { this.state.rpasswordWarning }
                </p>)}
              </div>
          </div>
          <div className="control">
            <button className="button is-link" onClick={this.handleRegister}>Sign Up</button>
          </div>
          <br></br><Link className="button is-ghost block" to="/login">Already have an account? Click here to login.</Link>
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

export default connect(mapStateToProps)(SignUp);
