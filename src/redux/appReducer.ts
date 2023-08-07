
import {getDataAuthorization, UserLoginImageActionType} from "./AuthorizationReducer.ts";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {AppReducerType} from "./reduxe-store";
import {ProfileType, SetMyCurrentID, SetProfileStatus, SetUserProfile} from "./profilePageReducer";

let SET_INITIALIZATION = "SET_INITIALIZATION";


// type InitialStateType = {
//     initialization:boolean
// }

let initialState  = {
  initialization : false
};

type InitialStateType = typeof initialState



export type ActionsTypes = InitializationSuccessType  | UserLoginImageActionType | SetMyCurrentID


const AppReducer = (state = initialState, action : ActionsTypes) :InitialStateType => {
  switch (action.type) {
    case SET_INITIALIZATION:
      return {
        ...state,
       initialization: true
      }
    default: return state
  }
}


type InitializationSuccessType = {
    type : typeof SET_INITIALIZATION
}
export const initializationSuccess = () : InitializationSuccessType => {
  return {
    type:SET_INITIALIZATION,
  }
}
export type DispatchType = Dispatch<ActionsTypes>

type ThunksTypes = ThunkAction<Promise<void>,
    AppReducerType, unknown, ActionsTypes>

export const initializeApp = () : ThunksTypes => {
  return async  (dispatch) => {
   let promise = dispatch(getDataAuthorization())
    Promise.all([promise]).then(() => {
      dispatch(initializationSuccess())
    })

  }
}
export default AppReducer