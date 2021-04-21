import React from "react";
import { Link } from "react-router-dom";

class Login extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      username_input: "",
      password_input: ""
    };
  };

  handleChange = (event) => {
    if (event.target.id === "uname") this.setState({ username_input: event.target.value, password_input: this.state.password_input });
    else if (event.target.id === "pname") this.setState({ username_input: this.state.username_input, password_input: event.target.value });
    else throw new Error("Unrecognized event target.");
  };

  login = () => {
    
  };

  render () {
    return (
      <div className="section">
        <div className="container">
          <h1 className="title">Login</h1>
          <div className="field">
            <label className="label">Username</label>
              <div className="control">
                <input className="input" id="uname" type="text" placeholder="Usermame" onChange={this.handleChange}></input>
              </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
              <div className="control">
                <input className="input" id="pname" type="password" placeholder="Password" onChange={this.handleChange}></input>
              </div>
          </div>
          <div className="control">
            <button className="button is-link" onClick={this.login}>Log In</button>
          </div>
          <br></br><Link className="button is-ghost block" to="/signup">Don't have an account? Click here to sign up.</Link>
        </div>
      </div>
    );
  }
}

export default Login;
