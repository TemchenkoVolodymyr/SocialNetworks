import React from "react";

import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import FormPosts from "./Post/PostForm";

const MyPosts = (props) => {

    let {profilePage} = props
    let NewPost = (post) => {
        props.NewPostText(post);
    }
    const PostItems = profilePage.postsData
        .map(post => <Post message={post.message} key={post.id} like={post.like} img={post.img}/>)

    return(
    <div className={s.container}>
        <h3 className={s.posts}>My posts</h3>
        <FormPosts addNewPost={NewPost}/>
        {PostItems}
    </div>

)


}

export default MyPosts;