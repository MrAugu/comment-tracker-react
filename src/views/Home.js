import { Link } from "react-router-dom";
import React from "react";

class Home extends React.Component {
  render () {
    return (
      <div className="section">
        <div className="container">
          <h1 className="title">Comment Tracker</h1>
          <p className="subtitle block">A react app with a node.js backend (written using the fastify framework), project created by MrAugu#7917 &#60;<a href="mailto:mraugu@yahoo.com" className="is-link">mraugu@yahoo.com</a>&#62; in order to learn and work hands-on with these technologies.</p>
          <a className="button is-link block" href="https://github.com/MrAugu/comment-tracker-react">React App Source on GitHub</a>
          <a className="button is-info block" href="https://github.com/MrAugu/comment-tracker" style={{ marginLeft: "1em" }}>Backend Source on GitHub</a>
          <a className="button is-primary block" href="https://discord.gg/rk7cVyk" style={{ marginLeft: "1em" }}>Discord Server</a>
          <br></br><Link className="button is-ghost block" to="/login">Go to signup page</Link>
        </div>
      </div>
    );
  }
}

export default Home;
