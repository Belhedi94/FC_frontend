import React, { useRef } from "react";
import "./home-content.css";
import homeVideo from "../../assets/video/home-video.mp4";
import fcStep1 from "../../assets/img/fc-step1.png";
import fcStep2 from "../../assets/img/fc-step2.png";
import fcStep3 from "../../assets/img/fc-step3.png";
import fcStep4 from "../../assets/img/fc-step4.png";

const HomeContent = () => {
  const videoRef = useRef();
  const setPlayBack = () => {
    videoRef.current.playbackRate = 0.5;
  };
  return (
    <div className={"home-content-container"}>
      <div className={"first-section"}>
        <div className={"text"}>
          <h1>
            New custom metal
            <br />
            credit & debit cards
          </h1>
          <p>
            A metal card speaks for itself. Create your own special design or
            choose from one of our pre-made designs today.
          </p>
          <div className={"buttons"}>
            <button className={"design-button"}>Design my own card</button>
            <button className={"pre-made-button"}>Pre-made designs</button>
          </div>
        </div>
        <div className={"header-video"}>
          <video
            src={homeVideo}
            autoPlay
            loop
            width="814"
            ref={videoRef}
            onCanPlay={() => setPlayBack()}
          ></video>
        </div>
      </div>
      <div className={"second-section"}>
        <h1 className={"title"}>order steps</h1>
        <hr />
        <hr className={"second-line"} />
        <div className={"order-steps-container"}>
          <div className={"steps"}>
            <img src={fcStep1} alt="step1" />
            <h3>design your card</h3>
            <p>
              choose metal, upload your design and personalize with our
              interactive card builder or just choose one of our pre-made
              designs, complete the order details.
            </p>
          </div>
          <div className={"vertical-line"}></div>
          <div className={"steps"}>
            <img src={fcStep2} alt="step2" />
            <h3>secure your card</h3>
            <p>
              Freeze/Lock your card and put your plastic card in any envelop.
            </p>
          </div>
          <div className={"vertical-line"}></div>
          <div className={"steps"}>
            <img src={fcStep3} alt="step3" />
            <h3 className={"third-title"}>send us your card</h3>
            <p>
              We will send you a confirmation email with a simple shipping
              instructions.
            </p>
          </div>
          <div className={"vertical-line"}></div>
          <div className={"steps"}>
            <img src={fcStep4} alt="step4" />
            <h3 className={"fourth-title"}>we create your card</h3>
            <p>
              Once your plastic card is received, we will develop and your fancy
              card, and it will be shipped within 24h.
            </p>
          </div>
        </div>
      </div>
      <div className={"third-section"}>
        <h1 className={"title"}>testimonials</h1>
        <hr />
        <hr className={"second-line"} />
        <div className={"testimonials"}>
          <div className={"testimonial-item"}>
            <div className={"big-box"}>
              <p>
                Beautiful and new cards collection, its provider for all
                capabilities and the employee treats him very classy.
              </p>
            </div>
            <div className={"little-box"}>
              <span>mohamed</span>
            </div>
          </div>
          <div className={"testimonial-item"}>
            <div className={"big-box"}>
              <p>
                Beautiful and new cards collection, its provider for all
                capabilities and the employee treats him very classy.
              </p>
            </div>
            <div className={"little-box"}>
              <span>mohamed</span>
            </div>
          </div>
          <div className={"testimonial-item"}>
            <div className={"big-box"}>
              <p>
                Beautiful and new cards collection, its provider for all
                capabilities and the employee treats him very classy.
              </p>
            </div>
            <div className={"little-box"}>
              <span>mohamed</span>
            </div>
          </div>
          <div className={"testimonial-item"}>
            <div className={"big-box"}>
              <p>
                Beautiful and new cards collection, its provider for all
                capabilities and the employee treats him very classy.
              </p>
            </div>
            <div className={"little-box"}>
              <span>mohamed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
