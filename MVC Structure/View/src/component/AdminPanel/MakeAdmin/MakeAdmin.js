import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Sidebar from "../Sidebar/Sidebar";

const MakeAdmin = () => {
  const [admin, setAdmin] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch("https://shielded-savannah-63633.herokuapp.com/addAdmin", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        setAdmin(data);
      });
  };

  return (
    <div className="row container-fluid">
      <div className="col-md-3">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-4 p-5">
        <label htmlFor="">Add an admin</label>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="form-control mt-2"
            placeholder="Enter email address"
            {...register("email", { required: true })}
          />
          {errors.email && <span>This field is required</span>}
          <input className="btn btn-success mt-2" type="submit" />
        </form>
        {admin ? (
          <h6 className="text-success">Admin added successfully </h6>
        ) : (
          <h6 className="text-danger"></h6>
        )}
      </div>
    </div>
  );
};

export default MakeAdmin;
