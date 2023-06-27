import React from "react";
import s from "./Nav.module.css";
import SideFriends from "./sideFriends/sideFriends";
import NavigationBar from "./NavigationBar";


const NavBar = (props) => {

  return (
    <>
      <nav className={s.nav}>
      <NavigationBar path={"/profile"} nameItem={"Profile"}/>
      <NavigationBar path={"/dialogs"} nameItem={"messages"}/>
      <NavigationBar path={"/news"} nameItem={"News"}/>
      <NavigationBar path={"/musics"} nameItem={"Musics"}/>
      <NavigationBar path={"/settings"} nameItem={"Settings"}/>
      <NavigationBar path={"/users"} nameItem={"New users"}/>

      <SideFriends friends={props.sidebar.friends}/>
      </nav>
    </>
  )
}

export default NavBar
