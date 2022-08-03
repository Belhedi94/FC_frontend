import React from "react";
import "./card-metal.css";
import { cardImgNames } from "../../CardImgNames";
import gold24K from "../../assets/img/cards_sim/mirror-gold24k.png";
import mirrorRainbow from "../../assets/img/cards_sim/mirror-rainbow.png";
import mirrorRose from "../../assets/img/cards_sim/mirror-rose.png";
import mirrorSilver from "../../assets/img/cards_sim/mirror-silver.png";
import mirrorGold from "../../assets/img/cards_sim/mirror-gold.png";
import brushedGold from "../../assets/img/cards_sim/brushed-gold.png";
import brushedRose from "../../assets/img/cards_sim/brushed-rose.png";
import brushedSilver from "../../assets/img/cards_sim/brushed-silver.png";
import brushedBlue from "../../assets/img/cards_sim/brushed-blue.png";
import brushedGreen from "../../assets/img/cards_sim/brushed-green.png";
import brushedRed from "../../assets/img/cards_sim/brushed-red.png";
import brushedBlack from "../../assets/img/cards_sim/brushed-black.png";
import matteBlack from "../../assets/img/cards_sim/matte-black.png";
import matteSilver from "../../assets/img/cards_sim/matte-silver.png";
import matteWhite from "../../assets/img/cards_sim/matte-white.png";
import NextButton from "../NextButton/NextButton";

const CardMetal = ({ setStep, setImgName }) => {
  return (
    <section id={"card-metal"}>
      <div className="container">
        <h6 className={"text-uppercase mt-4"}>mirror cards</h6>
        <div className=" row gy-2">
          <div
            className={"col"}
            onClick={() => setImgName(cardImgNames.gold24K)}
          >
            <img src={gold24K} alt="gold24k" className={"card-img w-100"} />
          </div>
          <div
            className={"col"}
            onClick={() => setImgName(cardImgNames.mirrorRainbow)}
          >
            <img
              src={mirrorRainbow}
              alt="rainbow"
              className={"card-img w-100"}
            />
          </div>
          <div
            className={"col"}
            onClick={() => setImgName(cardImgNames.mirrorRose)}
          >
            <img
              src={mirrorRose}
              alt="mirrorRose"
              className={"card-img w-100"}
            />
          </div>
          <div
            className={"col"}
            onClick={() => setImgName(cardImgNames.mirrorSilver)}
          >
            <img
              src={mirrorSilver}
              alt="mirrorSilver"
              className={"card-img w-100"}
            />
          </div>
          <div
            className={"col"}
            onClick={() => setImgName(cardImgNames.mirrorGold)}
          >
            <img
              src={mirrorGold}
              alt="mirrorGold"
              className={"card-img w-100"}
            />
          </div>
        </div>
        <h6 className={"text-uppercase mt-4"}>brushed cards</h6>
        <div className="row gy-2">
          <div
            className={"col"}
            onClick={() => setImgName(cardImgNames.brushedGold)}
          >
            <img
              src={brushedGold}
              alt="brushedGold"
              className={"card-img w-100"}
            />
          </div>
          <div
            className={"col"}
            onClick={() => setImgName(cardImgNames.brushedRose)}
          >
            <img
              src={brushedRose}
              alt="brushedRose"
              className={"card-img w-100"}
            />
          </div>
          <div
            className={"col"}
            onClick={() => setImgName(cardImgNames.brushedSilver)}
          >
            <img
              src={brushedSilver}
              alt="brushedSilver"
              className={"card-img w-100"}
            />
          </div>
          <div
            className={"col"}
            onClick={() => setImgName(cardImgNames.brushedBlue)}
          >
            <img
              src={brushedBlue}
              alt="brushedBlue"
              className={"card-img w-100"}
            />
          </div>
          <div
            className={"col"}
            onClick={() => setImgName(cardImgNames.brushedGreen)}
          >
            <img
              src={brushedGreen}
              alt="brushedGreen"
              className={"card-img w-100"}
            />
          </div>
        </div>
        <div className="row">
          <div
            className={"col gy-2"}
            onClick={() => setImgName(cardImgNames.brushedBlack)}
          >
            <img
              src={brushedBlack}
              alt="brushedBlack"
              className={"card-img w-100"}
            />
          </div>
          <div
            className={"col gy-2"}
            onClick={() => setImgName(cardImgNames.brushedRed)}
          >
            <img
              src={brushedRed}
              alt="brushedRed"
              className={"card-img w-100"}
            />
          </div>
          <div className="col"></div>
          <div className="col"></div>
          <div className="col"></div>
        </div>
        <h6 className={"text-uppercase mt-4"}>matte cards</h6>
        <div className="row">
          <div
            className={"col"}
            onClick={() => setImgName(cardImgNames.matteBlack)}
          >
            <img
              src={matteBlack}
              alt="matteBlack"
              className={"card-img w-100"}
            />
          </div>
          <div
            className={"col"}
            onClick={() => setImgName(cardImgNames.matteSilver)}
          >
            <img
              src={matteSilver}
              alt="matteSliver"
              className={"card-img w-100"}
            />
          </div>
          <div
            className={"col"}
            onClick={() => setImgName(cardImgNames.matteWhite)}
          >
            <img
              src={matteWhite}
              alt="matteWhite"
              className={"card-img w-100"}
            />
          </div>
          <div className="col"></div>
          <div className="col"></div>
        </div>
        <NextButton setStep={setStep} step={3} />
      </div>
    </section>
  );
};

export default CardMetal;
