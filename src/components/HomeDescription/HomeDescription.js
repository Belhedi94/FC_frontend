import React from "react";
import "./home-description.css";
import homeVideoMP4 from "../../assets/video/home-video.mp4";
import homeVideoWEBM from "../../assets/video/home-video.webm";
import Navbar from "../Navbar/Navbar";
const HomeDescription = () => {
  return (
    <div>
      <Navbar />
      <section className={"presentation"}>
        <div className="container my-5">
          <div className="row text-presentation">
            <div className="col-12 col-lg-6">
              <h1 className={"text-uppercase mb-5 home-title"}>
                new custom metal
                <br />
                credit & debit cards
              </h1>
              <p
                className={"fs-5 paragraph-pres"}
                style={{ color: "gainsboro" }}
              >
                A metal card speaks for itself. Create your own special <br />
                design or choose from one of our pre-made designs today.
              </p>
              <div
                className={
                  "row gy-4 my-3 justify-content-sm-center justify-content-lg-start "
                }
              >
                <div className="col-12 col-sm-4 col-lg-4">
                  <button className={"design-button text-uppercase fw-bold"}>
                    Design my own card
                  </button>
                </div>
                <div className="col-12 col-sm-4 col-lg-4">
                  <button className={"pre-made-button"}>
                    Pre-made designs
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 d-none d-lg-block video">
              <video
                src={homeVideoMP4}
                src={homeVideoWEBM}
                autoPlay
                loop
                width="750"
                muted
                // ref={videoRef}
                // onCanPlay={() => setPlayBack()}
              ></video>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeDescription;
