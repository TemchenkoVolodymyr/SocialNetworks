import * as React from "react";
import s from "./User.module.scss"
import {NavLink} from "react-router-dom";
import defaultPhoto from "../../../assets/default.png"
import {followStatus} from "../../../api/apiData";
import {useDispatch} from "react-redux";
import {followThunkCreator} from "../../../redux/UsersPageReducer.ts";
import { UsersType } from "../../../types/types";



type UserDataType = {
  data : {
    user:Array<UsersType>,
    isProgress:Array<number>,
    totalCount: number,
    currentPageData: (page : number) => void,
    followThunkCreator: (userId:number,callback:() => void) => void,
    pageSize: number,
    current: any
  }
}
const User:React.FC <UserDataType> = (props) => {

  const dispatch : any = useDispatch();

  let currentUser = props.data.user

  return (
    <>
      {currentUser ? currentUser.map(user => <div key={user.id}>
          <div className={s.container}>
            <div className={s.wrapperImage}>
              <NavLink to={"/profile/" + user.id}>
                <img alt="DefaultImage" src={user.photos.small != null ? user.photos.small : defaultPhoto}/> </NavLink>
              <p>
                {user.followed
                  ? <button disabled={props.data.isProgress.some(id => id === user.id)} onClick={() => {
                    dispatch(followThunkCreator(user.id, followStatus.deleteFollow(user.id)))
                  }}>unfollow</button>
                  : <button disabled={props.data.isProgress.some(id => id === user.id)} onClick={() => {
                    dispatch(followThunkCreator(user.id, followStatus.postFollow(user.id)))

                  }}>follow</button>}
              </p>
            </div>
            <div className={s.wrapperDescription}>
              <div>
                <p>{user.name}</p>
                <p>{user.status ? user.status : ""}</p>
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