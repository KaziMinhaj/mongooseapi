import React from "react";
import Status from "./Status";

const OrderTable = ({ data }) => {
  return (
    <tr>
      <td>{data.name}</td>
      <td>{data.email}</td>
      <td>{data.services}</td>
      <td>{data.status}</td>
      <td>
        <Status mydata={data}></Status>
      </td>
    </tr>
  );
};

export default OrderTable;
