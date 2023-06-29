import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import FormDialogs from "../FormDialog/FormDialogs";
import s from './CurrentDialog.module.scss'

const CurrentDialog = () => {

  const [currentDialog,setCurrentDialog] = useState(null)

  let {key} = useParams()

  const dialogDataBase = useSelector((state) => state.dialogPage.data)

  useEffect(() => {
    console.log(key)
    dialogDataBase.messages.map(item => {
      console.log(item.id)
      if(item.id === Number(key)){
        setCurrentDialog(item)
      }
    })

  },[dialogDataBase])


  return (
    <>
      <div className={s.header}>
      <h3>Messages</h3>
      </div>
    <div className={s.container}>
      <div className={s.avatar}>
        <img src={currentDialog?.image} alt={'avatar'}/>
        <h4>{currentDialog?.name}</h4>
      </div>
     <div className={s.messages}>
       { currentDialog && currentDialog.items.map(item => <p>{item}</p>)}
       <FormDialogs />
     </div>

    </div>
    </>
  );
};

export default CurrentDialog;