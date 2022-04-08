import React, { useEffect, useState } from "react";
import Review from "./Review";

const Testimonial = () => {
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch("https://shielded-savannah-63633.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReview(data);
      });
  }, []);
  return (
    <div className="text-center p-5 container-fluid">
      <div>
        <h1>Testimonial</h1>
      </div>
      <div className="row d-flex justify-content-center m-5">
        {review.map((x) => (
          <Review data={x}></Review>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
