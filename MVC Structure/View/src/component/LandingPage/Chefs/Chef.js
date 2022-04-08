import React from "react";
import chef1 from "../../../images/hitesh.png";

const Chef = ({ data }) => {
  return (
    <div className="card m-2 shadow review " style={{ width: "18rem" }}>
      <div className="card-body">
        <img style={{ width: "20%", height: "50px" }} src={chef1} alt="" />
        <h6 className="card-text">{data.name}</h6>
        <p>{data.designation}</p>
        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default Chef;
