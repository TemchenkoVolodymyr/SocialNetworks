import React from "react";
import s from "./sideFriends.module.css";
import VisibilityFriends from "./Friends/sideVisibilityFriends";


const SideFriends = (props) => {

    const Friend = props.friends
        .map(friend => <VisibilityFriends img={friend.img} key={friend.id} name={friend.name}/> )
    return (
        <div>
            <div className={s.friends__header}>FRIENDS</div>
            <div className ={s.friends__grid}>
                {Friend}
        </div>
        </div>
    )};

export default SideFriends;