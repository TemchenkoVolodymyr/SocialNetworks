import React from "react";
import s from "./sideVisibilityFriends.module.scss";

const VisibilityFriends = (props) => {

    return (
        <div className={s.friendNav}>
            <img src={props.img} alt="friends avatar"/>
            <p>{props.name}</p>
        </div>
    )
}
export default VisibilityFriends;