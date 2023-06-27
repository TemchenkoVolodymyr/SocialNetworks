import {authorization, getProfile, loadAvatar, Me, usersApi} from "../api/apiData";
import {
  LOG_OUT_DATA,
  SAVE_AVATAR,
  SEND_LOGIN_DATA,
  setMyCurrentId,
  SetUserProfile
} from "./profilePageReducer";
import cart from "../assets/cart.png"

let SET_USER_DATA = "SET-USER-DATA";
let SET_USER_IMAGE = "SET-USER-IMAGE"

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  image: "",
};

const AuthorizationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        userId: action.userId,
        email: action.email,
        login: action.login,
        isAuth: true,
      }
    case SET_USER_IMAGE:
      return {
        ...state,
        image: action.image
      }
    case LOG_OUT_DATA:
      return {
        ...state,
        isAuth: false
      }
    case SEND_LOGIN_DATA:
      return {
        ...state,
        isAuth: true
      }
    case SAVE_AVATAR : {
      return {
        ...state, image: action.photo
      }
    }
    default:
      return state
  }
}

export const userDataLoginAction = (userId, email, login) => {
  return {
    type: SET_USER_DATA,
    userId: userId,
    email: email,
    login: login,
  }
}
export const userLoginImageAction = (photo) => {
  return {
    type: SET_USER_IMAGE,
    image: photo
  }
}
export const saveMainPhoto = (photo) => {
  return {
    type: SAVE_AVATAR,
    photo: photo,
  }
}


export const saveAvatarThinkCreator = (photo) => {
  console.log(photo)
  return async (dispatch) => {
    let response = await loadAvatar.setPhoto(photo)
    if (response.resultCode === 0) {
      dispatch(saveMainPhoto(response.data.photos.small))
    }
  }
}
export const getDataAuthorization = () => async (dispatch) => {
  let response = await Me.authMe()
  if (response.resultCode === 0) {

    dispatch(userDataLoginAction(response.data.id, response.data.email, response.data.login))
    dispatch(setMyCurrentId(response.data.id))
  }
  let data = await getProfile.getProfile(response.data.id)

  if (data.photos.small === null) {
    dispatch(userLoginImageAction(cart))
  } else {
    dispatch(userLoginImageAction(data.photos.small))
  }


}

export const editAuthUserProfile =  (data,id)  => async (dispatch) =>  {

  let response = await authorization.editProfile(data)
  if (response.resultCode === 0) {
    let data = await usersApi.getUserProfile(id)
    dispatch(SetUserProfile(data))
  }
}
export default AuthorizationReducer