import React from "react";
import s from "./sideVisibilityFriends.module.css";

const VisibilityFriends = (props) => {

    return (
        <div>
            <img src={props.img} alt="friends avatar"/>
            <div>{props.name}</div>
        </div>
    )
}
export default VisibilityFriends;