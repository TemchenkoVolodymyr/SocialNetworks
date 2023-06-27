import React from "react";
import Description from "./Description/Desciption";
import ProfileImg from "./ProfileImg/ProfileImg";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";


const ProfilesInfo = (props) => {


  return (
    <div>
      <ProfileImg url="https://th.bing.com/th/id/OIP.NbfPECA64xbFnmW58MbWDQHaEo?pid=ImgDet&rs=1" profile={props.profile}
                  isOwner={props.isOwner}
                  saveAvatar={props.saveAvatar} getProfile={props.getProfile}
                  myId={props.myId} myAvatar={props.myAvatar} getAuth={props.getAuth} editProfile={props.editProfile}/>
      <Description
        url="https://th.bing.com/th/id/R.366bf8327222c6eca8d07a3e7ec5ef99?rik=pIAJmhmrA5hb8g&pid=ImgRaw&r=0"/>
      <ProfileStatusWithHooks status={props.status} profileId={props.profileId} updateStatus={props.updateStatus}/>
    </div>
  )
}

export default ProfilesInfo;