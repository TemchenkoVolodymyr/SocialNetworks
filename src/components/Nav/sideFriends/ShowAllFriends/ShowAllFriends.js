import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import defaultPhoto from '../../../../assets/default.png';
import s from './ShowAllFriends.module.scss'


const ShowAllFriends = () => {


  const [myFriends,setMyFriends] = useState([])
  const users = useSelector((state) => state.usersPage.users);

  useEffect(() => {
console.log(users)
    users?.map(item => {
      if(item.followed === true){
        setMyFriends(prevState => {
          if (prevState?.some(prev => prev.id === item.id)) {
            return prevState;
          } else {
            return [...prevState, item];
          }
        })
      }
    })
  },[users])

  console.log(myFriends)
  return (
    <>

    <div className={s.friends}>
      <p className={s.header}>Your friends </p>
      {myFriends.map(item => <div className={s.container}>
        <img  src={item.photos.small ? item.photos.small : defaultPhoto } alt={'ava'}/>
        <p>{item.name}</p>
      </div>)}
    </div>
    </>
  );
};

export default ShowAllFriends;