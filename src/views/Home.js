import React from "react";

class Home extends React.Component {
  render () {
    return (
      <div className="section">
        <div className="container">
          <h1 className="title">Comment Tracker</h1>
          <p className="subtitle block">A react app with a node.js backend written using the fastify framework created by MrAugu#7917 [mraugu@yahoo.com] in order to learn and work hands-on with these technologies.</p>
          <a className="button is-link block" href="https://github.com/MrAugu/comment-tracker-react">React App Source on GitHub</a>
          <a className="button is-info block" href="https://github.com/MrAugu/comment-tracker" style={{ marginLeft: "1em" }}>Backend Source on GitHub</a>
          <br></br><a className="button is-ghost block" href="/">Go to signup page</a>
        </div>
      </div>
    );
  }
}

export default Home;
