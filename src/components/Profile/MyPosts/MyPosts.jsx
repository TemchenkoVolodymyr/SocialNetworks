import React, {useEffect, useState} from "react";

import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import FormPosts from "./Post/PostForm";
import {doc, getDoc} from "firebase/firestore";
import {db} from "../../../firebase/firebase";
import {useSelector} from "react-redux";

const MyPosts = (props) => {

    const [posts,setPosts] = useState(null)

    let {profilePage} = props

    const profile = useSelector((state) => state.profilePage.profile);

    const userId = profile && profile.userId

    useEffect(() => {
        getPosts(userId).catch(error => console.log(error))

    },[userId])
    const getPosts = async (id) => {
        const docRef = doc(db, "posts", `${id}`);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            setPosts(docSnap.data())
        } else {
            console.log("No such document!");
        }
    }

    let NewPost = (post) => {
        props.NewPostText(post);
    }

    // const PostItems = posts?.dataBase
    //     .map(post => <Post message={post.postMessage} id={post.id} date={post.date} img={null}/>)


    return(
    <div className={s.container}>
        <h3 className={s.posts}>My posts</h3>
        <FormPosts addNewPost={NewPost} posts={posts} getPosts={getPosts} userId={userId}/>
        <Post post={posts}></Post>
        {/*{PostItems}*/}
    </div>

)


}

export default MyPosts;