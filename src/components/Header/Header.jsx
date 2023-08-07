import React from "react";
import s from "./Header.module.scss";
import {NavLink} from "react-router-dom";
import logo from "../../assets/logo.png"
import {useDispatch} from "react-redux";
import {deleteLogin} from "../../redux/profilePageReducer.ts";
import CustomButton from "../../utilits/CustomButton/CustomButton";


const Header = (props) => {

  const dispatch = useDispatch()

  const {isAuth,login,photos} = props

  const myAvatar =  photos && photos

  const logOuting = () => {

   dispatch(deleteLogin())
  }

    return (
        <header className={s.header}>
          <NavLink to={'/profile'} >
            <img src={logo} alt="logoImage" />
          </NavLink>
            <div className={s.headerName}>
           <h1>Make friends easily </h1>
            </div>
          <div className={s.loginBlock}>
            <div className={s.headerInfo}>
            <img className={s.header_image} src={myAvatar} alt={'avatar'} />
            {isAuth ?  <NavLink to={'/profile'}>{login}</NavLink> :  <NavLink to={"/login"}>Login</NavLink>}
            </div>
            {/*{isAuth ? <button onClick={() => logOuting()}>Log out</button> : null}*/}
            {isAuth ? <CustomButton callback={logOuting} name={'logout'}></CustomButton> : null}
          </div>
        </header>
    )
}

export default Header;