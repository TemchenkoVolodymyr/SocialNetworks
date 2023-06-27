import React from "react";
import {connect} from "react-redux";
import {
  setTotalUsersCount,
  isFollowingProgress,
  getUsersThunkCreator,
  getPageThunkCreator,
  followThunkCreator,
} from "../../redux/UsersPageReducer";
import Users from "./Users";
import Loader from "../Loader/Loader";
import {compose} from "redux";
import {
  getCurrent,
  getIsFetching,
  getIsProgress,
  getPageSize,
  getTotalUsersCount,
  getUsers
} from "../../redux/selector/usersSelector";

class UsersContainerAPI extends React.Component {

  componentDidMount() {  //  method  life cycle  . Когда происходит переход на страницу то делает axios запрос и отдает их в setUsers
    this.props.getUsersThunkCreator(this.props.current, this.props.pageSize)
  }

  currentPageData = (page) => {
    this.props.getPageThunkCreator(page, this.props.pageSize)
  };

  render() {
    return <>
      {this.props.isFetching === true ? <Loader/> : null}
      <div>
        <Users data={this.props} currentPageData={this.currentPageData}
               isProgress={this.props.isProgress} followThunkCreator={this.props.followThunkCreator}
               unFollowThunkCreator={this.props.unFollowThunkCreator}
        />
      </div>
    </>
  }
}

let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    current: getCurrent(state),
    isFetching: getIsFetching(state),
    isProgress: getIsProgress(state),
  }
}
export default compose(
  connect(mapStateToProps, {
    setTotalUsersCount,
    isFollowingProgress,
    getUsersThunkCreator,
    getPageThunkCreator,
    followThunkCreator,
  })
  (UsersContainerAPI));