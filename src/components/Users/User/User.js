import React from "react";
import s from "./User.module.css"
import {NavLink} from "react-router-dom";
import defaultPhoto from "../../../assets/default.png"
import {followStatus} from "../../../api/apiData";

const User = (data) => {

  let currentUser = data.data

  return (
    <>
      {currentUser.data.users ? currentUser.data.users.map(user => <div key={user.id}>
          <div className={s.container}>
            <div className={s.wrapperImage}>
              <NavLink to={"/profile/" + user.id}>
                <img alt="DefaultImage" src={user.photos.small != null ? user.photos.small : defaultPhoto}/> </NavLink>
              <p>
                {user.followed
                  ? <button disabled={currentUser.data.isProgress.some(id => id === user.id)} onClick={() => {
                    currentUser.data.followThunkCreator(user.id, followStatus.deleteFollow(user.id))     // тут происходит асинхронный запрос на сервер в usersPageReducer
                  }}>unfollow</button>
                  : <button disabled={currentUser.data.isProgress.some(id => id === user.id)} onClick={() => {
                    currentUser.data.followThunkCreator(user.id, followStatus.postFollow(user.id))  // тут происходит асинхронный запрос на сервер в usersPageReducer

                  }}>follow</button>}
              </p>
            </div>
            <div className={s.wrapperDescription}>
              <div>
                <p>{user.name}</p>
                <p>{"user.comment"}</p>
              </div>
              <div>
                <p>"user.location.country"</p>
                <p>"user.location.city"</p>
              </div>
            </div>
          </div>
        </div>
      ) : null
      }
    </>
  )
}

export default User;