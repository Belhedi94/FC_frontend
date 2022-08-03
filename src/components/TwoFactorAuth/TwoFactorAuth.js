import React, { useState } from "react";
import "./twofactorauth.css";
import axios from "../../api/axios";

const TwoFactorAuth = () => {
  const VERIFICATION_URL = "/two-factor-auth/verify";
  const [code, setCode] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(VERIFICATION_URL, JSON.stringify({ code }), {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(JSON.stringify(response));
      });
  };
  return (
    <div className={"container"}>
      <div className={"two-factor-form-container"}>
        <p className={"two-factor-title"}>Verify your phone</p>
        <div className={"two-factor-container form-group"}>
          <form>
            <div className={"code"}>
              <input
                type="text"
                id="code"
                className={"form-control"}
                onChange={(e) => setCode(e.target.value)}
                placeholder={"Verification code"}
              />
            </div>
            <div className={"button"}>
              <button className={"btn-verify"} onClick={handleSubmit}>
                Verify
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TwoFactorAuth;
