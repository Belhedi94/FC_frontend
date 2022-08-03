import React, { useState } from "react";
import DesignTitle from "../Design title/DesignTitle";
import DesignTools from "../Design tools/DesignTools";
import VerticalSeparator from "../VerticalSeparator/VerticalSeparator";
import CardSimulation from "../CardSimulation/CardSimulation";

const DesignCard = () => {
  const [holderName, setHolderName] = useState("");
  const [cardPositionInFront, updateCardPosition] = useState(true);
  const [step, setStep] = useState(1);
  const [imgName, setImgName] = useState("mirror-gold.png");

  return (
    <div className={"container px-5"}>
      <DesignTitle />
      <div className="row gy-3">
        <CardSimulation
          holderName={holderName}
          cardPositionInFront={cardPositionInFront}
          imgName={imgName}
        />
        <VerticalSeparator />
        <DesignTools
          setHolderName={setHolderName}
          updateCardPosition={updateCardPosition}
          step={step}
          setStep={setStep}
          imgName={imgName}
          setImgName={setImgName}
        />
      </div>
    </div>
  );
};

export default DesignCard;
