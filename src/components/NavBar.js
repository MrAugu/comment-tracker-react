import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions/authentication";

class NavBar extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      hasLoggedOut: false
    };
  }
  handleLogout = () => {
    const { dispatch } = this.props;
    logout()(dispatch);
    this.setState({
      hasLoggedOut: true
    });
  }

  render () {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        {this.state.hasLoggedOut && (<Redirect to="/"></Redirect>)}
        <div id="navbarBasic" className="navbar-menu">
          <div className="navbar-start">
            <div className="navbar-item">
              <div className="buttons">
                <Link className="button is-light" to="/">Home</Link>
                <Link className="button is-light" to="/users">Users</Link>

                {!this.props.user.loggedIn && (<span>
                  <Link className="button is-light" to="/signup">Sign Up</Link>
                  <Link className="button is-primary" to="/login">Login</Link>
                </span>)}

                {this.props.user.loggedIn && (<span>
                  <Link className="button is-light" to="/user/edit">Edit Profile</Link>
                  <Link className="button is-light" to="#" onClick={this.handleLogout}>Logout</Link>
                  <Link className="button is-primary" to="/users/me">Hello, { this.props.username }!</Link>
                </span>)}
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  const user = state.authentication;
  return {
    ...user.user,
    user
  };
}

export default connect(mapStateToProps)(NavBar);
