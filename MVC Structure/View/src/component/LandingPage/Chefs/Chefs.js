import React from "react";
import Chef from "./Chef";
const data = [
  {
    name: "Abu Bakar",
    designation: "Bangli Chef",
    description:
      "Ipsum anim incididunt voluptate sunt nostrud adipisicing veniam.",
  },
  {
    name: "Yun Chan",
    designation: "Chinese chef",
    description:
      "Ipsum anim incididunt voluptate sunt nostrud adipisicing veniam.",
  },
  {
    name: "Daren Dani",
    designation: "Italian Chef",
    description:
      "Ipsum anim incididunt voluptate sunt nostrud adipisicing veniam.",
  },
  {
    name: "Yubraj Sign",
    designation: "Indian Chef",
    description:
      "Ipsum anim incididunt voluptate sunt nostrud adipisicing veniam.",
  },
];

const Chefs = () => {
  return (
    <div className="text-center  bg-light p-5">
      <div>
        <h1 className="text-dark">Meet Our Chefs</h1>
      </div>
      <div className="row d-flex justify-content-center m-5">
        {data.map((x) => (
          <Chef data={x}></Chef>
        ))}
      </div>
    </div>
  );
};

export default Chefs;
