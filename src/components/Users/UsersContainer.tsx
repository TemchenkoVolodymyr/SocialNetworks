import * as React from "react"
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    getUsersThunkCreator,
    getPageThunkCreator,
    followThunkCreator,
} from "../../redux/UsersPageReducer.ts";
import Users from "./Users.tsx";
import Loader from "../Loader/Loader";
import s from './UsersContainer.module.scss'
import {UsersType} from "../../types/types";


interface UsersState {
    usersPage: {
        users: Array<UsersType>
    }
}

interface PageSizeState {
    usersPage: {
        pageSize: number
    }
}

interface TotalUsersCountState {
    usersPage: {
        totalUsersCount: number
    }
}

interface CurrentPageState {
    usersPage: {
        currentPage: any
    }
}

interface IsFetchingState {
    usersPage: {
        isFetching: boolean
    }
}
interface IsProgressState {
    usersPage:{
        followingInProgress: Array<number>
    }
}

const UsersContainer = () => {

    const selectUsersState = (state: UsersState) => state.usersPage.users
    const users = useSelector(selectUsersState);

    const selectPageSizeState = (state: PageSizeState) => state.usersPage.pageSize
    const pageSize = useSelector(selectPageSizeState)

    const totalUsersCountState = (state: TotalUsersCountState) => state.usersPage.totalUsersCount
    const totalUsersCount = useSelector(totalUsersCountState);

    const currentPageState = (state: CurrentPageState) => state.usersPage.currentPage
    const current = useSelector(currentPageState);

    const selectIsFetching = (state: IsFetchingState) => state.usersPage.isFetching
    const isFetching = useSelector(selectIsFetching)

    const selectIsProgress = (state: IsProgressState) => state.usersPage.followingInProgress
    const isProgress = useSelector(selectIsProgress)

    const dispatch : any = useDispatch()

    useEffect(() => {
        dispatch(getUsersThunkCreator(current, pageSize))
    }, [current, pageSize])

    const currentPageData = (page) => {
        dispatch(getPageThunkCreator(page, pageSize))
    };
    return (
        <>
            {isFetching === true ? <Loader/> : null}
            <div className={s.container}>
                <Users user={users} totalCount={totalUsersCount} currentPageData={currentPageData}
                       isProgress={isProgress} followThunkCreator={followThunkCreator}
                       pageSize={pageSize} current={current}
                />
            </div>
        </>
    )
}
export default UsersContainer