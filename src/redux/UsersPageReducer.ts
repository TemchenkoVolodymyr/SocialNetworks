import {ResultCodes, usersApi} from "../api/apiData";
import {UsersType} from "../types/types";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {AppReducerType} from "./reduxe-store";
let FOLLOW_ACTION = "FOLLOW-ACTION";
let SET_USER = "SET-USER";
let SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
let SET_TOTAL_COUNT = "SET-TOTAL-COUNT";
let SET_IS_FETCHING = "SET-IS-FETCHING";
let SET_FOLLOWING_IS_PROGRESS = "SET-FOLLOWING-IS-PROGRESS"


let initialState = {
    users: [] as Array<UsersType>,
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>,
};

export type InitialStateType = typeof initialState

const UsersPageReducer = (state = initialState, action : ActionsType): InitialStateType => {
    switch (action.type) {
        case FOLLOW_ACTION: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: !user.followed};
                    }
                    return user
                })
            }
        }
        case SET_USER : {

            return {...state, users: [...action.user]}
        }
        case SET_CURRENT_PAGE : {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_COUNT : {
            return {...state, totalUsersCount: action.totalCount}
        }
        case SET_IS_FETCHING : {
            // @ts-ignore
            return {...state, isFetching: action.isFetch}
        }
        case SET_FOLLOWING_IS_PROGRESS: {
            return {
                ...state, followingInProgress: action.isProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default :
            return state;
    }
};



type ActionsType = isFollowType | setUsersType | CurrentPageType | SetTotalUsersCountType | isFetchinType |  IsFollowingProgressType

export type isFollowType = {
    type: typeof FOLLOW_ACTION,
    userId: number
}

export const isFollow = (userId : number): isFollowType => {
    return {
        type: FOLLOW_ACTION,
        userId: userId,
    }
}

export type setUsersType = {
    type: typeof SET_USER,
    user: Array<UsersType>
}
export const setUsers = (user : Array<UsersType>): setUsersType => ({type: SET_USER, user});

export type CurrentPageType = {
    type: typeof SET_CURRENT_PAGE,
    currentPage: number
}

export const currentPages = (currentPage: number): CurrentPageType => ({type: SET_CURRENT_PAGE, currentPage});

export type SetTotalUsersCountType = {
    type: typeof SET_TOTAL_COUNT,
    totalCount: number
}
export const setTotalUsersCount = (totalCount: number): SetTotalUsersCountType => ({type: SET_TOTAL_COUNT, totalCount});

export type isFetchinType = {
    type: typeof SET_IS_FETCHING,
    isFetch: boolean
}
export const isFetchin = (isFetch: boolean): isFetchinType => ({type: SET_IS_FETCHING, isFetch});

export type IsFollowingProgressType = {
    type: typeof SET_FOLLOWING_IS_PROGRESS,
    isProgress: boolean,
    userId: number
}

export const isFollowingProgress = (isProgress :boolean, userId : number): IsFollowingProgressType => ({
    type: SET_FOLLOWING_IS_PROGRESS,
    isProgress,
    userId
});

type DispatchType = Dispatch<ActionsType>
type ThunkTypes = ThunkAction<Promise<void>, AppReducerType, unknown, ActionsType>


export const getUsersThunkCreator = (current:number , pageSize : number ) : ThunkTypes => {
    return async (dispatch) => {
        dispatch(isFetchin(true))
        let data = await usersApi.getUsersPage(current, pageSize)

        dispatch(isFetchin(false))
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    }
}


export const getPageThunkCreator = (page : number, pageSize : number) : ThunkTypes => {
    return async (dispatch: DispatchType) => {
        dispatch(isFetchin(true))
        dispatch(currentPages(page))
        let data = await usersApi.getUsersPage(page, pageSize)

        dispatch(isFetchin(false))
        dispatch(setUsers(data.items))

    }
}



export const followThunkCreator = (userId : number, callback) : ThunkTypes => {
    return async (dispatch: DispatchType) => {

        dispatch(isFollowingProgress(true, userId))
        let data = await callback

        if (data.resultCode === ResultCodes.Success) {
            dispatch(isFollow(userId))
        }
        dispatch(isFollowingProgress(false, userId))
    }
}

export default UsersPageReducer;