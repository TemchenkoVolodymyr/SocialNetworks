import React, {useEffect, useState} from 'react';
import {updateProfileStatusThinkCreator} from "../../../../redux/profilePageReducer";
import {useDispatch} from "react-redux";



const ProfileStatusWithHooks = (props) => {

  let {status} = props

  const [editMode,setEditMode] = useState(false);
  const [newStatus,setNewStatus] = useState(status);

  const dispatch = useDispatch()

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
    dispatch(updateProfileStatusThinkCreator(newStatus))
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