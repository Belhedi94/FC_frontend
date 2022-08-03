import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./index.css";
import App from "./App";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import TwoFactorAuth from "./components/TwoFactorAuth/TwoFactorAuth";
import VerificationAccount from "./components/Verification Account/VerificationAccount";
import HomePage from "./components/home/HomePage";
import Header from "./components/Header/Header";
import DesignCard from "./components/Design card/DesignCard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/*<Router>*/}
    {/*  <Switch>*/}
    {/*    <Route exact path={"/"}>*/}
    {/*      <App />*/}
    {/*    </Route>*/}
    {/*    <Route path={"/login"}>*/}
    {/*      <Header />*/}
    {/*      <HomePage />*/}
    {/*    </Route>*/}
    {/*    <Route path={"/forgot-password"}>*/}
    {/*      <Header />*/}
    {/*      <ForgotPassword />*/}
    {/*    </Route>*/}
    {/*    <Route exact path={"/reset-password/:token"}>*/}
    {/*      <Header />*/}
    {/*      <ResetPassword />*/}
    {/*    </Route>*/}
    {/*    <Route path={"/two-factor-auth/verification/"}>*/}
    {/*      <Header />*/}
    {/*      <TwoFactorAuth />*/}
    {/*    </Route>*/}
    {/*    <Route path={"/account/confirmation/"}>*/}
    {/*      <Header />*/}
    {/*      <VerificationAccount />*/}
    {/*    </Route>*/}
    {/*  </Switch>*/}
    {/*</Router>*/}
  </React.StrictMode>
);

reportWebVitals();
