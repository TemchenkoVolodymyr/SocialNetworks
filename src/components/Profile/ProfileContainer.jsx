import React, {Component, useEffect} from "react";
import Profile from "./Profile";
import {connect, useSelector} from "react-redux";
import {
  getProfileThinkCreator, SetProfileStatus,
  setProfileStatusThinkCreator,
  SetUserProfile,
  updateProfileStatusThinkCreator
} from "../../redux/profilePageReducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {withProfileComponent} from "../../HOC/withProfileComponent";
import {compose} from "redux";
import {getMyCurrentId, getProfileSuper, getStatus} from "../../redux/selector/profileSelector";
import {getProfile} from "../../api/apiData";
import {editAuthUserProfile, getDataAuthorization, saveAvatarThinkCreator} from "../../redux/AuthorizationReducer";


const ProfileContainer = (props) => {


  let {
    router, myCurrentId, getProfileThinkCreator, setProfileStatusThinkCreator, status, profile,
    updateProfileStatusThinkCreator, dispatch, saveAvatarThinkCreator, photos, getDataAuthorization,editAuthUserProfile
  } = props
  let currentId = router.params.profileId

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

export let withRouter = (Component) => {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{location, navigate, params}}
      />
    );
  }

  return ComponentWithRouterProp;
}

let mapStateToProps = (state) => ({
  profile: getProfileSuper(state),
  status: getStatus(state),
  myCurrentId: getMyCurrentId(state),
  photos: state.authorization.image
})


export default compose(    //compose это функция от redux, она выполняет роль конвеера. Первая функция в очереди  это последння переданная (тут первая функция сработает withProfileComponent)
  //Сработает она,потом свой результат передаст в withRouter , после,сработает withRouter и свой результат передаст в connect
  connect(mapStateToProps, {
    SetUserProfile,
    getProfileThinkCreator,
    setProfileStatusThinkCreator,
    updateProfileStatusThinkCreator,
    saveAvatarThinkCreator,
    getDataAuthorization,
    editAuthUserProfile
  }),
  withRouter,
  withProfileComponent //это HOC, внутрь этой функции(может быть классом) мы забрасываем параметром Компоненту которую хотим что бы она отрисовала когда сработает условие
)(ProfileContainer)

