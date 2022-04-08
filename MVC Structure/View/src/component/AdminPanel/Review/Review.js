import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../App";
import Sidebar from "../Sidebar/Sidebar";

const Review = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const prevData = { ...loggedInUser };
    prevData.job = data.job;
    prevData.review = data.review;
    prevData.rating = data.rating;
    console.log(prevData);

    fetch("https://shielded-savannah-63633.herokuapp.com/addReview", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(prevData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="row">
      <div className="col-md-3">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-4 m-5">
        <h1>Please Review our service</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="form-control"
            placeholder="Enter your designation"
            {...register("job", { required: true })}
          />
          {errors.job && (
            <span className="text-danger">This field is required</span>
          )}
          <br />
          <textarea
            className="form-control "
            placeholder="write down your review"
            {...register("review", { required: true })}
          />
          {errors.review && (
            <span className="text-danger">This field is required</span>
          )}
          <br />
          <label className="m-2">Select rating</label>
          <select {...register("rating", { required: true })}>
            <option className="dropdown-item" value="1">
              1
            </option>
            <option className="dropdown-item" value="2">
              2
            </option>
            <option className="dropdown-item" value="3">
              3
            </option>
          </select>
          <br />
          <input className="btn btn-success " type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Review;
