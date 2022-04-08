import React from "react";

const BookingListTable = ({ items }) => {
  return (
    <tr>
      <th scope="row">#</th>
      <td>{items.name}</td>
      <td>{items.email}</td>
      <td>{items.services}</td>
      <td>{items.paymentId}</td>
      <td>{items.status}</td>
    </tr>
  );
};

export default BookingListTable;
