import React from "react";
import icon from "./icon.png";
import { HashRouter, Link } from "react-router-dom";

function Header(props) {
  return (
    <HashRouter>
      <nav
        className="navbar navbar-expand-lg navbar-light "
        style={{ backgroundColor: "#041f20" }}
      >
        <div className="container-fluid">
          <img
            className=" rounded float-left img-responsive img-fluid"
            height="50px"
            width="50px"
            src={icon}
            alt="new   "
          />
          <Link className="navbar-brand text-white" to="/">
            {props.title}
          </Link>
          <div></div>
          <button
            style={{ backgroundColor: "lightblue" }}
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/about">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </HashRouter>
  );
}

export default Header;
