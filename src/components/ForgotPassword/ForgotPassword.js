import React, { useState } from "react";
import "./forgotPassword.css";
import axios from "../../api/axios";

const ForgotPassword = () => {
  const FORGOT_URL = "/forgot-password";
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .get("http://localhost:8000/sanctum/csrf-cookie")
      .then((response) => {
        axios
          .post(FORGOT_URL, JSON.stringify({ email }), {
            headers: { "Content-Type": "application/json" },
          })
          .then((result) => {
            console.log(`result ${result}`);
          });
      });
  };
  return (
    <div className={"container"}>
      <div className={"forgot-form-container"}>
        <p className={"forgot-password-title"}>Reset Password</p>
        <div className={"forgot-password-container form-group"}>
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
            <div className={"button"}>
              <button className={"btn-forgot"} onClick={handleSubmit}>
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
