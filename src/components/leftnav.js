import React from "react";

import { Link } from "react-router-dom";

export function LeftNav() {
  return (
    <aside className="menu is-hidden-mobile">
      <p className="menu-label">General</p>
      <ul className="menu-list">
        <li>
          <Link className="is-active" to="/">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/clusters">Clusters</Link>
        </li>
        <li>
          <Link to="/streams">Streams</Link>
        </li>
        <li>
          <Link to="/oncall">On Call Runbooks</Link>
        </li>
      </ul>
      <p className="menu-label">Administration</p>
      <ul className="menu-list">
        <li>
          <a>Clusters</a>
        </li>
        <li>
          <ul>
            <li>
              <a>Add Cluster</a>
            </li>
            <li>
              <a>Add Topic</a>
            </li>
            <li>
              <a>Set Bootstrap Brokers</a>
            </li>
          </ul>
        </li>
        <li>
          <a>Streams</a>
        </li>
        <li>
          <ul>
            <li>
              <a>Close</a>
            </li>
            <li>
              <a>Clients</a>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  );
}
