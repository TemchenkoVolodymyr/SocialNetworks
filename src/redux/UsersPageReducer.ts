import {ResultCodes, usersApi} from "../api/apiData.ts";
import {UsersType} from "../types/types";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {AppReducerType, InferValueTypes} from "./reduxe-store";



let initialState = {
    users: [] as Array<UsersType>,
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>,
};

export type InitialStateType = typeof initialState

const UsersPageReducer = (state = initialState, action : ActionsTypesInfer): InitialStateType => {
    switch (action.type) {
        case'FOLLOW_ACTION' : {
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
        case "SET_USER" : {

            return {...state, users: [...action.user]}
        }
        case "SET_CURRENT_PAGE" : {
            return {...state, currentPage: action.currentPage}
        }
        case "SET_TOTAL_COUNT" : {
            return {...state, totalUsersCount: action.totalCount}
        }
        case "SET_IS_FETCHING" : {

            return {...state, isFetching: action.isFetch}
        }
        case "SET_FOLLOWING_IS_PROGRESS": {
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


type ActionsTypesInfer = ReturnType<InferValueTypes<typeof actions >>

const actions = {
      isFollow : (userId : number) => {
        return {
            type: "FOLLOW_ACTION",
            userId: userId,
        } as const
    } ,
      setUsers : (user : Array<UsersType>) => ({type: "SET_USER", user} as const),
      currentPages : (currentPage: number) => ({type: "SET_CURRENT_PAGE", currentPage} as const),
      setTotalUsersCount : (totalCount: number) => ({type: "SET_TOTAL_COUNT", totalCount} as const),
      isFetchin : (isFetch: boolean) => ({type: "SET_IS_FETCHING", isFetch} as const),
    isFollowingProgress : (isProgress :boolean, userId : number) => ({
        type: "SET_FOLLOWING_IS_PROGRESS",
        isProgress,
        userId

}),
}





type DispatchType = Dispatch<ActionsTypesInfer>
type ThunkTypes = ThunkAction<Promise<void>, AppReducerType, unknown, ActionsTypesInfer>


export const getUsersThunkCreator = (current:number , pageSize : number ) : ThunkTypes => {
    return async (dispatch) => {
        dispatch(actions.isFetchin(true))
        let data = await usersApi.getUsersPage(current, pageSize)

        dispatch(actions.isFetchin(false))
        dispatch(actions.setUsers(data.items));
        dispatch(actions.setTotalUsersCount(data.totalCount));
    }
}


export const getPageThunkCreator = (page : number, pageSize : number) : ThunkTypes => {
    return async (dispatch: DispatchType) => {
        dispatch(actions.isFetchin(true))
        dispatch(actions.currentPages(page))
        let data = await usersApi.getUsersPage(page, pageSize)

        dispatch(actions.isFetchin(false))
        dispatch(actions.setUsers(data.items))

    }
}



export const followThunkCreator = (userId : number, callback) : ThunkTypes => {
    return async (dispatch: DispatchType) => {

        dispatch(actions.isFollowingProgress(true, userId))
        let data = await callback

        if (data.resultCode === ResultCodes.Success) {
            dispatch(actions.isFollow(userId))
        }
        dispatch(actions.isFollowingProgress(false, userId))
    }
}

export default UsersPageReducer;