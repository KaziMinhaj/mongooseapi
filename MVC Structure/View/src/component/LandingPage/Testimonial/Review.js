// import { faUser } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import profile from "../../../images/profile.png";
import star from "../../../images/star.png";

const Review = ({ data }) => {
  return (
    <div className="card m-5 shadow review " style={{ width: "18rem" }}>
      {/* <img src={data.img} class="card-img-top" alt="..." /> */}
      <div className="card-body">
        {/* <img src={faUser} alt="" /> */}
        <img style={{ width: "20%", height: "50px" }} src={profile} alt="" />
        <h6 className="card-text">{data.name}</h6>
        <p>{data.job}</p>
        <p>{data.review}</p>

        <img style={{ width: "10%", height: "20px" }} src={star} alt="" />
        <img style={{ width: "10%", height: "20px" }} src={star} alt="" />
        <img style={{ width: "10%", height: "20px" }} src={star} alt="" />
      </div>
    </div>
  );
};

export default Review;
