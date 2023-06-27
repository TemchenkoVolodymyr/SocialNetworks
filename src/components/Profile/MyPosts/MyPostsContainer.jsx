import React from "react";

import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {ShowNewPostText,AddNewPost} from "../../../redux/profilePageReducer";



const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        NewPostText : (text) => {
            dispatch(ShowNewPostText(text));
            dispatch(AddNewPost());
        }
    }
}
const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps) (MyPosts);


export default MyPostsContainer;