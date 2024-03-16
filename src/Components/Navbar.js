import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  static propTypes = {}
  render() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">News-Monkey</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              <Link className="nav-link active" aria-current="page" to="/">About</Link>
              <Link className="nav-link" to="/business">business</Link>
              <Link className="nav-link" to="/entertainment">entertainment</Link>
              <Link className="nav-link" to="/health">health</Link>
              <Link className="nav-link" to="/science">science</Link>
              <Link className="nav-link" to="/sports">sports</Link>
              <Link className="nav-link" to="/technology">technology</Link>
            </div>
          
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar;