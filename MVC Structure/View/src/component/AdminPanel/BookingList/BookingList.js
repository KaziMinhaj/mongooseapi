import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import Sidebar from "../Sidebar/Sidebar";
import BookingListTable from "./BookingListTable";

const BookingList = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(
      "https://shielded-savannah-63633.herokuapp.com/bookingList/" +
        loggedInUser.email
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setList(data);
      });
  }, [loggedInUser.email]);

  return (
    <div className="row">
      <div className="col-md-3">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-9 p-5">
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Service</th>
              <th scope="col">PayID</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item) => (
              <BookingListTable items={item}></BookingListTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingList;
