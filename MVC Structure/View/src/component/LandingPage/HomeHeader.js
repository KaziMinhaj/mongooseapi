import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import "./Homeheader.css";

const HomeHeader = () => {
  return (
    <div className="row bg-light homeheader">
      <div>
        <Navbar className="navbar"></Navbar>
      </div>
      <div className="content">
        <h1>A high end service</h1>
        <h2>A high end service from Kazi group</h2>
        <Link to="/admin" className="btn btn-warning  m-3">
          Get a service
        </Link>
      </div>
    </div>
  );
};

export default HomeHeader;
