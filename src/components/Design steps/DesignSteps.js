import React from "react";
import "./design-steps.css";
const DesignSteps = ({ step, setStep }) => {
  const styles = {
    color: "#B88A44",
    borderBottom: "1px solid #B88A44",
    paddingBottom: "15px",
    cursor: "pointer",
  };
  return (
    <div className="row">
      <div className="step col-4 text-uppercase fw-bold">
        <span
          className={"step-title d-flex justify-content-center py-2"}
          style={step === 1 ? styles : {}}
          onClick={() => setStep(1)}
        >
          card info
        </span>
      </div>
      <div className="step col-4 text-uppercase fw-bold">
        <span
          className={"step-title d-flex justify-content-center py-2"}
          style={step === 2 ? styles : {}}
          onClick={() => setStep(2)}
        >
          card metal
        </span>
      </div>
      <div className="step col-4 text-uppercase fw-bold">
        <span
          className={"step-title d-flex justify-content-center py-2"}
          style={step === 3 ? styles : {}}
          onClick={() => setStep(3)}
        >
          card design
        </span>
      </div>
    </div>
  );
};

export default DesignSteps;
