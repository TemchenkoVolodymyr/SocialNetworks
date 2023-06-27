import React, { useEffect} from "react";
import Profile from "./Profile";
import {connect } from "react-redux";
import {
  getProfileThinkCreator, SetProfileStatus,
  setProfileStatusThinkCreator,
  SetUserProfile,
  updateProfileStatusThinkCreator
} from "../../redux/profilePageReducer";
import {useParams} from "react-router-dom";

import {compose} from "redux";
import {getMyCurrentId, getProfileSuper, getStatus} from "../../redux/selector/profileSelector";
import {getProfile} from "../../api/apiData";
import {editAuthUserProfile, getDataAuthorization, saveAvatarThinkCreator} from "../../redux/AuthorizationReducer";


const ProfileContainer = (props) => {

  let currentId = useParams().profileId

  let { myCurrentId, getProfileThinkCreator, setProfileStatusThinkCreator, status, profile,
    updateProfileStatusThinkCreator, dispatch, saveAvatarThinkCreator, photos, getDataAuthorization,editAuthUserProfile
  } = props


  useEffect(() => {

    getProfile.getStatusProfile(myCurrentId)
      .then(response => {
        dispatch(SetProfileStatus(response.data))
      })


    if (!currentId) {
      currentId = myCurrentId
    }
    getProfileThinkCreator(currentId);
    setProfileStatusThinkCreator(currentId)

  }, [currentId])

  return (
    <div>
      <Profile {...props} status={status} profile={profile}
               profileId={myCurrentId} updateStatus={updateProfileStatusThinkCreator} isOwner={currentId}
               saveAvatar={saveAvatarThinkCreator} getProfile={getProfileThinkCreator} myId={myCurrentId}
               myAvatar={photos} getAuth={getDataAuthorization} editProfile={editAuthUserProfile}
      />
    </div>
  )

}


let mapStateToProps = (state) => ({
  profile: getProfileSuper(state),
  status: getStatus(state),
  myCurrentId: getMyCurrentId(state),
  photos: state.authorization.image
})


export default compose(
  connect(mapStateToProps, {
    SetUserProfile,
    getProfileThinkCreator,
    setProfileStatusThinkCreator,
    updateProfileStatusThinkCreator,
    saveAvatarThinkCreator,
    getDataAuthorization,
    editAuthUserProfile
  }),
)(ProfileContainer)

