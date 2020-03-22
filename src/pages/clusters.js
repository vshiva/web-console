import React from "react";
import { Link } from "react-router-dom";

export function Clusters() {
  return (
    <div>
      <nav className="breadcrumb" aria-label="breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="is-active">
            <a href="#" aria-current="page">
              Clusters
            </a>
          </li>
        </ul>
      </nav>

      <div className="card">
        <header className="card-header">
          <p className="card-header-title">Cluster Search</p>
          <a href="#" className="card-header-icon" aria-label="more options">
            <span className="icon">
              <i className="fa fa-angle-down" aria-hidden="true"></i>
            </span>
          </a>
        </header>
        <div className="card-content">
          <div className="content">
            <div className="control has-icons-left has-icons-right">
              <input className="input is-large" type="text" placeholder="" />
              <span className="icon is-medium is-left">
                <i className="fa fa-search"></i>
              </span>
              <span className="icon is-medium is-right">
                <i className="fa fa-check"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="card events-card">
        <header className="card-header">
          <p className="card-header-title">Clusters</p>
          <a href="#" className="card-header-icon" aria-label="more options">
            <span className="icon">
              <i className="fa fa-angle-down" aria-hidden="true"></i>
            </span>
          </a>
        </header>
        <div className="card-table">
          <div className="content">
            <table className="table is-fullwidth is-striped">
              <tbody>
                <tr>
                  <td width="5%">
                    <i className="fa fa-bell-o"></i>
                  </td>
                  <td>Lorum ipsum dolem aire</td>
                  <td className="level-right">
                    <a className="button is-small is-primary" href="#">
                      Action
                    </a>
                  </td>
                </tr>
                <tr>
                  <td width="5%">
                    <i className="fa fa-bell-o"></i>
                  </td>
                  <td>Lorum ipsum dolem aire</td>
                  <td className="level-right">
                    <a className="button is-small is-primary" href="#">
                      Action
                    </a>
                  </td>
                </tr>
                <tr>
                  <td width="5%">
                    <i className="fa fa-bell-o"></i>
                  </td>
                  <td>Lorum ipsum dolem aire</td>
                  <td className="level-right">
                    <a className="button is-small is-primary" href="#">
                      Action
                    </a>
                  </td>
                </tr>
                <tr>
                  <td width="5%">
                    <i className="fa fa-bell-o"></i>
                  </td>
                  <td>Lorum ipsum dolem aire</td>
                  <td className="level-right">
                    <a className="button is-small is-primary" href="#">
                      Action
                    </a>
                  </td>
                </tr>
                <tr>
                  <td width="5%">
                    <i className="fa fa-bell-o"></i>
                  </td>
                  <td>Lorum ipsum dolem aire</td>
                  <td className="level-right">
                    <a className="button is-small is-primary" href="#">
                      Action
                    </a>
                  </td>
                </tr>
                <tr>
                  <td width="5%">
                    <i className="fa fa-bell-o"></i>
                  </td>
                  <td>Lorum ipsum dolem aire</td>
                  <td className="level-right">
                    <a className="button is-small is-primary" href="#">
                      Action
                    </a>
                  </td>
                </tr>
                <tr>
                  <td width="5%">
                    <i className="fa fa-bell-o"></i>
                  </td>
                  <td>Lorum ipsum dolem aire</td>
                  <td className="level-right">
                    <a className="button is-small is-primary" href="#">
                      Action
                    </a>
                  </td>
                </tr>
                <tr>
                  <td width="5%">
                    <i className="fa fa-bell-o"></i>
                  </td>
                  <td>Lorum ipsum dolem aire</td>
                  <td className="level-right">
                    <a className="button is-small is-primary" href="#">
                      Action
                    </a>
                  </td>
                </tr>
                <tr>
                  <td width="5%">
                    <i className="fa fa-bell-o"></i>
                  </td>
                  <td>Lorum ipsum dolem aire</td>
                  <td className="level-right">
                    <a className="button is-small is-primary" href="#">
                      Action
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <footer className="card-footer"></footer>
      </div>
      <nav
        className="pagination is-rounded"
        role="navigation"
        aria-label="pagination"
      >
        <a className="pagination-previous">Previous</a>
        <a className="pagination-next">Next page</a>
        <ul className="pagination-list">
          <li>
            <a className="pagination-link" aria-label="Goto page 1">
              1
            </a>
          </li>
          <li>
            <span className="pagination-ellipsis">&hellip;</span>
          </li>
          <li>
            <a className="pagination-link" aria-label="Goto page 45">
              45
            </a>
          </li>
          <li>
            <a
              className="pagination-link is-current"
              aria-label="Page 46"
              aria-current="page"
            >
              46
            </a>
          </li>
          <li>
            <a className="pagination-link" aria-label="Goto page 47">
              47
            </a>
          </li>
          <li>
            <span className="pagination-ellipsis">&hellip;</span>
          </li>
          <li>
            <a className="pagination-link" aria-label="Goto page 86">
              86
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
