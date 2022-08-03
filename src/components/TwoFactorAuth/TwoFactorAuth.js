import React, {useState} from 'react';
import './twofactorauth.css';
import axios from "../../api/axios";

const TwoFactorAuth = () => {
    const VERIFICATION_URL = '/two-factor-auth/verification';
    const [verificationCode, setVerificationCode] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault()
            await axios.post(VERIFICATION_URL,
                JSON.stringify({ verificationCode }),
                {
                    headers: { 'Content-Type': 'application/json'}
                }

            ).then(response => {
                console.log(`result ${response}`);
            });

    }
    return (
        <div className={"container"}>
            <div className={"2fa-form-container"}>
                <p className={"2fa-title"}>
                    Verify your phone
                </p>
                <div className={"2fa-container form-group"}>
                    <form>
                        <div className={"code"}>
                            <input type="text" id="code" className={"form-control"}
                                   onChange={(e) => setVerificationCode(e.target.value)} placeholder={"Verification code"}/>
                        </div>
                        <div className={"button"}>
                            <button className={"btn-grad"} onClick={handleSubmit}>Verify</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )

};

export default TwoFactorAuth;
