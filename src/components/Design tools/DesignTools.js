import React from "react";
import "./design-tools.css";
import DesignSteps from "../Design steps/DesignSteps";
import DesignForm from "../DesignForm/DesignForm";
import CardMetal from "../CardMetal/CardMetal";

const DesignTools = ({
  setHolderName,
  updateCardPosition,
  step,
  setStep,
  setImgName,
}) => {
  return (
    <div className={"col-12 col-md-5"}>
      <DesignSteps step={step} setStep={setStep} />
      {step === 1 ? (
        <DesignForm
          setHolderName={setHolderName}
          updateCardPosition={updateCardPosition}
          setStep={setStep}
        />
      ) : step === 2 ? (
        <CardMetal setStep={setStep} setImgName={setImgName} />
      ) : (
        ""
      )}
    </div>
  );
};

export default DesignTools;
