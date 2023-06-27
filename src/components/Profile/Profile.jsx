import React from "react";
import s from "./Profile.module.css";
import ProfilesInfo from "./Profileinfo/Profileinfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {
  return (
    <div>
      <ProfilesInfo profile={props.profile} status={props.status} profileId={props.profileId}
                    isOwner={props.isOwner} myId={props.myId} myAvatar={props.myAvatar} getAuth={props.getAuth}/>
      <MyPostsContainer/>
    </div>
  )
}

export default Profile;