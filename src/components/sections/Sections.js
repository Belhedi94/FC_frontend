import React from "react";
import "./sections..css";

const Sections = ({ goToLogin, goToSignUp }) => {
  return (
    <div className={"sections"}>
      <p className={"login-link"} onClick={goToLogin}>
        Login
      </p>
      <p className={"signup-link"} onClick={goToSignUp}>
        Sign up
      </p>
    </div>
  );
};

export default Sections;
