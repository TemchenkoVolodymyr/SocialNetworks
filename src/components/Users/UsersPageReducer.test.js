import UsersPageReducer from "../../redux/UsersPageReducer";
import {isFollow} from "../../redux/UsersPageReducer";


let state = {
  users: [{id:6,followed:true}],
  pageSize: 20,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching:false,
  followingInProgress:[],
};


test('users followed value should be false" ', () => {

  let action = isFollow(6)
  let isFollow = UsersPageReducer(state, action)

  expect(state.users.map(user => {
    if(user.id === action.userId) {
      user.followed = false
    }

  })).toStrictEqual(isFollow.users.map(user => {
    if(user.id === action.userId) {
      return {...user,followed:false}
    }
  }))
});


