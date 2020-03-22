import React from "react";
import "./App.css";
import "./App.sass";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { TopNav, LeftNav } from "./components";
import { Home, Clusters, Streams, OnCall } from "./pages";

export default function App() {
  return (
    <Router>
      <TopNav />
      <div className="container">
        <div className="columns">
          <div className="column is-3 ">
            <LeftNav />
          </div>
          <div className="column is-9">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/streams">
                <Streams />
              </Route>
              <Route path="/clusters">
                <Clusters />
              </Route>
              <Route path="/oncall">
                <OnCall />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}
