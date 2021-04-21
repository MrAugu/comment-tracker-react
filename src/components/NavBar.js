import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  render () {
    return (
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div id="navbarBasic" class="navbar-menu">
          <div class="navbar-start">
            <Link className="navbar-item" to="/">Home</Link>
            <Link className="navbar-item" to="/users">Users</Link>

            <div className="navbar-end">
            <div className="navbar-item"> {/* When user is not logged in. */} 
              <div className="buttons">
                  <Link className="button is-primary" to="/signup">Sign Up</Link>
                  <Link className="button is-light" to="/login">Login</Link>
                </div>
              </div> {/* When user is logged in. */} 
              <Link className="navbar-item" to="/users/me">Logged in as MrAugu</Link>
              <div className="buttons">
                <Link className="button is-primary" to="/user/edit">Edit Me</Link>
                <Link className="button is-light" to="/logout">Logout</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
