import {usersApi} from "../api/apiData";


let FOLLOW_ACTION = "FOLLOW-ACTION";
let SET_USER = "SET-USER";
let SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
let SET_TOTAL_COUNT = "SET-TOTAL-COUNT";
let SET_IS_FETCHING = "SET-IS-FETCHING";
let SET_FOLLOWING_IS_PROGRESS = "SET-FOLLOWING-IS-PROGRESS"

let initialState = {
  users: [],
  pageSize: 20,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching:false,
  followingInProgress:[],
};

const UsersPageReducer = (state = initialState, action) => {
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
      return {...state,currentPage: action.currentPage}
    }
    case SET_TOTAL_COUNT : {
      return {...state,totalUsersCount: action.totalCount}
    }
    case SET_IS_FETCHING : {
      return {...state,isFetching: action.isFetch}
    }
    case SET_FOLLOWING_IS_PROGRESS:{
      return {...state,followingInProgress: action.isProgress
          ?[...state.followingInProgress,action.userId]
          :state.followingInProgress.filter(id => id !== action.userId)
      }
    }
    default :
      return state;
  }
};
export const isFollow = (userId) => {
  return {
    type: FOLLOW_ACTION,
    userId: userId,
  }
}
export const setUsers = (user) => ({type: SET_USER, user});

export const currentPages = (currentPage) => ({type:SET_CURRENT_PAGE,currentPage});
export const setTotalUsersCount = (totalCount) => ({type:SET_TOTAL_COUNT,totalCount});
export const isFetchin = (isFetch) => ({type:SET_IS_FETCHING,isFetch});

export const isFollowingProgress = (isProgress,userId) => ({type:SET_FOLLOWING_IS_PROGRESS,isProgress,userId});

export const getUsersThunkCreator = (current,pageSize)  => {
  return async (dispatch) => {
    dispatch(isFetchin(true))
    let data = await usersApi.getUsersPage(current, pageSize)

        dispatch(isFetchin(false))
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
  }
}
export const getPageThunkCreator = (page,pageSize) => {
  return async (dispatch) => {
    dispatch(isFetchin(true))
    dispatch(currentPages(page))

      let data = await usersApi.getUsersPage(page,pageSize)

          dispatch(isFetchin(false))
          dispatch(setUsers(data.items))

  }
}

export const followThunkCreator = (userId,callback) => {
  return async (dispatch) => {
    dispatch(isFollowingProgress(true,userId))
    let data = await callback

        if (data.resultCode === 0) {
          dispatch(isFollow(userId))
        }
        dispatch(isFollowingProgress(false,userId))
  }
}

export default UsersPageReducer;