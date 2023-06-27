import React, {useEffect, useState} from "react";
import s from "./ProfileImg.module.css";
import Loader from "../../../Loader/Loader";
import {useDispatch} from "react-redux";
import EditModeInput from "./editModeInput/EditModeInput";
import {
  editAuthUserProfile,
  getDataAuthorization,
  saveAvatarThinkCreator
} from "../../../../redux/AuthorizationReducer";



const ProfileImg = (props) => {

  let {profile, isOwner, myAvatar} = props

  const [editMode, setEditMode] = useState(false)

  const [name, setName] = useState("")
  const [aboutMe, setAboutMe] = useState("")
  const [jobDescription, setJobDescription] = useState("")
  const [lookingJob, setLookingJob] = useState("")
  const [facebook, setFacebook] = useState("")
  const [github, setGithub] = useState("")
  const [twitter, setTwitter] = useState("")
  const [youtube, setYoutube] = useState("")
  const [website, setWebsite] = useState("")
  const [instagram, setInstagram] = useState("");
  const [vk,setVk] = useState('')

  const [myId, setMyId] = useState("");


  const dispatch = useDispatch()

  const changeAvatar = (e) => {
    dispatch(getDataAuthorization())
    dispatch(saveAvatarThinkCreator(e.target.files[0]));
  }

  useEffect(() => {
    if (!profile) {
      setMyId(28850)
    } else {
      setMyId(profile.userId)
    }
  },[profile])
  
  let isGithub = github ? github : 'https://www.instagram.com/instagram/'
  let isVk = vk ? vk : 'https://www.instagram.com/instagram/'
  let isFacebook = facebook ? facebook : 'https://www.instagram.com/instagram/'
  let isTwitter = twitter ? twitter : 'https://www.instagram.com/instagram/'
  let isInstagram = instagram ? instagram : 'https://www.instagram.com/instagram/'

  let data = {
    userId: myId,
    lookingForAJob: false,
    lookingForAJobDescription: jobDescription,
    fullName: name,
    contacts: {
      github: isGithub,
      vk: isVk,
      facebook: isFacebook,
      instagram: isInstagram,
      twitter: isTwitter,
      website: website,
      youtube: youtube,
      mainLink: "mainLink",
    }
  }
  const setEditData = () => {
    dispatch(editAuthUserProfile(data, myId))
    setEditMode(!editMode)
  }

  if (!profile) {
    return <Loader/>
  }
  return (
    <>
      <div className={s.HeaderImg}>
        <img src={isOwner ? profile.photos.small : myAvatar} alt="Profile Avatar"/>
        <button onClick={setEditData}>edit my info</button>
        <div> Username :
          {editMode ? <EditModeInput placeholder={'Change your username'} value={name} setValue={setName}/> :
            <p>{profile && profile.fullName}</p>}
        </div>
        <div> About me :
          {editMode ? <EditModeInput placeholder={'About me'} value={aboutMe} setValue={setAboutMe}/> :
            <p>{profile && profile.aboutMe}</p>}
        </div>
        <div> Job description :
          {editMode ?
            <EditModeInput placeholder={'Job description'} value={jobDescription} setValue={setJobDescription}/> :
            <p> {profile && profile.lookingForAJobDescription}</p>}
        </div>
        <div>Looking for job : {profile && profile.lookingForAJob ? <p>Yes</p> : <p>NO</p>} </div>
        <div> Social links
          {editMode ? <EditModeInput placeholder={'facebook'} value={facebook} setValue={setFacebook}/> :
            <p>{profile && profile.contacts.facebook}</p>}
          github : {editMode ? <EditModeInput placeholder={'github'} value={github} setValue={setGithub}/> :
            <p>{profile && profile.contacts.github}</p>}
          instagram : {editMode ? <EditModeInput placeholder={'instagram'} value={instagram} setValue={setInstagram}/> :
            <p>{profile && profile.contacts.instagram}</p>}
          twitter : {editMode ? <EditModeInput placeholder={'twitter'} value={twitter} setValue={setTwitter}/> :
            <p>{profile && profile.contacts.twitter}</p>}
          youtube : {editMode ? <EditModeInput placeholder={'youtube'} value={youtube} setValue={setYoutube}/> :
            <p>{profile && profile.contacts.youtube}</p>}
          website : {editMode ? <EditModeInput placeholder={'website'} value={website} setValue={setWebsite}/> :
            <p>{profile && profile.contacts.website}</p>}
          vk : {editMode ? <EditModeInput placeholder={'vkontakte'} value={vk} setValue={setVk}/> :
          <p>{profile && profile.contacts.vk}</p> }
        </div>
        {!isOwner ? <input type={'file'} onChange={changeAvatar}/> : null}
      </div>
    </>
  )
}
export default ProfileImg;