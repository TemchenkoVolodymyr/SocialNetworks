import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import FormDialogs from "../FormDialog/FormDialogs";

const CurrentDialog = () => {

  const [currentDialog,setCurrentDialog] = useState(null)

  let {key} = useParams()

  const dialogDataBase = useSelector((state) => state.dialogPage.data)

  useEffect(() => {
    dialogDataBase.messages.map(item => {
      if(item.id === key){
        setCurrentDialog(item)
      }
    })               // Посмотреть что то не так с id и key

  },[dialogDataBase])
console.log(currentDialog)

  return (
    <div>
      <div>
        <img src={currentDialog?.image} alt={'avatar'}/>
        <h4>{currentDialog?.name}</h4>
      </div>
     <div>
       { currentDialog && currentDialog.items.map(item => <p>{item}</p>)}
     </div>
      <FormDialogs />
    </div>
  );
};

export default CurrentDialog;