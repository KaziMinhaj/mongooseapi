import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import Sidebar from "../Sidebar/Sidebar";
import OrderTable from "./OrderTable";

const Orderlist = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("https://shielded-savannah-63633.herokuapp.com/bookingList")
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
      <div className="col-md-8 p-5">
        <h3 className="text-center mt-1 mb-5">Orderd list</h3>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Orderd By</th>
              <th scope="col">Email</th>
              <th scope="col">Service</th>
              <th scope="col">Current Status</th>
              <th scope="col">Change Status</th>
            </tr>
          </thead>
          <tbody>
            {list.map((data) => (
              <OrderTable data={data}></OrderTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orderlist;
