import React, { useContext } from "react";
import { UserContext } from "../../../App";
import "../../../App.css";
import Book from "../Book/Book";
import Orderlist from "../OrderList/OrderList";

const AdminPanel = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <div className="admin">
      {loggedInUser.isAdmin ? <Orderlist></Orderlist> : <Book></Book>}
    </div>
  );
};

export default AdminPanel;
