import React from "react";

import { Link } from "react-router-dom";

export function TopNav() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img src="/logo.png" width="112" height="28" />
          </Link>
          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navMenu" className="navbar-menu">
          <div className="navbar-start">
            <Link className="navbar-item" to="/">
              Home
            </Link>
            <Link className="navbar-item" to="/streams">
              Streams
            </Link>
            <Link className="navbar-item" to="/clusters">
              Clusters
            </Link>
            <Link className="navbar-item" to="/oncall">
              On-Call Runbooks
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
