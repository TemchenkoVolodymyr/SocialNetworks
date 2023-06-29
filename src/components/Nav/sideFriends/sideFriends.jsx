import React, {useEffect, useState} from "react";
import s from "./sideFriends.module.scss";
import VisibilityFriends from "./Friends/sideVisibilityFriends";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import defaultPhoto from '../../../assets/default.png'


const SideFriends = (props) => {

  const [myFriends,setMyFriends] = useState([])

  const users = useSelector((state) => state.usersPage.users);

  useEffect(() => {

    users.map(item => {
      if(item.followed === true){
        setMyFriends(prevState => [...prevState, item])
      }
    })
  },[users])

 let fr =  []

  for(let i = 0; i < 3; i++){
    fr.push(myFriends[i])
  }


    const friends = fr?.map(friend => <VisibilityFriends img={friend?.photos?.small ? friend?.photos?.small :defaultPhoto } key={friend?.id} name={friend?.name}/>)
  return (
    <div>
      <div className={s.friends__header}>
        <NavLink to={'/friends'}>Friends</NavLink>
      </div>
      <div className={s.friends__grid}>
        {friends}
      </div>
    </div>
  )
};

export default SideFriends;