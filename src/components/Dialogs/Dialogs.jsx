import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import FormDialogs from "./FormDialogs";


const Dialogs = (props) => {
    let showNewMessage = (text) => {
        props.addNewMessage(text)

    }
    const DialogItems = props.dialogPage.dialogsItem
        .map(post => <DialogItem name={post.name} key={post.id} id={post.id}/>)
    const PostItems = props.dialogPage.messageItem
        .map(post => <MessageItem text={post.text} key={post.id}/>)
    return (
      <>
      <div className={s.dialogs}>
        <div>
          {DialogItems}
        </div>
        <div>
          {PostItems}

        </div>

        <FormDialogs showNewMessage={showNewMessage} />
      </div>

      </>
    )
}

export default Dialogs;