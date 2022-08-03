import React, { useState } from "react";
import "./reset-password.css";
import axios from "../../api/axios";
import { useParams } from "react-router-dom";

const ResetPassword = () => {
  const { token } = useParams("token");
  const RESET_URL = "/reset-password";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .get("http://localhost:8000/sanctum/csrf-cookie")
      .then((response) => {
        axios
          .post(
            RESET_URL,
            JSON.stringify({ email, password, password_confirmation, token }),
            {
              headers: { "Content-Type": "application/json" },
            }
          )
          .then((result) => {
            console.log(`result ${result}`);
          });
      });
  };
  return (
    <div className={"container"}>
      <div className={"reset-form-container"}>
        <p className={"reset-password-title"}>Reset Password</p>
        <div className={"reset-password-container form-group"}>
          <form>
            <div className={"email"}>
              <input
                type="text"
                id="email"
                className={"form-control"}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={"Email address"}
              />
            </div>
            <div className={"password"}>
              <input
                type="text"
                id="password"
                className={"form-control"}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={"New password"}
              />
            </div>
            <div className={"password-confirmation"}>
              <input
                type="text"
                id="password-confirmation"
                className={"form-control"}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                placeholder={"Password confirmation"}
              />
            </div>
            <div className={"button"}>
              <button className={"btn-reset"} onClick={handleSubmit}>
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
