import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

class Nav extends React.Component {
  render() {
    // console.log(this.state);
    return (
      <div>
        <nav className="navbar navbar-light">
          <Link to="/" className="nav-item nav-link">Home</Link>
          <Link to="search" className="nav-item nav-link">Search</Link>
        </nav>
      </div>
    )
  }
}

export default Nav = connect(null, null)(Nav);