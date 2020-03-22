import React from "react";
import { Link } from "react-router-dom";
export function Home() {
  return (
    <div>
      <nav className="breadcrumb" aria-label="breadcrumbs">
        <ul>
          <li className="is-active">
            <a href="#" aria-current="page">
              Dashbaord
            </a>
          </li>
        </ul>
      </nav>

      <section className="hero is-info welcome is-medium">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Hello, <i>Zamboni</i>
            </h1>
            <h2 className="subtitle">I hope you are rocking!</h2>
          </div>
        </div>
      </section>

      <section className="info-tiles">
        <div className="tile is-ancestor has-text-centered">
          <div className="tile is-parent">
            <article className="tile is-child box">
              <Link to="/clusters">
                <div className="container">
                  <p className="title">3</p>
                  <p className="subtitle">Clusters</p>
                </div>
              </Link>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child box">
              <div className="container">
                <p className="title">100</p>
                <p className="subtitle">Topics</p>
              </div>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child box">
              <Link to="/streams">
                <div className="container">
                  <p className="title">3.2k</p>
                  <p className="subtitle">Streams</p>
                </div>
              </Link>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child box">
              <p className="title">19</p>
              <p className="subtitle">Connections</p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
