import React from "react";
import Pagination from "../../utilits/Pagenation/Pagination";
import User from "./User/User";

const Users = (data) => {
  return (
    <>
        {Pagination(data)}
      <User data={data}/>
    </>
  )
}

export default Users;