import React from "react";

import s from "./Post.module.css";

const Post = (props) => {
  let {img,message,like} = props
  return (
    <div className={s.post}>
      <img src={img} alt="user image" />
      <p className={s.comments}>{message}</p>
      <div>
       <span>{like}</span>
        </div>
    </div>
   
  )
}

export default Post;