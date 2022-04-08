import React from "react";
import fb from "../../../images/fb.png";
import insta from "../../../images/insta.png";
import yt from "../../../images/yt.png";

const Footer = () => {
  return (
    <div>
      <div className="row bg-dark text-light p-5 container-fluid ">
        <div className="col-md-3">
          <h3>Content</h3>
          <p>The most popualr service</p>
          <p>New Resouces</p>
          <p>Search trends</p>
          <p>Blog</p>
        </div>
        <div className="col-md-3">
          <h3>Information</h3>
          <p>Plans and pricing</p>
          <p>Affitiate</p>
          <p>About</p>
          <p>Jobs</p>
        </div>
        <div className="col-md-3">
          <h3>Legal</h3>
          <p>Terms and conditions</p>
          <p>License Agreement</p>
          <p>Privacy policy</p>
          <p>Cookies policy</p>
        </div>
        <div className="col-md-3 bg-dark">
          <h3 className="text-light">Social Media</h3>
          <div>
            <img
              style={{ height: "40px" }}
              className="img-fluid m-2 p-2"
              src={fb}
              alt=""
            />
            <img
              style={{ height: "40px" }}
              className="img-fluid m-2 p-2"
              src={yt}
              alt=""
            />
            <img
              style={{ height: "40px" }}
              className="img-fluid m-2 p-2"
              src={insta}
              alt=""
            />
          </div>
          <div>
            <h6>Support us through petron @kazi2021</h6>
          </div>
        </div>
        <div className="text-center bg-dark text-light pt-5">
          copytight kazi@2021
        </div>
      </div>
    </div>
  );
};

export default Footer;
