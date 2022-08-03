import React from "react";
import { useState } from "react";
import "./register.css";
import { useHistory } from "react-router-dom";
import axios from "../../api/axios";
import Sections from "../sections/Sections";
import { Link } from "react-router-dom";

const Register = ({ goToLogin, goToSignUp }) => {
  const REGISTER_URL = "/register";
  const TWO_FACTOR_AUTH_SEND_URL = "/two-factor-auth/store";
  const verificationType = "account";
  const history = useHistory();
  const [full_name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile_number, setMobilePhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .get("http://localhost:8000/sanctum/csrf-cookie")
      .then((response) => {
        axios
          .post(
            REGISTER_URL,
            JSON.stringify({ full_name, email, password, mobile_number }),
            {
              headers: { "Content-Type": "application/json" },
            }
          )
          .then(async (response) => {
            if (response.status === 201) {
              history.push(`/two-factor-auth/verification/${verificationType}`);
              await axios.get(TWO_FACTOR_AUTH_SEND_URL).then((response) => {});
            }
            //localStorage.setItem("user",JSON.stringify(response.data.user));
          });
      });
  };

  return (
    <div className={"container"}>
      <div className={"register-container"}>
        <Sections goToLogin={goToLogin} goToSignUp={goToSignUp} />
        <div className={"login-container form-group"}>
          <form>
            <div className={"fullname"}>
              <input
                type="text"
                id="fullname"
                className={"form-control"}
                onChange={(e) => setFullName(e.target.value)}
                placeholder={"Full name"}
              />
            </div>
            <div className={"email"}>
              <input
                type="text"
                id="email"
                className={"form-control"}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={"Email"}
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
            <div className={"mobile-number"}>
              <input
                type="text"
                id="mobileNumber"
                className={"form-control"}
                onChange={(e) => setMobilePhone(e.target.value)}
                placeholder={"Mobile number"}
              />
            </div>

            <div className={"button"}>
              <button className={"btn-register"} onClick={handleSubmit}>
                Sign up
              </button>
            </div>
            <p className={"terms"}>
              By pressing "submit" you agree to our <br />
              <Link to={"/terms"}>
                <span>terms & conditions</span>
              </Link>
              .
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
