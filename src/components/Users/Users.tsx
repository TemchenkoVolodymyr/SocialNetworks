import * as  React from "react";
import Pagination from "../../utilits/Pagenation/Pagination.tsx";
import User from "./User/User.tsx";
import {UsersComponentType, UsersType} from "../../types/types";



const Users : React.FC <UsersComponentType> = (props) => {

    return (
        <>
            {Pagination(props)}
            <User data={props}/>
        </>
    )
}

export default Users;