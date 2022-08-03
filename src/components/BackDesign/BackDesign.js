import React from "react";
import "./back-design.css";
const BackDesign = ({ cardPositionInFront, imgName }) => {
  return (
    <div className={"back-design"}>
      <div className="container front-img">
        <img
          src={require(`../../assets/img/cards/back/${imgName}`)}
          alt="back"
          className={"w-100"}
          draggable={false}
        />
        {!cardPositionInFront ? (
          <div className="card-number-back p-2">5399401710285536</div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default BackDesign;
