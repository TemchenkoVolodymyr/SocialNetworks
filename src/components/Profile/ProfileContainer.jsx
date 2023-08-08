import React, {useEffect} from "react";
import Profile from "./Profile";
import {useDispatch, useSelector} from "react-redux";
import {
  getProfileThinkCreator, SetProfileStatus,
  setProfileStatusThinkCreator,
} from "../../redux/profilePageReducer.ts";
import {useParams} from "react-router-dom";
import {getProfile} from "../../api/apiData.ts";


const ProfileContainer = (props) => {

  let currentId = useParams().profileId

  const profile = useSelector((state) => state.profilePage.profile);
  const status = useSelector((state) => state.profilePage.status.data);
  const myCurrentId = useSelector((state) => state.profilePage.myCurrentId);
  const photos = useSelector((state) => state.authorization.image)
  const dispatch = useDispatch()

  useEffect(() => {

    getProfile.getStatusProfile(myCurrentId)
      .then(response => {
        dispatch(SetProfileStatus(response.data))
      })

    if (!currentId) {
      currentId = myCurrentId
    }

    dispatch(getProfileThinkCreator(currentId));
    dispatch(setProfileStatusThinkCreator(currentId));

  }, [currentId])

  return (
    <div>
      <Profile {...props} status={status} profile={profile}
               profileId={myCurrentId} isOwner={currentId}
               myId={myCurrentId} myAvatar={photos}
      />
    </div>
  )

}

export default ProfileContainer

