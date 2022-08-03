import React from "react";
import "./navbar.css";
import logo from "../../assets/img/logo.png";
import NavDropdown from "react-bootstrap/NavDropdown";
import shoppingCard from "../../assets/img/shopping-card.png";
const Navbar = () => {
  return (
    <header className={"py-5"}>
      <nav className={"navbar navbar-expand-md navbar-dark fixed-top"}>
        <div className="container">
          <a className="navbar-brand" href={"/"}>
            <img src={logo} alt="logo" className={"logo"} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="text-uppercase nav-link" href="/">
                  home
                </a>
              </li>
              <li className="nav-item">
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title="ORDER"
                  menuVariant="dark"
                >
                  <NavDropdown.Item>
                    <a href="/option1">design my own card</a>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <a href="/option2">Pre-made designs</a>
                  </NavDropdown.Item>
                </NavDropdown>
              </li>
              <li className="nav-item">
                <a className="nav-link text-uppercase" href="/faq">
                  faq
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link btn btn-primary text-uppercase"
                  href="/login"
                >
                  login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link btn btn-primary mx-2 lang-btn" href="#">
                  AR
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link btn btn-primary p-0 card-btn" href="#">
                  <img
                    src={shoppingCard}
                    alt="shopping-card"
                    className={"shopping-card"}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
