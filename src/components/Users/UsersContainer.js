import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
  getUsersThunkCreator,
  getPageThunkCreator,
  followThunkCreator,
} from "../../redux/UsersPageReducer";
import Users from "./Users";
import Loader from "../Loader/Loader";


const UsersContainer = () => {

  const users = useSelector((state) => state.usersPage.users);
  const pageSize = useSelector((state) => state.usersPage.pageSize)
  const totalUsersCount = useSelector((state) => state.usersPage.totalUsersCount);
  const current = useSelector((state) => state.usersPage.currentPage);
  const isFetching = useSelector((state) => state.usersPage.isFetching)
  const isProgress = useSelector((state) => state.usersPage.followingInProgress)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsersThunkCreator(current, pageSize))
  }, [current,pageSize])

  const currentPageData = (page) => {
    dispatch(getPageThunkCreator(page,pageSize))
  };
  return (
    <>
      {isFetching === true ? <Loader/> : null}
      <div>
        <Users user={users} totalCount={totalUsersCount} currentPageData={currentPageData}
               isProgress={isProgress} followThunkCreator={followThunkCreator}
               pageSize={pageSize} current={current}
        />
      </div>
    </>
  )
}
export default UsersContainer