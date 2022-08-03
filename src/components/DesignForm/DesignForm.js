import React, { useState } from "react";
import "./design-form.css";
import NextButton from "../NextButton/NextButton";

const DesignForm = ({ setHolderName, updateCardPosition, setStep }) => {
  return (
    <div className={"row my-3"}>
      <div className="col-12">
        <form className="row">
          <div className="col-12 my-4">
            <input
              name="holder-name"
              type="text"
              className="form-control"
              id="holderName"
              placeholder={"CARD HOLDER NAME"}
              onChange={(e) => setHolderName(e.target.value)}
            />
          </div>
          <div className="col-12 my-4">
            <textarea
              name="comment"
              className="form-control"
              id="comment"
              rows="1"
              placeholder={"COMMENT"}
              style={{ backgroundColor: "#000000" }}
            ></textarea>
          </div>

          <div className="col-6 my-4 form-check text-uppercase">
            <input
              className="form-check-input"
              type="radio"
              name="position"
              id="front"
              onChange={() => updateCardPosition(true)}
              defaultChecked={true}
            />
            <label className="form-check-label" htmlFor="front">
              card number on Front
            </label>
          </div>
          <div className="col-6 my-4 form-check text-uppercase">
            <input
              className="form-check-input"
              type="radio"
              name="position"
              id="back"
              onChange={() => updateCardPosition(false)}
            />
            <label className="form-check-label" htmlFor="back">
              card number on Back
            </label>
          </div>
        </form>
        <NextButton setStep={setStep} step={2} />
      </div>
    </div>
  );
};

export default DesignForm;
