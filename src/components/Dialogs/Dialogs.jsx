import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import FormDialogs from "./FormDialogs";


const Dialogs = (props) => {

  const {dialogPage, addNewMessage} = props
  const showNewMessage = (message) => {
    addNewMessage(message)

  }
  const DialogItems = dialogPage.dialogsItem
    .map(post => <DialogItem name={post.name} key={post.id} id={post.id}/>)
  const PostItems = dialogPage.messageItem
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
        <FormDialogs showNewMessage={showNewMessage}/>
      </div>

    </>
  )
}

export default Dialogs;