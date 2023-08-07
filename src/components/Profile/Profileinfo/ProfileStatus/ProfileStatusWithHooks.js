import React, {useEffect, useState} from 'react';
import {
  getProfileThinkCreator, SetProfileStatus,
  setProfileStatusThinkCreator,
  updateProfileStatusThinkCreator
} from "../../../../redux/profilePageReducer.ts";
import {useDispatch, useSelector} from "react-redux";
import s from './ProfileStatusWithHooks.module.scss'
import {getProfile} from "../../../../api/apiData";



const ProfileStatusWithHooks = (props) => {

  // let {status} = props
  const status = useSelector((state) => state.profilePage.status.data);
  const [editMode,setEditMode] = useState(false);
  const [newStatus,setNewStatus] = useState('');

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
    dispatch(updateProfileStatusThinkCreator(newStatus,props.profileId))
  }

  const onChangeStatus = (e) => {
    setNewStatus(e.currentTarget.value)
  }
  return (
  <div>
    {editMode ?
      <input autoFocus={true} onBlur={finishEditMode} type="text" value={newStatus} onChange={onChangeStatus}/>
      :
      <div className={s.statusWrapper}>
      <p>My status :</p>
      <span onDoubleClick={startEditInputMode}>{newStatus}</span>
      </div>}

  </div>
  )
}

export default ProfileStatusWithHooks;