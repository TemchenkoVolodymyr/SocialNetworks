import React from "react";
import s from "./DialogItem.module.scss"
import {NavLink} from "react-router-dom";
import MessageItem from "../MessageItem/MessageItem";

const DialogItem = (props) => {

  const {name,image,idDialog,text,date} = props
  console.log(idDialog)
    let toAddress =   "/dialogs/" + idDialog;
    return (
        <div className={s.dialog}>
            <div className={s.wrapperDialog}>
                <img
                    src={image}
                    alt="avatar"/>
                <NavLink to={toAddress}
                         className={navData => navData.isActive ? s.activeLink : s.dialog}>{name}</NavLink>
            </div>
          <div key={idDialog} className={s.message}>
            {text && text[0]}
            <p>last message was {date}</p>
          </div>

        </div>
    );
}

export default DialogItem;