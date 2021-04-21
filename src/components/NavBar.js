import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class NavBar extends React.Component {
  componentDidMount () {
    console.log("mounted");
    fetch(`${this.props.baseApi}/me`, {
        method: "GET",
        credentials: "include"
      }).then((response) => {
        if (response.ok) return response.json();
        else throw new Error(response.statusText); 
      }).then(console.log)
      .catch(() => {});
  }

  render () {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div id="navbarBasic" className="navbar-menu">
          <div className="navbar-start">
            <div className="navbar-item">
              <div className="buttons">
                <Link className="button is-light" to="/">Home</Link>
                <Link className="button is-light" to="/users">Users</Link>

                {/* When user is not logged in. */}
                {/*<Link className="button is-light" to="/signup">Sign Up</Link>
                <Link className="button is-primary" to="/login">Login</Link>*/}

                {/* When user is logged in. */}
                <Link className="button is-light" to="/user/edit">Edit Profile</Link>
                <Link className="button is-light" to="/logout">Logout</Link>
                <Link className="button is-primary" to="/users/me">Hello, MrAugu!</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  id: state.id,
  username: state.username,
  color: state.color,
  displayName: state.displayName,
  loggedIn: state.loggedIn,
  baseApi: state.baseApi
});
export default connect(mapStateToProps)(NavBar);
