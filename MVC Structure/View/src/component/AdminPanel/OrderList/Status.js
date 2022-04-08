import React from "react";
import { useForm } from "react-hook-form";

const Status = ({ mydata }) => {
  const payid = mydata.paymentId;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <select {...register(payid, { required: true })}>
        <option className="dropdown-item" value="pending">
          Pending
        </option>
        <option className="dropdown-item" value="on going">
          On going
        </option>
        <option className="dropdown-item" value="done">
          Done
        </option>
      </select>
      <input className="m-2 btn btn-success" type="submit" />
    </form>
  );
};

export default Status;
