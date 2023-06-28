import React, {useEffect, useRef, useState} from "react";
import s from "./ProfileImg.module.scss";
import Loader from "../../../Loader/Loader";
import {useDispatch} from "react-redux";
import EditModeInput from "./editModeInput/EditModeInput";
import {
    editAuthUserProfile,
    getDataAuthorization,
    saveAvatarThinkCreator
} from "../../../../redux/AuthorizationReducer";
import CustomButton from "../../../../utilits/CustomButton/CustomButton";
import {HiPhotograph} from "react-icons/hi";
import {FaInstagram} from "react-icons/fa";
import {LiaFacebook} from "react-icons/lia";
import {AiFillTwitterCircle, AiOutlineGithub, AiOutlineLink} from "react-icons/ai";
import {SlSocialVkontakte} from "react-icons/sl";
import {BsYoutube} from "react-icons/bs";
import {SiSimilarweb} from "react-icons/si";
import {NavLink} from "react-router-dom";
import ProfileStatusWithHooks from "../ProfileStatus/ProfileStatusWithHooks";


const ProfileImg = (props) => {

    let {profile, isOwner, myAvatar,profileId} = props

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
    const [vk, setVk] = useState('')
    const [mainLink, setMainLink] = useState('')

    const [myId, setMyId] = useState("");

    const [focusChangeAvatar, setFocusChangeAvatar] = useState(false)


    const dispatch = useDispatch()

    const changeAvatar = (e) => {
        dispatch(getDataAuthorization())
        dispatch(saveAvatarThinkCreator(e.target.files[0]));
    }

    const fileInputRef = useRef(null);

    const handleClickOpenInputFile = () => {
        fileInputRef.current.click()
    }

    useEffect(() => {
        if (!profile) {
            setMyId(28850)
        } else {
            setMyId(profile.userId)
        }
    }, [profile])

    let isGithub = github ? github : profile ? profile.contacts.github : null
    let isVk = vk ? vk : profile ? profile.contacts.vk : null
    let isFacebook = facebook ? facebook : profile ? profile.contacts.facebook : null
    let isTwitter = twitter ? twitter : profile ? profile.contacts.twitter : null
    let isYoutube = youtube ? youtube : profile ? profile.contacts.youtube : null
    let isWebsite = website ? website : profile ? profile.contacts.website : null
    let isInstagram = instagram ? instagram : profile ? profile.contacts.instagram : null
    let isMainLink = mainLink ? mainLink : profile ? profile.contacts.mainLink : null

    const isJobDescription = jobDescription ? jobDescription : profile ? profile.lookingForAJobDescription : null;
    const isName = name ? name : profile ? profile.fullName : null

    const isAboutMe = aboutMe ? aboutMe : profile ? profile.aboutMe : null
    let data = {
        userId: myId,
        lookingForAJob: false,
        lookingForAJobDescription: isJobDescription,
        fullName: isName,
        contacts: {
            github: isGithub,
            vk: isVk,
            facebook: isFacebook,
            instagram: isInstagram,
            twitter: isTwitter,
            website: isWebsite,
            youtube: isYoutube,
            mainLink: isMainLink,
        },
        aboutMe: isAboutMe,
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
            <section className={s.infoProfile}>
                <div className={s.profileAvatar}>
                    <div className={s.wrapperAvatar} style={{backgroundImage: `url(${myAvatar})`}}
                         onFocus={() => setFocusChangeAvatar(true)} onClick={handleClickOpenInputFile}>
                        <span className={s.activeEditMod}><HiPhotograph size={50}></HiPhotograph></span>
                    </div>
                    {!isOwner ? <input className={s.inputFile} type={'file'} onChange={changeAvatar}
                                       ref={fileInputRef}/> : null}
                    <div className={s.wrapperName}>
                        {editMode ?
                            <EditModeInput placeholder={'Change your username'} value={name} setValue={setName}/> :
                            <h4>{profile && profile.fullName}</h4>}
                        <ProfileStatusWithHooks status={props.status} profileId={profileId}/>
                    </div>
                    <div className={s.wrapperInput}>
                        {editMode ?
                            <EditModeInput placeholder={'Job description'} value={jobDescription}
                                           setValue={setJobDescription}/> :
                            <p> {profile && profile.lookingForAJobDescription}</p>}
                    </div>
                    <div className={s.wrapperInput}>Looking for job : {profile && profile.lookingForAJob ? <p>Yes</p> :
                        <p>NO</p>} </div>
                    <CustomButton callback={setEditData} name={'Edit my info'}></CustomButton>
                </div>
                <div className={s.infoAboutUser}>
                    <h3>About me</h3>
                    <div className={s.wrapperInput}>
                        {editMode ? <EditModeInput placeholder={'About me'} value={aboutMe} setValue={setAboutMe}/> :
                            <p>{profile && profile.aboutMe}</p>}
                    </div>
                </div>
                <div className={s.infoAboutUser}>
                    <h3>Links</h3>
                    <div className={s.wrapperInput}>
                        {editMode ? <EditModeInput placeholder={'facebook'} value={facebook} setValue={setFacebook}/> :
                            <NavLink to={profile.contacts.facebook}><LiaFacebook/>{profile && profile.contacts.facebook}
                            </NavLink>}
                    </div>
                    <div className={s.wrapperInput}>
                        {editMode ? <EditModeInput placeholder={'github'} value={github} setValue={setGithub}/> :
                            <NavLink to={profile.contacts.github}><AiOutlineGithub/>{profile && profile.contacts.github}
                            </NavLink>}
                    </div>
                    <div className={s.wrapperInput}>
                        {editMode ?
                            <EditModeInput placeholder={'instagram'} value={instagram} setValue={setInstagram}/> :
                            <NavLink
                                to={profile.contacts.instagram}><FaInstagram/>{profile && profile.contacts.instagram}
                            </NavLink>}
                    </div>
                    <div className={s.wrapperInput}>
                        {editMode ? <EditModeInput placeholder={'twitter'} value={twitter} setValue={setTwitter}/> :
                            <NavLink
                                to={profile.contacts.twitter}><AiFillTwitterCircle/>{profile && profile.contacts.twitter}
                            </NavLink>}
                    </div>
                    <div className={s.wrapperInput}>
                        {editMode ? <EditModeInput placeholder={'youtube'} value={youtube} setValue={setYoutube}/> :
                            <NavLink to={profile.contacts.youtube}><BsYoutube/>{profile && profile.contacts.youtube}
                            </NavLink>}
                    </div>
                    <div className={s.wrapperInput}>
                        {editMode ? <EditModeInput placeholder={'website'} value={website} setValue={setWebsite}/> :
                            <NavLink to={profile.contacts.website}><SiSimilarweb/>{profile && profile.contacts.website}
                            </NavLink>}
                    </div>
                    <div className={s.wrapperInput}>
                        {editMode ? <EditModeInput placeholder={'vkontakte'} value={vk} setValue={setVk}/> :
                            <NavLink to={profile.contacts.vk}><SlSocialVkontakte/>{profile && profile.contacts.vk}
                            </NavLink>}
                    </div>
                    <div className={s.wrapperInput}>
                        {editMode ? <EditModeInput placeholder={'mainLink'} value={mainLink} setValue={setMainLink}/> :
                            <NavLink
                                to={profile.contacts.mainLink}><AiOutlineLink/>{profile && profile.contacts.mainLink}
                            </NavLink>}
                    </div>
                </div>

            </section>
        </>
    )
}
export default ProfileImg;