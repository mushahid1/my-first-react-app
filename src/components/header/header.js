import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.svg";

export default class Header extends React.Component {
  render() {
    return (
      <section className="_nav">
        <nav className="navbar navbar-expand-lg sticky navbar-light">
          <div className="container">
            <a className="navbar-brand" to="/">
              <img src={logo} alt="logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto align-items-md-center">
                <li className="nav-item">
                  <Link to={'users'} className="nav-link">About</Link>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">Market</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">My positions</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">Documentation</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">FAQ</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    );
  }
}
