import React from "react";
import "./front-design.css";
import sim from "../../assets/img/cards/sim.png";
import Draggable from "react-draggable";

const FrontDesign = ({ holderName, cardNumberPosition, imgName }) => {
  const nodeRef = React.useRef(null);
  return (
    <div className={"front-design py-3"}>
      <div className="container front-img">
        <img
          src={require(`../../assets/img/cards/front/${imgName}`)}
          alt="front"
          className={"w-100"}
          draggable={false}
        />
        <div className="sim">
          <img src={sim} alt="sim_card" width={"42px"} draggable={false} />
        </div>

        <Draggable
          bounds={{ left: -10, top: -130, right: 200, bottom: 10 }}
          nodeRef={nodeRef}
        >
          <div className="holder-name p-2" ref={nodeRef}>
            {holderName ? holderName : "NAME HERE"}
          </div>
        </Draggable>
        {cardNumberPosition ? (
          <Draggable bounds={"parent"} nodeRef={nodeRef}>
            <div className="card-number p-2" ref={nodeRef}>
              5399401710285536
            </div>
          </Draggable>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default FrontDesign;
