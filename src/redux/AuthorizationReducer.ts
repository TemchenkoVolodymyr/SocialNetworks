import {authorization, DataEditProfile, getProfile, loadAvatar, Me, ResultCodes, usersApi} from "../api/apiData";
import {
    LOG_OUT_DATA, ProfileType,
    SAVE_AVATAR,
    SEND_LOGIN_DATA, SetMyCurrentID,
    setMyCurrentId,
    SetUserProfile, SetUserProfileType
} from "./profilePageReducer.ts";
import {Dispatch} from "redux";


let SET_USER_DATA = "SET-USER-DATA";
let SET_USER_IMAGE = "SET-USER-IMAGE"

let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    image: "" as string | null,
};

export type InitialStateType = typeof initialState

const AuthorizationReducer = (state = initialState, action): InitialStateType => {
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

type UserDataLoginActionType = {
    type: typeof SET_USER_DATA,
    userId: Number | String,
    email: String,
    login: String,


}

export const userDataLoginAction = (userId: Number, email: String, login: String): UserDataLoginActionType => { /* UserDataLoginActionType это TypeScript синтаксис ,
   мы указываем тип данных которые приходят в наш LoginAction */
    return {
        type: SET_USER_DATA,
        userId: userId,
        email: email,
        login: login,
    }
}

export type UserLoginImageActionType = {
    type: typeof SET_USER_IMAGE,
    image: String

}
export const userLoginImageAction = (photo): UserLoginImageActionType => {
    return {
        type: SET_USER_IMAGE,
        image: photo
    }
}


type SaveMainPhotoType = {
    type: typeof SAVE_AVATAR,
    photo: String
}
export const saveMainPhoto = (photo): SaveMainPhotoType => {
    return {
        type: SAVE_AVATAR,
        photo: photo,
    }
}


type ActionsType =
    SaveMainPhotoType
    | UserLoginImageActionType
    | UserDataLoginActionType
    | SetMyCurrentID
    | SetUserProfileType
type DispatchType = Dispatch<ActionsType>

type PhotoType = {
    lastModified: number,
    lastModifiedDate: Date,
    name: String,
    size: number
    type: String
    webkitRelativePath: string
}
export const saveAvatarThinkCreator = (photo: PhotoType) => {

    return async (dispatch: DispatchType) => {
        let response = await loadAvatar.setPhoto(photo)
        if (response.resultCode === ResultCodes.Success) {
            dispatch(saveMainPhoto(response.data.photos.small))
        }
    }
}
export const getDataAuthorization = () => async (dispatch: DispatchType) => {
    let response = await Me.authMe()
    let {id, email, login} = response.data

    if (response.resultCode === ResultCodes.Success) {
        dispatch(userDataLoginAction(id, email, login))
        dispatch(setMyCurrentId(id))
    }
    let data = await getProfile.getProfile(id)

    if (data.photos.small === null) {
        // dispatch(userLoginImageAction(cart))
    } else {
        dispatch(userLoginImageAction(data.photos.small))
    }


}

export const editAuthUserProfile = (data: DataEditProfile, id: number) => async (dispatch: DispatchType) => {
    let response = await authorization.editProfile(data)

    if (response.resultCode === ResultCodes.Success) {
        let dataProfile = await usersApi.getUserProfile(id)
        dispatch(SetUserProfile(dataProfile))
    }
}
export default AuthorizationReducer