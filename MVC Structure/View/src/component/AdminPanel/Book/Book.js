import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../App";
import Sidebar from "../Sidebar/Sidebar";
import ProcessPayment from "./ProcessPayment";

const Book = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [order, setOrder] = useState({});
  const [pay, setPay] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setOrder(data);
  };

  const handlePayment = (id) => {
    const newInfo = { ...order };
    newInfo.paymentId = id;
    newInfo.status = "pending";
    setPay(newInfo);
  };

  useEffect(() => {
    fetch("https://shielded-savannah-63633.herokuapp.com/addOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pay),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [pay]);

  return (
    <div className="row bg-light">
      <div className="col-md-3">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-4 m-5 ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Name</label>
          <input
            defaultValue={loggedInUser.name}
            className="form-control m-2"
            placeholder="Name"
            {...register("name", { required: true })}
          />
          {errors.name && <span>This field is required</span>}
          <label>Email</label>
          <input
            defaultValue={loggedInUser.email}
            className="form-control m-2"
            placeholder="email"
            {...register("email", { required: true })}
          />
          {errors.email && <span>This field is required</span>}

          <label className="p-2">Choose a Service:</label>
          <select {...register("services", { required: true })}>
            <option className="dropdown-item" value="Hire chef">
              Hire chef
            </option>
            <option className="dropdown-item" value="Video tutorial">
              Video tutorial
            </option>
            <option className="dropdown-item" value="Learn Secret recipies">
              Learn Secret recipies
            </option>
          </select>

          <input className="btn btn-success m-2" type="submit" />
        </form>
        <br />
        <h6 className="m-2 p-2">Plaese Complete your payment</h6>
        <ProcessPayment handlePayment={handlePayment}></ProcessPayment>
      </div>
    </div>
  );
};

export default Book;
