import {authorization, getProfile, ResultCodes, usersApi} from "../api/apiData";
import {stopSubmit} from "redux-form";
import {type} from "os";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {AppReducerType} from "./reduxe-store";

const SHOW_NEW_POST_TEXT = "SHOW-NEW-POST-TEXT";
const ADD_NEW_POST = "ADD-NEW-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_PROFILE_STATUS = "SET_PROFILE_STATUS";
const UPDATE_PROFILE_STATUS = "UPDATE_PROFILE_STATUS";
export const SEND_LOGIN_DATA = "SEND_LOGIN_DATA";
export const LOG_OUT_DATA = "LOG_OUT_DATA"

export const SET_MY_ID = "SET_MY_ID"

export const SAVE_AVATAR = 'SAVE_AVATAR '

type postDataType = {
  img:String,
  message:String,
  like:number
}
export type ContactsType = {
  github:string  | null
  vk: string | null
  facebook: string | null
  instagram: string | null
  twitter: string | null
  website: string | null
  youtube: string | null
  mainLink:string | null
}
type PhotosType = {
  small : string | null
  large : string | null
}

export type ProfileType = {
  userId: number
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  contacts:ContactsType
  photos:PhotosType
}



let initialState  = {
  postsData:  [
    {
      img: "https://th.bing.com/th/id/OIP.q3YWosr4nPpGqfHYbax2iAHaGv?pid=ImgDet&rs=1",
      message: "Hello, i want to go in my home",
      like: 20
    }
  ] as Array<postDataType>,
  newPostText: null as string | null,
  profile: null as ProfileType | null,
  status: "",
  loginError: false as boolean,
  myCurrentId: null  as string | null,

}

export type InitialStateType = typeof initialState
const ProfilePageReducer = (state = initialState, action : any):InitialStateType => {
  switch (action.type) {
    case ADD_NEW_POST: {
      return {
        ...state,
        postsData: [...state.postsData, {
          message: state.newPostText,
          like: 2,
          img: "https://th.bing.com/th/id/R.b446bb7417b3d13d7560073e2721ddb1?rik=iH44jmW9WhB3CA&riu=http%3a%2f%2fwww.clker.com%2fcliparts%2fb%2f6%2f8%2fc%2f12577128611938882197img_0514-hi.png&ehk=a95ULIkGyjKViIQ5JZyA0cG%2b%2bJ%2bX1OP%2byqojoau5MvU%3d&risl=&pid=ImgRaw&r=0"
        }],
        newPostText: ""
      }
    }
    case SHOW_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.text
      }
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      }
    }
    case SET_PROFILE_STATUS: {
      return {
        ...state,
        status: action.status
      }
    }
    case SET_MY_ID: {
      return {
        ...state,
        myCurrentId: action.id
      }
    }
    default:
      return state
  }
}

type ShowNewPostText = {
  type : typeof SHOW_NEW_POST_TEXT,
  text:String
}
export const ShowNewPostText = (text) : ShowNewPostText => {

  return {
    type: SHOW_NEW_POST_TEXT,
    text: text,
  }
}

type AddNewPostType = {
  type : typeof ADD_NEW_POST
}
export const AddNewPost = (): AddNewPostType => {
  return {
    type: ADD_NEW_POST,
  }
}
export type SetUserProfileType = {
  type : typeof SET_USER_PROFILE,
  profile : null | {}
}
export const SetUserProfile = (profile) : SetUserProfileType => ({type: SET_USER_PROFILE, profile})

export type SetProfileStatus = {
  type : typeof SET_PROFILE_STATUS,
  status:String
}
export const SetProfileStatus = (status) : SetProfileStatus => {
  return {
    type: SET_PROFILE_STATUS,
    status: status
  }
}

type LoginDataType = {
  type : typeof SEND_LOGIN_DATA
}
export const loginData = () : LoginDataType => {
  return {
    type: SEND_LOGIN_DATA,
  }
}

type LogoutType = {
  type : typeof LOG_OUT_DATA
}
export const logOut = () : LogoutType => {
  return {
    type: LOG_OUT_DATA,
  }
}


export type SetMyCurrentID = {
  type : typeof SET_MY_ID,
  id:Number
}
export const setMyCurrentId = (id):SetMyCurrentID => {
  return {
    type: SET_MY_ID,
    id: id
  }
}

type ActionsTypes = SetMyCurrentID | LogoutType | LoginDataType | SetProfileStatus | SetUserProfileType | AddNewPostType | ShowNewPostText
type DispatchTypes = Dispatch<ActionsTypes>
export const getProfileThinkCreator = (userId : number) => {
  return async (dispatch : DispatchTypes) => {
    let data = await usersApi.getUserProfile(userId)
    dispatch(SetUserProfile(data))
  }
}

export const setProfileStatusThinkCreator = (userId : number) : MyThunkActionType => {
  return async (dispatch : DispatchTypes) => {
    let data = await getProfile.getStatusProfile(userId)
    dispatch(SetProfileStatus(data))
  }
}
type MyThunkActionType = ThunkAction<Promise<void>, AppReducerType, unknown, ActionsTypes>

export const updateProfileStatusThinkCreator = (status : string,id : number) : MyThunkActionType => {
  return async (dispatch ,getState) => {
    let response = await getProfile.updateStatusProfile(status)
    if (response.data.resultCode === ResultCodes.Success) {
      await dispatch(setProfileStatusThinkCreator(id))
    }
  }
}

export const setLoginData = (data : any) => {
  return async (dispatch : DispatchTypes) => {
    let response = await authorization.login(data)
    if (response.resultCode === ResultCodes.Success) {
      dispatch(loginData())
    } else {
      let errorMessage = (response.messages.length > 1 ? "Invalid correct data" : response.messages[0])
      let actionError = stopSubmit("login", {_error: errorMessage})  // это метод который находится в redux-form, с помощю него мы можем получать ошибку которая придет от сервера
      dispatch(actionError)
    }

  }
}

export const deleteLogin = () => {
  return async (dispatch : DispatchTypes) => {
    let response = await authorization.logOut()
    if (response.resultCode === ResultCodes.Success) {
      dispatch(logOut())
    }
  }
}

export default ProfilePageReducer;