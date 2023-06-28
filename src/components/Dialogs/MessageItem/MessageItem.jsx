import React from "react";
import s from "./MessageItem.module.css"

const MessageItem = (props) => {
const {text,key,date} = props
    return (
        <div className={s.message} key={key}>
            {text && text[0]}
            <p>{date}</p>
        </div>
    )
}

export default MessageItem;