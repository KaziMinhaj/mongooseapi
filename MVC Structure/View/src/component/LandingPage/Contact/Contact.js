import React from "react";
import message from "../../../images/msg.jpg";

const Contact = () => {
  return (
    <div id="contact" className="row bg-light p-5 container-fluid">
      <div className="text-center">
        <h3>STAY IN TOUCH</h3>
      </div>
      <div className="col-md-6 d-flex justify-content-center align-items-center ">
        <img style={{ height: "300px" }} src={message} alt="" />
      </div>
      <div className="col-md-4 p-5">
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Name</label>
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter name"
            />
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Location</label>
            <input
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter Location"
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              placeholder="Enter message"
              className="form-control"
              rows="3"
            ></textarea>
          </div>
          <br />
          <button type="submit" className="btn btn-warning">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
