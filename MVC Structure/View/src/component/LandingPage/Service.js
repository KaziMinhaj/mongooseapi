import React from "react";
import { Link } from "react-router-dom";

const service = ({ data }) => {
  return (
    <div className="card m-5 shadow " style={{ width: "18rem" }}>
      <img
        style={{ height: "200px" }}
        src={data.imageURL}
        class="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h6 className="card-text">{data.name}</h6>
        <p className="card-text">{data.details}</p>
        <Link to="/admin" className="btn btn-warning">
          Get a service
        </Link>
      </div>
    </div>
  );
};

export default service;
