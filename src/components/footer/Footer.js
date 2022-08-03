import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import footerVideo from "../../assets/video/footer-video.mp4";
const Footer = () => {
  return (
    <>
      <div className={"footer-container"}>
        <div className={"text"}>
          <div className={"services"}>
            <h4>our services</h4>
            <div>Best Sellers</div>
            <div>Design your card</div>
            <div>Meet with Designer</div>
          </div>
          <div className={"about"}>
            <h4>about us</h4>
            <div>FAQ</div>
            <div>Privacy policy</div>
            <div>Terms & conditions</div>
          </div>
          <div className={"contact"}>
            <h4>contact</h4>
            <div>Fancy.card@gmail.com</div>
            <div>+966 56 678 7868</div>
            <div className={"social-media"}>
              <div className={"fb"}>
                <FontAwesomeIcon className={"fa-2xl"} icon={faFacebookSquare} />
              </div>
              <div className={"inst"}>
                <FontAwesomeIcon className={"fa-2xl"} icon={faInstagram} />
              </div>
              <div className={"twitter"}>
                <FontAwesomeIcon className={"fa-2xl"} icon={faTwitter} />
              </div>
            </div>
          </div>
        </div>
        <div className={"footer-video"}>
          <video src={footerVideo} autoPlay loop width={"500"}></video>
        </div>
      </div>
      <hr className={"footer-line"} />
      <div className={"copyrights"}>© 2022.Fancy Cards</div>
    </>
  );
};

export default Footer;
