import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class NavBar extends React.Component {
  render () {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
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
                  <Link className="button is-light" to="/logout">Logout</Link>
                  <Link className="button is-primary" to="/users/me">Hello, { this.props.user.username }!</Link>
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
    user
  };
}

export default connect(mapStateToProps)(NavBar);
