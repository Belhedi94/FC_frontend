import React from "react";
import "./next-button.css";

const NextButton = ({ setStep, step }) => {
  return (
    <div className="col-12 my-5 text-center">
      <button
        type="submit"
        className="btn next-btn w-50 fw-bold"
        onClick={() => setStep(step)}
      >
        Next Step
      </button>
    </div>
  );
};

export default NextButton;
