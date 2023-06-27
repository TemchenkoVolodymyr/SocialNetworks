import React from "react";
import s from "./MessageItem.module.css"

const MessageItem = (props) => {

    return (
        <div className={s.message}>
            {props.text}

        </div>
    )
}

export default MessageItem;