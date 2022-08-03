import React from "react";
import "./header.css";
import { logo } from "../../public/logos";

const Header = () => {
  return (
    <div>
      <div className={"header-container"}>
        <div className={"header-logo"}>
          <img src={logo} alt="logo" />
        </div>
        <div className={"navbar"}></div>
      </div>
    </div>
  );
};

export default Header;
