import React from "react";

import s from "./Post.module.css";

const Post = (props) => {
  const databasePost = props?.post?.dataBase;



  const defaultImagePost = "https://th.bing.com/th/id/OIP.q3YWosr4nPpGqfHYbax2iAHaGv?pid=ImgDet&rs=1";

  const imageItem = databasePost?.image
  console.log(imageItem)
  return (
    <div className={s.post}>

        {databasePost?.postMessage.map(item => <div className={s.wrapperPost}>
          <img src={imageItem} alt="user image" />
          <p className={s.comments}>{item}</p> </div>)}


    </div>
   
  )
}

export default Post;