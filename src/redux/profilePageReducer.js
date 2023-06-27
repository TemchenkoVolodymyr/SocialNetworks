import {authorization, getProfile, usersApi} from "../api/apiData";
import {stopSubmit} from "redux-form";

const SHOW_NEW_POST_TEXT = "SHOW-NEW-POST-TEXT";
const ADD_NEW_POST = "ADD-NEW-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_PROFILE_STATUS = "SET_PROFILE_STATUS";
const UPDATE_PROFILE_STATUS = "UPDATE_PROFILE_STATUS";
export const SEND_LOGIN_DATA = "SEND_LOGIN_DATA";
export const LOG_OUT_DATA = "LOG_OUT_DATA"

export const SET_MY_ID = "SET_MY_ID"

export const SAVE_AVATAR = 'SAVE_AVATAR '

let initialState = {
  postsData: [
    {
      img: "https://th.bing.com/th/id/OIP.q3YWosr4nPpGqfHYbax2iAHaGv?pid=ImgDet&rs=1",
      message: "Hello, i want to go in my home",
      like: 20
    },
    {
      img: "https://th.bing.com/th/id/OIP.q3YWosr4nPpGqfHYbax2iAHaGv?pid=ImgDet&rs=1",
      message: "It`s my first comment",
      like: 10
    },
    {
      img: "https://th.bing.com/th/id/OIP.q3YWosr4nPpGqfHYbax2iAHaGv?pid=ImgDet&rs=1",
      message: "Hello, i want to go in my home",
      like: 20
    },
    {
      img: "https://th.bing.com/th/id/OIP.q3YWosr4nPpGqfHYbax2iAHaGv?pid=ImgDet&rs=1",
      message: "It`s my first comment",
      like: 10
    },
    {
      img: "https://th.bing.com/th/id/OIP.q3YWosr4nPpGqfHYbax2iAHaGv?pid=ImgDet&rs=1",
      message: "Hello, i want to go in my home",
      like: 20
    }
  ],
  newPostText: "",
  profile: null,
  status: "",
  loginError: false,
  myCurrentId: "",

}
const ProfilePageReducer = (state = initialState, action) => {
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
      console.log(action.profile)
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


export const ShowNewPostText = (text) => {
  console.log(text)
  return {
    type: SHOW_NEW_POST_TEXT,
    text: text,
  }
}

export const AddNewPost = () => {
  return {
    type: ADD_NEW_POST,
  }
}
export const SetUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const SetProfileStatus = (status) => {
  return {
    type: SET_PROFILE_STATUS,
    status: status
  }
}
export const loginData = () => {
  return {
    type: SEND_LOGIN_DATA,
  }
}
export const logOut = () => {
  return {
    type: LOG_OUT_DATA,
  }
}

export const setMyCurrentId = (id) => {
  return {
    type: SET_MY_ID,
    id: id
  }
}

// делаю рефактор кода , добавляю место .then    async await
// что бы await работал надо перед функцией вызвать async
export const getProfileThinkCreator = (userId) => {
  return async (dispatch) => {
    let data = await usersApi.getUserProfile(userId)
    dispatch(SetUserProfile(data))
  }
}


export const setProfileStatusThinkCreator = (userId) => {
  return async (dispatch) => {
    let data = await getProfile.getStatusProfile(userId)
    dispatch(SetProfileStatus(data))
  }
}

export const updateProfileStatusThinkCreator = (status) => {
  return async (dispatch) => {
    let response = await getProfile.updateStatusProfile(status)
    if (response.data.resultCode === 0) {
      dispatch(SetProfileStatus(status))
    }
  }
}

export const setLoginData = (data) => {
  return async (dispatch) => {
    let response = await authorization.login(data)
    if (response.resultCode === 0) {
      dispatch(loginData())
    } else {
      let errorMessage = (response.messages.length > 1 ? "Invalid correct data" : response.messages[0])
      let actionError = stopSubmit("login", {_error: errorMessage})  // это метод который находится в redux-form, с помощю него мы можем получать ошибку которая придет от сервера
      dispatch(actionError)
    }

  }
}

export const deleteLogin = () => {
  return async (dispatch) => {
    let response = await authorization.logOut()
    if (response.resultCode === 0) {
      dispatch(logOut())
    }
  }
}

export default ProfilePageReducer;