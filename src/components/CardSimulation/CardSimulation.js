import React from "react";
import "./card-simulation.css";
import FrontDesign from "../FrontDesign/FrontDesign";
import BackDesign from "../BackDesign/BackDesign";
const CardSimulation = ({
  holderName,
  cardPositionInFront,
  setImgName,
  imgName,
}) => {
  return (
    <div className={"col-12 col-md-6"}>
      <FrontDesign
        holderName={holderName}
        cardNumberPosition={cardPositionInFront}
        setImgName={setImgName}
        imgName={imgName}
      />
      <BackDesign
        cardPositionInFront={cardPositionInFront}
        setImgName={setImgName}
        imgName={imgName}
      />
    </div>
  );
};

export default CardSimulation;
