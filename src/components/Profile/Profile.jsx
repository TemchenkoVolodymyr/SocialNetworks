import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfilesInfo from "./Profileinfo/Profileinfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileUser from "../Users/ProfileUsers/Profile";
import {Navigate} from "react-router-dom";
import {getProfile} from "../../api/apiData";


const Profile = (props) => {
  return (
    <div>
      <ProfilesInfo profile={props.profile} status={props.status} profileId={props.profileId}
                    updateStatus={props.updateStatus} isOwner={props.isOwner} saveAvatar={props.saveAvatar}
                    getProfile={props.getProfile} myId={props.myId} myAvatar={props.myAvatar} getAuth={props.getAuth} editProfile={props.editProfile}/>
      <MyPostsContainer/>
    </div>
  )
}

export default Profile;