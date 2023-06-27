import React, {useEffect, useState} from 'react';
import {getProfile} from "../../../../api/apiData";
import {updateProfileStatusThinkCreator} from "../../../../redux/profilePageReducer";



const ProfileStatusWithHooks = (props) => {

  let {status,updateStatus} = props

  const [editMode,setEditMode] = useState(false);
  const [newStatus,setNewStatus] = useState(status);

  useEffect(() => {
   setNewStatus(status)
  },[status]);


  const startEditInputMode = () => {
    setEditMode(
      true
    )

  };

  const finishEditMode = () => {
    setEditMode(
      false
    )
    updateStatus(newStatus)
  }

  const onChangeStatus = (e) => {
    setNewStatus(e.currentTarget.value)
  }
  return (
  <div>
    {editMode ?
      <input autoFocus={true} onBlur={() => finishEditMode()} type="text" value={newStatus} onChange={onChangeStatus}/>
      :
      <span onDoubleClick={startEditInputMode}>{newStatus}</span>}

  </div>
  )
}

export default ProfileStatusWithHooks;