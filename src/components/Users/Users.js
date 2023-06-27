import React from "react";
import Pagination from "../../utilits/Pagenation/Pagination";
import User from "./User/User";

const Users = (props) => {

  return (
    <>
        {Pagination(props)}
      <User data={props}/>
    </>
  )
}

export default Users;