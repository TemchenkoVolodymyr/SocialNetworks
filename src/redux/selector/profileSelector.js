// npm install reselect  , что бы установить библиотеку reselect
// reselect получает с   mapStateToProps нужные данные ,если те данные совпадают с теми которые reselect получил раньше то он не делает rerender а отдате те данные который у него были
// для этого достаем createSelector
import {createSelector} from "reselect";

const getProfileSelector = (state) => {
  return state.profilePage.profile
}

export const getProfileSuper = createSelector(getProfileSelector,(profile) => {
  return profile
})
// reselect создан для более тяжелых операций , перечет массива , данные большие и тд...


export const getStatus = (state) => {
  // console.log(state.profilePage.status.data)
  return state.profilePage.status.data
}

export const getMyCurrentId = (state) => {
  return  state.profilePage.myCurrentId
}


