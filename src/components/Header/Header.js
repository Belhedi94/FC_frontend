import React from "react";
import "./header.css";
import logo from "../../assets/img/logo.png";
import shoppingCard from "../../assets/img/shopping-card.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
// import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  return (
    <div className={"header-container"}>
      <div className={"header-logo"}>
        <img src={logo} alt="logo" className={"logo"} />
      </div>
      <div className={"navbar"}>
        <div className={"home-link"}>
          <Link to={"/"}>HOME</Link>
        </div>
        <div className={"order"}>
          {/*<NavDropdown*/}
          {/*  id="nav-dropdown-dark-example"*/}
          {/*  title="ORDER"*/}
          {/*  menuVariant="dark"*/}
          {/*>*/}
          {/*  <NavDropdown.Item>*/}
          {/*    <Link to={"/option1"}>Design my own card</Link>*/}
          {/*  </NavDropdown.Item>*/}
          {/*  <NavDropdown.Item>*/}
          {/*    <Link to={"/option2"}>Pre-made designs</Link>*/}
          {/*  </NavDropdown.Item>*/}
          {/*</NavDropdown>*/}
        </div>

        <div>
          <Link to={"/faq"}>FAQ</Link>
        </div>
        <div>
          <Link to={"/login"}>
            <button className={"btn-grad"}>LOGIN</button>
          </Link>
        </div>
        <button className={"language-button"}>AR</button>
        <div className={"shopping-card-button"}>
          <img
            src={shoppingCard}
            alt="shopping card"
            className={"shopping-card-img"}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
