import React from "react";
import { useState } from "react";
import axios from "../../api/axios";
import Sections from "../sections/Sections";
import "./login.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Header from "../Header/Header";

const Login = ({ goToLogin, goToSignUp }) => {
  const LOGIN_URL = "/login";
  const TWO_FACTOR_AUTH_SEND_URL = "/two-factor-auth/store";
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.get("http://localhost:8000/sanctum/csrf-cookie").then(() => {
      axios
        .post(LOGIN_URL, JSON.stringify({ login, password }), {
          headers: { "Content-Type": "application/json" },
        })
        .then(async (response) => {
          if (response.status === 201) {
            history.push("/two-factor-auth/verification");
            await axios.get(TWO_FACTOR_AUTH_SEND_URL).then((response) => {
              console.log(response);
            });
          }
          //localStorage.setItem("user",JSON.stringify(response.data.user));
        });
    });
  };

  return (
    <div className={"container"}>
      <div className={"form-container"}>
        <Sections goToLogin={goToLogin} goToSignUp={goToSignUp} />
        <div className={"login-container form-group"}>
          <form>
            <div className={"login"}>
              <input
                type="text"
                id="login"
                className={"form-control"}
                onChange={(e) => setLogin(e.target.value)}
                placeholder={"Email or mobile phone"}
              />
            </div>
            <div className={"password"}>
              <input
                type="password"
                id="password"
                className={"form-control"}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={"Password"}
              />
            </div>
            <p className={"reset"}>
              <Link to="/forgot-password">
                <span>Reset my password</span>
              </Link>
            </p>
            <div className={"button"}>
              <button className={"btn-login"} onClick={handleSubmit}>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
