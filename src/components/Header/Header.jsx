import React from "react";
import s from "./Header.module.scss";
import {NavLink} from "react-router-dom";
import logo from "../../assets/logo.png"
import {useDispatch} from "react-redux";
import {deleteLogin} from "../../redux/profilePageReducer";


const Header = (props) => {

  const dispatch = useDispatch()

  const {isAuth,login,photos} = props


  const myAvatar =  photos && photos

  const logOuting = () => {

   dispatch(deleteLogin())
  }

    return (
        <header className={s.header}>
            <img src={logo} alt="logoImage" />
            <div className={s.name}>
               SOCIAL
            </div>
          <div className={s.loginBlock}>
            {isAuth ?  <NavLink to={"/login"}>{login}</NavLink> :  <NavLink to={"/login"}>Login</NavLink>}
            {isAuth ? <button onClick={() => logOuting()}>Log out</button> : null}
          </div>
          <img className={s.header_image} src={myAvatar} alt={'avatar'} />
        </header>
    )
}

export default Header;