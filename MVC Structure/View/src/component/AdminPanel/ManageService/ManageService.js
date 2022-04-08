import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import Sidebar from "../Sidebar/Sidebar";
import ManageServiceTable from "./ManageServiceTable";

const ManageService = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("https://shielded-savannah-63633.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setList(data);
      });
  }, [list]);

  return (
    <div className="row">
      <div className="col-md-3">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-8 p-1">
        <h1>Manage Services</h1>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Status</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item) => (
              <ManageServiceTable data={item}></ManageServiceTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageService;
